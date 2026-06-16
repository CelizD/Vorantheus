export interface ServiceProcess {
  step: string
  desc: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface ServiceExtended {
  tagline: string
  problem: string
  benefits: string[]
  process: ServiceProcess[]
  faqs: ServiceFaq[]
  priceFrom: string
  timeFrom: string
}

export const servicesExtended: Record<string, ServiceExtended> = {
  'paginas-web': {
    tagline: 'Tu mejor vendedor trabaja las 24 horas del día',
    problem: '¿Tienes un negocio serio pero tu página web no lo refleja? Los clientes juzgan tu empresa en los primeros 5 segundos. Un sitio lento, desactualizado o de plantilla hace que pierdas prospectos antes de que lean tu propuesta.',
    benefits: [
      'Mejor posicionamiento en Google con SEO técnico desde la base',
      'Primera impresión profesional que genera confianza inmediata',
      'Más contactos, llamadas y ventas desde la web',
      'Diseño único que representa tu marca con calidad',
      'Carga rápida en cualquier dispositivo y navegador',
      'Panel de administración para actualizar tu contenido sin código',
      'Seguridad con SSL y protección ante amenazas',
    ],
    process: [
      { step: 'Análisis y estrategia', desc: 'Entendemos tu negocio, público objetivo y competencia para definir la arquitectura y mensajes clave del sitio.' },
      { step: 'Diseño UX/UI', desc: 'Diseñamos mockups personalizados que apruebas antes de escribir una sola línea de código.' },
      { step: 'Desarrollo', desc: 'Construimos el sitio con Next.js y Tailwind CSS, priorizando velocidad, accesibilidad y rendimiento.' },
      { step: 'SEO técnico', desc: 'Configuramos meta tags, sitemap, schema markup, robots.txt y Core Web Vitals para Google.' },
      { step: 'Pruebas', desc: 'Revisamos en todos los dispositivos y navegadores. Corregimos detalles hasta que todo esté perfecto.' },
      { step: 'Entrega y capacitación', desc: 'Publicamos el sitio y te capacitamos para gestionarlo de forma autónoma.' },
    ],
    faqs: [
      { q: '¿Cuánto tiempo tarda en estar listo?', a: 'Una página web estándar tarda entre 3 y 6 semanas según la cantidad de secciones y la velocidad de aprobaciones de diseño.' },
      { q: '¿Necesito tener el contenido listo?', a: 'No necesariamente. Podemos ayudarte a estructurar textos e imágenes, aunque necesitamos que nos proporciones la información base de tu negocio.' },
      { q: '¿Puedo editar el sitio yo mismo?', a: 'Sí. Incluimos un panel de administración (CMS) para editar textos e imágenes sin conocimientos técnicos.' },
      { q: '¿Qué pasa si necesito cambios después?', a: 'Incluimos un período de ajustes post-entrega. Para cambios continuos contamos con planes de mantenimiento mensual.' },
      { q: '¿El sitio aparecerá en Google?', a: 'Aplicamos optimización SEO técnica desde el inicio. El posicionamiento orgánico lleva tiempo, pero el sitio estará correctamente configurado para que Google lo indexe.' },
    ],
    priceFrom: 'Desde $15,000 MXN',
    timeFrom: '3 a 6 semanas',
  },
  'landing-pages': {
    tagline: 'Convierte más clics en clientes con cada campaña',
    problem: 'Inviertes en publicidad en Facebook, Google o Instagram pero no estás obteniendo los resultados esperados. El problema muchas veces no es el anuncio: es la página de destino. Una landing mal diseñada desperdicia tu presupuesto publicitario.',
    benefits: [
      'Mayor tasa de conversión de tus campañas publicitarias',
      'Velocidad extrema de carga para no perder leads por lentitud',
      'Estructura persuasiva probada que guía al visitante hacia la acción',
      'Integración con píxeles de Facebook y Google para retargeting',
      'Conexión directa con tu CRM o plataforma de email marketing',
      'A/B testing para identificar qué versión convierte mejor',
      'Reportes claros de métricas de conversión',
    ],
    process: [
      { step: 'Análisis de campaña', desc: 'Revisamos tu público, oferta y objetivo para diseñar la estructura más efectiva.' },
      { step: 'Copywriting y estructura', desc: 'Definimos el mensaje principal, beneficios, objeciones y llamadas a la acción.' },
      { step: 'Diseño persuasivo', desc: 'Diseñamos una landing que guía visualmente al visitante hacia la conversión.' },
      { step: 'Desarrollo e integraciones', desc: 'Desarrollamos la landing y conectamos píxeles, formularios y CRMs.' },
      { step: 'Configuración de tracking', desc: 'Configuramos eventos de conversión para medir el ROI de tu campaña con precisión.' },
      { step: 'Pruebas y lanzamiento', desc: 'Verificamos velocidad, formularios y píxeles antes de publicar.' },
    ],
    faqs: [
      { q: '¿Cuánto tarda en estar lista?', a: 'Una landing page estándar tarda entre 1 y 3 semanas, dependiendo de la complejidad y las integraciones.' },
      { q: '¿Puedo usarla para múltiples campañas?', a: 'Sí, aunque lo ideal es tener una landing específica por campaña o segmento de público para maximizar la relevancia y la conversión.' },
      { q: '¿Qué plataformas de anuncios soportan?', a: 'Meta Ads (Facebook/Instagram), Google Ads, TikTok Ads y cualquier plataforma que use URLs de destino.' },
      { q: '¿Incluye el hosting?', a: 'Sí, desplegamos en Vercel con plan incluido. También podemos adaptar a tu hosting existente.' },
    ],
    priceFrom: 'Desde $7,000 MXN',
    timeFrom: '1 a 3 semanas',
  },
  'tiendas-en-linea': {
    tagline: 'Vende tus productos las 24 horas sin depender de nadie',
    problem: 'Dependes de redes sociales o de que tus clientes te busquen directamente para vender. Sin una tienda en línea propia, pierdes ventas en horarios en que estás ocupado o desconectado, y tu competencia con tienda online te está ganando terreno.',
    benefits: [
      'Ventas las 24 horas del día, los 7 días de la semana',
      'Catálogo digital con fotos, descripciones y precios actualizables',
      'Cobros seguros con Stripe, PayPal o MercadoPago',
      'Control total de tu inventario desde un panel propio',
      'Notificaciones automáticas de pedidos por email o WhatsApp',
      'Sin comisiones de plataforma, las ganancias son tuyas',
      'SEO para aparecer cuando busquen tus productos en Google',
    ],
    process: [
      { step: 'Análisis del catálogo', desc: 'Revisamos tus productos, categorías, variantes y procesos de venta actuales.' },
      { step: 'Diseño de tienda', desc: 'Diseñamos la tienda con tu branding, priorizando experiencia de compra y conversión.' },
      { step: 'Desarrollo e integraciones', desc: 'Construimos el e-commerce con carrito, checkout y pasarelas de pago integradas.' },
      { step: 'Carga de productos', desc: 'Cargamos tu catálogo inicial o te enseñamos a cargarlo desde el panel.' },
      { step: 'Pruebas de compra', desc: 'Realizamos transacciones de prueba para verificar el flujo completo.' },
      { step: 'Lanzamiento y capacitación', desc: 'Publicamos la tienda y te capacitamos para gestionar pedidos, inventario y clientes.' },
    ],
    faqs: [
      { q: '¿Qué métodos de pago puedo aceptar?', a: 'Stripe, PayPal, MercadoPago, OXXO Pay, transferencias y cualquier método disponible en tu mercado.' },
      { q: '¿Tiene límite de productos?', a: 'No. El catálogo es ilimitado.' },
      { q: '¿Puedo gestionar el inventario yo mismo?', a: 'Sí. Tendrás un panel de administración completo para actualizar stock, precios y productos en tiempo real.' },
      { q: '¿Pueden comprar desde celular?', a: 'Sí, el diseño es completamente responsive y optimizado para compras desde smartphone.' },
      { q: '¿Me cobran comisión por venta?', a: 'Nosotros no cobramos comisión. Solo pagas las comisiones propias de la pasarela de pago que elijas (Stripe ~2.9%, etc.).' },
    ],
    priceFrom: 'Desde $20,000 MXN',
    timeFrom: '4 a 8 semanas',
  },
  'sistemas-administrativos': {
    tagline: 'Tu empresa en un solo lugar, sin Excel ni papel',
    problem: '¿Usas hojas de cálculo, documentos en papel o software genérico que no se adapta a tus procesos? Cada empresa tiene flujos únicos. El software genérico te hace adaptar tu operación a la herramienta, en lugar de lo contrario. Eso se traduce en errores, tiempo perdido y datos dispersos.',
    benefits: [
      'Todos tus procesos centralizados en un solo sistema',
      'Eliminación de errores humanos por duplicación de datos',
      'Reportes y dashboards en tiempo real para tomar mejores decisiones',
      'Acceso multi-usuario con roles y permisos personalizados',
      'Facturación electrónica CFDI integrada sin software adicional',
      'Accesible desde cualquier dispositivo, sin instalación',
      'Escala contigo conforme crece tu empresa',
    ],
    process: [
      { step: 'Levantamiento de procesos', desc: 'Analizamos cómo funciona tu empresa: flujos, áreas, usuarios y necesidades específicas.' },
      { step: 'Diseño de arquitectura', desc: 'Definimos los módulos, base de datos y estructura del sistema antes de escribir código.' },
      { step: 'Desarrollo modular', desc: 'Construimos el sistema por módulos para que puedas usar cada parte conforme avanzamos.' },
      { step: 'Integración y pruebas', desc: 'Conectamos todos los módulos y realizamos pruebas exhaustivas con datos reales.' },
      { step: 'Migración de datos', desc: 'Si tienes datos en Excel u otro sistema, los migramos al nuevo sistema.' },
      { step: 'Capacitación y soporte', desc: 'Capacitamos a todo tu equipo y brindamos soporte durante el período de adopción.' },
    ],
    faqs: [
      { q: '¿Pueden integrar facturación electrónica CFDI?', a: 'Sí, integramos directamente con el SAT o con proveedores certificados como Facturapi o SW Sapien.' },
      { q: '¿Cuántos usuarios puede tener?', a: 'Los usuarios son ilimitados. Configuramos roles y permisos según tu organigrama.' },
      { q: '¿Funciona sin internet?', a: 'El sistema es web y requiere internet, aunque podemos desarrollar funcionalidades offline para casos específicos.' },
      { q: '¿Pueden integrarse con mis sistemas actuales?', a: 'Sí, integramos con APIs de terceros: SAT, bancos, plataformas de envío, ERP existentes y más.' },
      { q: '¿Qué tan segura es la información?', a: 'Usamos PostgreSQL con Supabase, backups automáticos diarios, SSL y control de acceso por roles.' },
    ],
    priceFrom: 'Desde $35,000 MXN',
    timeFrom: '8 a 20 semanas',
  },
  'aplicaciones-moviles': {
    tagline: 'Llega a tus clientes directo en su smartphone',
    problem: 'Tus clientes pasan horas en sus teléfonos pero no tienes presencia ahí más allá de redes sociales. Una app propia te da un canal directo de comunicación, fidelización y ventas que no depende de algoritmos ni plataformas de terceros.',
    benefits: [
      'Presencia permanente en el teléfono de tus clientes',
      'Notificaciones push para comunicarte directamente con tu audiencia',
      'Experiencia de usuario superior a cualquier sitio web móvil',
      'Funcionalidades nativas: cámara, GPS, pagos, biometría',
      'Disponible en App Store (iOS) y Google Play (Android)',
      'Modo offline para que funcione sin conexión a internet',
      'Analytics de uso para entender el comportamiento de tus usuarios',
    ],
    process: [
      { step: 'Definición de funcionalidades', desc: 'Priorizamos las funciones que más valor aportan para el primer lanzamiento (MVP).' },
      { step: 'Diseño de UX/UI', desc: 'Diseñamos la experiencia y la interfaz siguiendo las guías de iOS y Android.' },
      { step: 'Desarrollo React Native', desc: 'Construimos la app con React Native para publicar en ambas plataformas con un solo código.' },
      { step: 'Integración de backend', desc: 'Conectamos la app con APIs, base de datos, autenticación y notificaciones push.' },
      { step: 'Pruebas en dispositivos reales', desc: 'Probamos en múltiples dispositivos iOS y Android antes de enviar a revisión.' },
      { step: 'Publicación', desc: 'Gestionamos el proceso de publicación en App Store y Google Play (puede tomar 1-2 semanas de revisión).' },
    ],
    faqs: [
      { q: '¿La app funciona en iOS y Android?', a: 'Sí. Usamos React Native que permite publicar en ambas plataformas desde un solo código base, reduciendo tiempo y costo.' },
      { q: '¿Cuánto tiempo tarda la revisión de las tiendas?', a: 'App Store tarda entre 1 y 7 días. Google Play entre 1 y 3 días. Este tiempo está fuera de nuestro control.' },
      { q: '¿Necesito una cuenta de desarrollador?', a: 'Sí. Debes tener cuenta en Apple Developer ($99 USD/año) y Google Play ($25 USD único). Te ayudamos a crearlas si no las tienes.' },
      { q: '¿Pueden agregar nuevas funciones después?', a: 'Sí. Desarrollamos las apps de forma modular para facilitar la evolución del producto.' },
    ],
    priceFrom: 'Desde $45,000 MXN',
    timeFrom: '10 a 24 semanas',
  },
  'automatizacion-ia': {
    tagline: 'Haz más con menos: IA que trabaja mientras tú duermes',
    problem: 'Tu equipo dedica horas a tareas repetitivas: responder las mismas preguntas de clientes, copiar datos de un sistema a otro, enviar correos de seguimiento manualmente. Ese tiempo tiene un costo real. La IA puede automatizar esos procesos con una fracción de ese costo.',
    benefits: [
      'Atención al cliente automática 24/7 sin contratar más personal',
      'Reducción de errores en procesos que hoy se hacen manualmente',
      'Respuesta inmediata a clientes en WhatsApp, email o web',
      'Clasificación automática de datos, leads y solicitudes',
      'Integración con los sistemas y apps que ya usas',
      'Reportes automáticos sin trabajo manual',
      'Escalabilidad: atiende 10 o 10,000 conversaciones sin costo adicional',
    ],
    process: [
      { step: 'Mapeo de procesos', desc: 'Identificamos qué tareas repetitivas consume más tiempo y cuáles son automatizables.' },
      { step: 'Diseño de flujos', desc: 'Diseñamos los flujos de automatización y la lógica del chatbot o proceso.' },
      { step: 'Desarrollo e integración', desc: 'Construimos las automatizaciones y las conectamos con tus sistemas existentes.' },
      { step: 'Entrenamiento del modelo', desc: 'Configuramos la IA con tu información, tono de marca y casos de uso específicos.' },
      { step: 'Pruebas y ajuste', desc: 'Probamos los flujos con casos reales y ajustamos la lógica hasta obtener resultados óptimos.' },
      { step: 'Monitoreo y mejora continua', desc: 'Supervisamos el rendimiento y ajustamos el sistema según el comportamiento real.' },
    ],
    faqs: [
      { q: '¿Pueden conectar el chatbot a mi WhatsApp?', a: 'Sí, integramos con WhatsApp Business API para que el chatbot opere en el canal favorito de tus clientes.' },
      { q: '¿El chatbot puede escalar a un humano?', a: 'Sí. Diseñamos flujos de escalamiento para que el chatbot transfiera conversaciones complejas a un agente humano.' },
      { q: '¿Qué herramientas usan para automatización?', a: 'OpenAI (GPT-4), Langchain, Make, Zapier, Python y APIs personalizadas según el caso.' },
      { q: '¿Funciona con mis sistemas actuales?', a: 'Sí. Nos integramos con CRMs, sistemas de facturación, e-commerce, hojas de cálculo y cualquier sistema con API.' },
      { q: '¿Puedo ver las conversaciones y métricas?', a: 'Sí, incluimos un dashboard con historial de conversaciones, tasas de resolución y métricas de rendimiento.' },
    ],
    priceFrom: 'Desde $22,000 MXN',
    timeFrom: '4 a 10 semanas',
  },
  'mantenimiento': {
    tagline: 'Tu inversión protegida y funcionando siempre',
    problem: 'Tu software fue desarrollado y funcionó perfecto al inicio. Pero los frameworks se actualizan, las dependencias generan vulnerabilidades, el tráfico crece y pequeños errores se acumulan. Sin mantenimiento, lo que hoy funciona bien puede convertirse en un problema costoso mañana.',
    benefits: [
      'Tu software siempre actualizado y libre de vulnerabilidades de seguridad',
      'Backups automáticos diarios para no perder información nunca',
      'Monitoreo 24/7 con alertas en caso de caída',
      'Tiempo para mejoras y ajustes incluido cada mes',
      'Soporte prioritario vía WhatsApp con respuesta rápida',
      'Reporte mensual de métricas: uptime, tráfico, rendimiento',
      'Renovación de dominio y hosting gestionada sin que tengas que preocuparte',
    ],
    process: [
      { step: 'Diagnóstico inicial', desc: 'Revisamos el estado actual de tu software: actualizaciones pendientes, vulnerabilidades y métricas base.' },
      { step: 'Plan de trabajo mensual', desc: 'Definimos las prioridades de mantenimiento para el primer mes.' },
      { step: 'Actualizaciones de seguridad', desc: 'Aplicamos parches y actualizaciones de dependencias de forma controlada.' },
      { step: 'Cambios del mes', desc: 'Implementamos hasta 5 horas de mejoras o ajustes solicitados.' },
      { step: 'Pruebas y verificación', desc: 'Verificamos que todo funcione correctamente después de cada actualización.' },
      { step: 'Reporte mensual', desc: 'Te enviamos un reporte con uptime, cambios realizados, métricas y estado general.' },
    ],
    faqs: [
      { q: '¿Qué pasa si necesito más de 5 horas de cambios?', a: 'Las horas adicionales se cobran a una tarifa preferencial para clientes con contrato de mantenimiento.' },
      { q: '¿Puedo cancelar el servicio cuando quiera?', a: 'Sí. Los planes son mensuales y puedes cancelar con 30 días de aviso previo.' },
      { q: '¿Dan soporte a software que no desarrollaron ustedes?', a: 'Sí, aunque primero hacemos una auditoría técnica del código para conocer el estado y complejidad.' },
      { q: '¿Tienen horario de soporte?', a: 'La atención por WhatsApp es de lunes a sábado en horario de oficina. El monitoreo de uptime es 24/7 automatizado.' },
    ],
    priceFrom: 'Desde $1,500 MXN/mes',
    timeFrom: 'Contrato mensual',
  },
}
