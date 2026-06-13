import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { quoteRequestSchema, type QuoteRequestData } from '@/lib/quote-schema'
import { siteConfig } from '@/lib/site'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const resendApiKey = process.env.RESEND_API_KEY
const quoteNotifyEmail = process.env.QUOTE_NOTIFY_EMAIL || siteConfig.email
const quoteFromEmail = process.env.QUOTE_FROM_EMAIL || 'Vorantheus <onboarding@resend.dev>'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderQuoteText(data: QuoteRequestData) {
  return [
    'Nueva solicitud de cotizacion',
    '',
    `Nombre: ${data.nombre}`,
    `Correo: ${data.correo}`,
    `WhatsApp: ${data.whatsapp}`,
    `Negocio: ${data.negocio}`,
    `Tipo de proyecto: ${data.tipo_proyecto}`,
    `Presupuesto: ${data.presupuesto}`,
    `Origen: ${data.origen || 'No especificado'}`,
    `Pagina: ${data.pagina || 'No especificada'}`,
    '',
    'Descripcion:',
    data.descripcion,
  ].join('\n')
}

function renderQuoteHtml(data: QuoteRequestData) {
  const rows = [
    ['Nombre', data.nombre],
    ['Correo', data.correo],
    ['WhatsApp', data.whatsapp],
    ['Negocio', data.negocio],
    ['Tipo de proyecto', data.tipo_proyecto],
    ['Presupuesto', data.presupuesto],
    ['Origen', data.origen || 'No especificado'],
    ['Pagina', data.pagina || 'No especificada'],
  ]

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">Nueva solicitud de cotizacion</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 8px 10px; border: 1px solid #e2e8f0; font-weight: 700; width: 180px;">${label}</td>
                  <td style="padding: 8px 10px; border: 1px solid #e2e8f0;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Descripcion</h2>
      <p style="white-space: pre-wrap; background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px;">${escapeHtml(data.descripcion)}</p>
    </div>
  `
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Solicitud inválida.' }, { status: 400 })
  }

  const parsed = quoteRequestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Revisa los campos del formulario.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    )
  }

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      {
        ok: false,
        message: 'El formulario no está configurado para recibir solicitudes todavía.',
      },
      { status: 503 },
    )
  }

  const data = parsed.data
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })

  const { error } = await supabase.from('quotes').insert([
    {
      nombre: data.nombre,
      correo: data.correo,
      whatsapp: data.whatsapp,
      negocio: data.negocio,
      tipo_proyecto: data.tipo_proyecto,
      presupuesto: data.presupuesto,
      descripcion: data.descripcion,
      created_at: new Date().toISOString(),
    },
  ])

  if (error) {
    console.error('Error saving quote request', error)
    return NextResponse.json(
      {
        ok: false,
        message: 'No pudimos guardar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.',
      },
      { status: 500 },
    )
  }

  let notificationSent = false

  if (resendApiKey && quoteNotifyEmail) {
    try {
      const resend = new Resend(resendApiKey)
      const { error: emailError } = await resend.emails.send({
        from: quoteFromEmail,
        to: quoteNotifyEmail,
        replyTo: data.correo,
        subject: `Nueva cotización: ${data.negocio}`,
        text: renderQuoteText(data),
        html: renderQuoteHtml(data),
      })

      if (emailError) {
        console.error('Error sending quote notification', emailError)
      } else {
        notificationSent = true
      }
    } catch (emailError) {
      console.error('Error sending quote notification', emailError)
    }
  }

  return NextResponse.json({ ok: true, notificationSent }, { status: 201 })
}
