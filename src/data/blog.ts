export interface BlogBullet {
  title: string
  text: string
}

export interface BlogSection {
  heading: string
  paragraphs?: string[]
  bullets?: BlogBullet[]
}

export interface BlogContent {
  intro: string[]
  sections: BlogSection[]
  ctaTitle: string
  ctaText: string
  ctaLabel: string
  ctaHref: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content?: BlogContent
}

const defaultCta = {
  ctaTitle: '¿Quieres llevar esta idea a tu negocio?',
  ctaText:
    'En Vorantheus podemos ayudarte a convertir una necesidad digital en una solución clara, profesional y lista para crecer.',
  ctaLabel: 'Cotizar con Vorantheus →',
  ctaHref: '/cotizar',
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'pagina-web-profesional-ayuda-vender-mas-servicios',
    title: 'Cómo una página web profesional ayuda a vender más servicios',
    description:
      'Un sitio web claro convierte visitas en prospectos al explicar tu oferta, generar confianza y facilitar que te contacten en el momento correcto.',
    date: '2026-06-13',
    readTime: '6 min',
    category: 'Páginas web',
    content: {
      intro: [
        'Vender servicios no depende solo de tener buenos precios o experiencia. También depende de que las personas entiendan rápidamente qué haces, por qué pueden confiar en ti y cuál es el siguiente paso para contratarte.',
        'Una página web profesional ayuda justo en ese punto: ordena tu mensaje, responde dudas frecuentes y convierte el interés inicial en una oportunidad comercial real.',
      ],
      sections: [
        {
          heading: 'Convierte interés en confianza',
          paragraphs: [
            'Cuando alguien necesita un servicio, normalmente compara varias opciones antes de escribir por WhatsApp o pedir una cotización. Si tu sitio se ve profesional, carga rápido y explica tu propuesta con claridad, la percepción de tu empresa mejora desde el primer contacto.',
            'La confianza no se construye únicamente con diseño. También nace de mostrar información completa: servicios, proceso de trabajo, casos, preguntas frecuentes, datos de contacto y señales de que hay una empresa seria detrás.',
          ],
        },
        {
          heading: 'Presenta tus servicios con claridad',
          bullets: [
            {
              title: 'Oferta fácil de entender',
              text: 'Cada servicio debe explicar qué incluye, para quién es útil y qué problema resuelve.',
            },
            {
              title: 'Pruebas de confianza',
              text: 'Portafolio, experiencia, certificaciones o casos de uso ayudan a que el visitante sienta menos riesgo al contactarte.',
            },
            {
              title: 'CTAs visibles',
              text: 'Botones de cotización, WhatsApp y formularios deben estar ubicados donde el usuario naturalmente toma decisiones.',
            },
            {
              title: 'SEO comercial',
              text: 'Una estructura bien pensada permite aparecer cuando alguien busca soluciones relacionadas con tus servicios.',
            },
          ],
        },
        {
          heading: 'Reduce fricción antes de cotizar',
          paragraphs: [
            'Muchos prospectos no escriben porque no saben si la empresa atiende su necesidad, cuánto puede costar o cómo funciona el proceso. Una página bien organizada reduce esa incertidumbre antes de la conversación comercial.',
            'Esto no significa saturar el sitio de información. Significa presentar lo importante en el orden correcto: problema, solución, beneficios, ejemplos y acción siguiente.',
          ],
        },
        {
          heading: 'Vende incluso fuera de horario',
          paragraphs: [
            'Un sitio web trabaja aunque tu equipo no esté conectado. Puede recibir formularios, enviar prospectos a WhatsApp, mostrar servicios y explicar tu propuesta durante la noche, fines de semana o días ocupados.',
            'Para negocios de servicios, esto representa una ventaja importante: no todos los clientes deciden en horario de oficina, pero sí esperan encontrar información clara cuando están listos para investigar.',
          ],
        },
      ],
      ctaTitle: '¿Quieres que tu sitio venda mejor tus servicios?',
      ctaText:
        'En Vorantheus diseñamos páginas web profesionales orientadas a confianza, claridad comercial y generación de prospectos.',
      ctaLabel: 'Cotizar página web →',
      ctaHref: '/cotizar?tipo_proyecto=web&origen=blog-servicios',
    },
  },
  {
    slug: 'automatizar-tareas-repetitivas-negocio',
    title: 'Por qué tu negocio necesita automatizar tareas repetitivas',
    description:
      'Automatizar tareas reduce errores, ahorra tiempo y permite que tu equipo se enfoque en ventas, servicio y crecimiento.',
    date: '2026-06-13',
    readTime: '7 min',
    category: 'Automatización',
    content: {
      intro: [
        'En muchos negocios, una parte importante del tiempo se va en tareas repetitivas: copiar datos, responder las mismas preguntas, dar seguimiento manual, preparar reportes o actualizar archivos.',
        'La automatización permite que esas actividades funcionen con menos intervención humana, menos errores y mayor velocidad, sin perder control sobre la operación.',
      ],
      sections: [
        {
          heading: 'El costo oculto de hacer todo manual',
          paragraphs: [
            'Las tareas manuales parecen inofensivas cuando el negocio es pequeño, pero se vuelven un problema cuando aumentan los clientes, pedidos, citas o solicitudes. Lo que antes tomaba minutos empieza a consumir horas cada semana.',
            'Además del tiempo, existe otro costo: errores de captura, seguimientos olvidados, reportes desactualizados y clientes que esperan más de lo necesario para recibir respuesta.',
          ],
        },
        {
          heading: 'Qué tareas conviene automatizar primero',
          bullets: [
            {
              title: 'Seguimiento a prospectos',
              text: 'Registrar solicitudes, enviar confirmaciones y recordar pendientes ayuda a no perder oportunidades.',
            },
            {
              title: 'Reportes y captura de datos',
              text: 'Automatizar reportes reduce trabajo operativo y permite tomar decisiones con información más actualizada.',
            },
            {
              title: 'Inventario, citas o pagos',
              text: 'Procesos repetibles pueden conectarse con sistemas internos para evitar dobles capturas.',
            },
            {
              title: 'Atención inicial con IA',
              text: 'La inteligencia artificial puede responder preguntas frecuentes, clasificar solicitudes o preparar información para el equipo.',
            },
          ],
        },
        {
          heading: 'La automatización no sustituye el criterio humano',
          paragraphs: [
            'Automatizar no significa dejar todo en manos de una máquina. Las mejores soluciones eliminan trabajo repetitivo para que las personas puedan enfocarse en decisiones, atención personalizada y crecimiento comercial.',
            'Un buen sistema debe respetar la forma en que opera el negocio, permitir revisión cuando sea necesario y adaptarse conforme cambian los procesos.',
          ],
        },
        {
          heading: 'Cómo empezar sin complicar la operación',
          paragraphs: [
            'El primer paso no es automatizar todo. Lo correcto es identificar tareas frecuentes, medir cuánto tiempo consumen y elegir procesos donde el impacto sea claro.',
            'A partir de ahí, se puede construir una automatización sencilla, conectarla con herramientas existentes y mejorarla gradualmente. Así el negocio gana eficiencia sin detener su operación diaria.',
          ],
        },
      ],
      ctaTitle: '¿Listo para ahorrar tiempo en tu operación?',
      ctaText:
        'En Vorantheus podemos ayudarte a detectar procesos repetitivos y construir automatizaciones prácticas con IA, integraciones o software a medida.',
      ctaLabel: 'Cotizar automatización →',
      ctaHref: '/cotizar?tipo_proyecto=automatizacion&origen=blog-automatizacion',
    },
  },
  {
    slug: 'por-que-negocio-necesita-pagina-web-profesional-2026',
    title: 'Por qué tu negocio necesita una página web profesional en 2026',
    description:
      'Una página web profesional ya no es solo presencia digital: es confianza, ventas, posicionamiento y una base sólida para crecer.',
    date: '2026-06-12',
    readTime: '7 min',
    category: 'Páginas web',
    content: {
      intro: [
        'En 2026, la primera impresión de un negocio casi siempre ocurre en internet. Antes de llamar, visitar una tienda o pedir una cotización, muchas personas buscan el nombre de la empresa, revisan su sitio web y comparan alternativas.',
        'Por eso, una página web profesional no debe verse como un gasto decorativo. Es una herramienta comercial que trabaja todos los días para explicar lo que haces, generar confianza y convertir visitantes en prospectos reales.',
      ],
      sections: [
        {
          heading: 'Tu sitio web es tu oficina digital',
          paragraphs: [
            'Un perfil en redes sociales ayuda, pero no reemplaza una página web propia. Las redes cambian algoritmos, limitan el diseño y no siempre muestran la información de forma ordenada. Tu sitio, en cambio, es un espacio controlado por tu marca.',
            'Ahí puedes explicar servicios, mostrar proyectos, responder dudas frecuentes, recibir solicitudes y posicionarte en Google con contenido útil para tus clientes.',
          ],
        },
        {
          heading: 'Qué debe tener una página profesional',
          bullets: [
            {
              title: 'Mensaje claro',
              text: 'El visitante debe entender en segundos qué vendes, a quién ayudas y por qué debería contactarte.',
            },
            {
              title: 'Diseño responsive',
              text: 'La mayoría de las visitas llegan desde celular. Si el sitio no se ve bien en móvil, se pierden oportunidades.',
            },
            {
              title: 'Velocidad y SEO',
              text: 'Un sitio rápido y bien estructurado mejora la experiencia del usuario y facilita que Google lo indexe.',
            },
            {
              title: 'Llamados a la acción',
              text: 'Botones de cotización, WhatsApp, formularios y enlaces deben guiar al usuario al siguiente paso.',
            },
          ],
        },
        {
          heading: 'Cómo impacta en ventas y confianza',
          paragraphs: [
            'Un cliente no siempre compra en la primera visita, pero sí forma una opinión. Si tu web se ve desactualizada, lenta o poco clara, el usuario puede asumir que tu servicio funciona igual.',
            'Una página profesional transmite orden, seriedad y capacidad. Además, permite medir cuántas personas llegan, qué servicios consultan y desde dónde se generan mejores oportunidades.',
          ],
        },
        {
          heading: 'La ventaja de empezar bien',
          paragraphs: [
            'Construir una página web desde cero con buenas prácticas evita rehacerla cada año. Una base sólida permite agregar blog, tienda, agenda, panel administrativo o automatizaciones cuando el negocio lo necesite.',
            'La pregunta ya no es si tu empresa necesita una página web. La pregunta es si tu página actual está ayudando a vender o solo existe.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'landing-page-vs-pagina-web-completa',
    title: 'Diferencias entre una landing page y una página web completa',
    description:
      'Conoce cuándo conviene una landing page, cuándo necesitas un sitio completo y cómo elegir la opción correcta para tu estrategia digital.',
    date: '2026-06-10',
    readTime: '6 min',
    category: 'Estrategia digital',
    content: {
      intro: [
        'Muchas empresas piden una página web cuando en realidad necesitan una landing page. Otras lanzan una landing page cuando su negocio ya requiere un sitio completo. La diferencia importa porque afecta presupuesto, estrategia y resultados.',
        'Ambas opciones pueden funcionar muy bien, pero sirven para objetivos distintos.',
      ],
      sections: [
        {
          heading: 'Qué es una landing page',
          paragraphs: [
            'Una landing page es una página enfocada en una sola acción: vender un producto, captar leads, registrar asistentes, descargar un recurso o agendar una llamada.',
            'Tiene menos navegación, menos distracciones y un mensaje muy directo. Es ideal para campañas de anuncios en Google, Facebook, Instagram o TikTok.',
          ],
        },
        {
          heading: 'Qué es una página web completa',
          paragraphs: [
            'Una página web completa reúne varias secciones o páginas: inicio, servicios, portafolio, paquetes, contacto, blog, preguntas frecuentes y páginas legales.',
            'Su objetivo no es solo una conversión inmediata. También construye marca, posicionamiento orgánico, autoridad y confianza a largo plazo.',
          ],
        },
        {
          heading: 'Cuándo elegir cada opción',
          bullets: [
            {
              title: 'Elige landing page',
              text: 'Si vas a lanzar una campaña específica, validar una oferta o vender un servicio concreto con tráfico pagado.',
            },
            {
              title: 'Elige página completa',
              text: 'Si tu empresa necesita presencia formal, explicar varios servicios y posicionarse en buscadores.',
            },
            {
              title: 'Combina ambas',
              text: 'Una estrategia madura puede tener un sitio principal y landing pages para campañas puntuales.',
            },
          ],
        },
        {
          heading: 'La decisión correcta depende del objetivo',
          paragraphs: [
            'No se trata de cuál es mejor, sino de cuál resuelve tu necesidad actual. Una landing page puede vender muy bien, pero se queda corta si el usuario necesita investigar más sobre la empresa.',
            'Una web completa da más contexto, pero puede ser demasiado amplia para una campaña con una sola oferta. En Vorantheus analizamos el objetivo antes de recomendar una estructura.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'como-tienda-en-linea-aumenta-ventas',
    title: 'Cómo una tienda en línea puede aumentar tus ventas',
    description:
      'Una tienda en línea bien construida permite vender 24/7, llegar a más clientes y ordenar procesos de pago, inventario y seguimiento.',
    date: '2026-06-08',
    readTime: '7 min',
    category: 'E-commerce',
    content: {
      intro: [
        'Vender en línea no es solo subir productos a internet. Una tienda digital bien diseñada puede convertirse en un canal de ventas constante, medible y escalable.',
        'Para negocios físicos, marcas locales y emprendimientos en crecimiento, el e-commerce abre una oportunidad clara: vender más allá del horario y la ubicación de la tienda.',
      ],
      sections: [
        {
          heading: 'Ventas disponibles todo el día',
          paragraphs: [
            'Una tienda en línea trabaja aunque tu equipo esté descansando. El cliente puede revisar productos, comparar precios, pagar y dejar sus datos sin esperar respuesta manual.',
            'Esto reduce fricción y captura compras que antes se perdían por mensajes sin responder, horarios limitados o procesos de pago complicados.',
          ],
        },
        {
          heading: 'Qué necesita una tienda para vender bien',
          bullets: [
            {
              title: 'Catálogo claro',
              text: 'Fotos, descripciones, variantes, precios y disponibilidad deben estar organizados de forma sencilla.',
            },
            {
              title: 'Checkout confiable',
              text: 'El proceso de pago debe ser rápido, seguro y compatible con los métodos que usa tu mercado.',
            },
            {
              title: 'Gestión de inventario',
              text: 'Evita vender productos agotados y permite tomar decisiones con datos reales.',
            },
            {
              title: 'Comunicación automática',
              text: 'Correos de confirmación, estados de pedido y notificaciones reducen dudas del cliente.',
            },
          ],
        },
        {
          heading: 'Más alcance y mejores datos',
          paragraphs: [
            'Una tienda en línea permite vender a clientes que no pasan frente a tu local. Además, cada visita deja información: productos más vistos, carritos abandonados, campañas que convierten y ticket promedio.',
            'Con esos datos puedes ajustar precios, promociones, inventario y publicidad con más precisión.',
          ],
        },
        {
          heading: 'El e-commerce también ordena tu operación',
          paragraphs: [
            'Cuando la tienda se conecta con pagos, inventario y reportes, deja de ser solo un escaparate. Se convierte en una herramienta operativa.',
            'La clave está en construirla pensando en el negocio completo, no solo en la apariencia visual.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'que-es-sistema-administrativo',
    title: 'Qué es un sistema administrativo y por qué ayuda a tu negocio',
    description:
      'Un sistema administrativo centraliza ventas, inventario, clientes, reportes y procesos internos para reducir errores y ahorrar tiempo.',
    date: '2026-06-06',
    readTime: '7 min',
    category: 'Sistemas',
    content: {
      intro: [
        'Un sistema administrativo es una plataforma diseñada para controlar y organizar procesos internos de una empresa. Puede incluir inventario, ventas, clientes, compras, facturación, usuarios, reportes y permisos.',
        'Su objetivo es simple: que el negocio deje de depender de archivos dispersos, mensajes y tareas manuales repetitivas.',
      ],
      sections: [
        {
          heading: 'El problema de trabajar con procesos manuales',
          paragraphs: [
            'Cuando cada área usa su propio archivo o libreta, la información se fragmenta. Inventario en Excel, ventas en WhatsApp, clientes en una agenda y reportes hechos a mano generan errores y retrasos.',
            'El dueño o gerente termina tomando decisiones con datos incompletos o desactualizados.',
          ],
        },
        {
          heading: 'Qué puede incluir un sistema administrativo',
          bullets: [
            {
              title: 'Inventario',
              text: 'Entradas, salidas, existencias, alertas de stock bajo y movimientos por usuario.',
            },
            {
              title: 'Ventas y clientes',
              text: 'Registro de pedidos, historial de clientes, cotizaciones y seguimiento comercial.',
            },
            {
              title: 'Reportes',
              text: 'Indicadores de ventas, productos más vendidos, márgenes, cuentas por cobrar y desempeño.',
            },
            {
              title: 'Roles y permisos',
              text: 'Cada usuario ve y modifica solo lo que corresponde a su función.',
            },
          ],
        },
        {
          heading: 'Beneficios para la operación diaria',
          paragraphs: [
            'Un sistema reduce capturas duplicadas, evita errores de inventario y permite consultar información en tiempo real. También ayuda a estandarizar procesos: todos trabajan con las mismas reglas y los mismos datos.',
            'Esto se traduce en menos dependencia de una sola persona, mejor atención al cliente y decisiones más rápidas.',
          ],
        },
        {
          heading: 'Cuándo conviene hacerlo a medida',
          paragraphs: [
            'Si tu negocio tiene procesos específicos que no encajan bien en una plataforma genérica, un sistema a medida puede ser más rentable a largo plazo.',
            'La herramienta se adapta a tu forma de trabajar, no al revés. Esa diferencia suele notarse desde las primeras semanas de uso.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'automatizacion-inteligencia-artificial-pequenos-negocios',
    title: 'Automatización con inteligencia artificial para pequeños negocios',
    description:
      'La IA puede ayudar a pequeños negocios a responder clientes, ordenar información, automatizar tareas y mejorar decisiones sin equipos grandes.',
    date: '2026-06-04',
    readTime: '8 min',
    category: 'Inteligencia artificial',
    content: {
      intro: [
        'La inteligencia artificial ya no es exclusiva de grandes empresas. Hoy un pequeño negocio puede automatizar respuestas, clasificar mensajes, generar reportes, crear seguimientos y conectar herramientas sin contratar un equipo enorme.',
        'La clave es usar IA para resolver problemas concretos, no para seguir una moda.',
      ],
      sections: [
        {
          heading: 'Dónde puede ayudar la IA',
          bullets: [
            {
              title: 'Atención al cliente',
              text: 'Responder preguntas frecuentes, capturar datos iniciales y dirigir al cliente al área correcta.',
            },
            {
              title: 'Seguimiento comercial',
              text: 'Enviar recordatorios, resumir conversaciones y detectar prospectos con mayor intención de compra.',
            },
            {
              title: 'Administración',
              text: 'Clasificar solicitudes, generar reportes y reducir capturas manuales repetitivas.',
            },
            {
              title: 'Marketing',
              text: 'Crear borradores de contenido, analizar preguntas comunes y mejorar campañas con datos reales.',
            },
          ],
        },
        {
          heading: 'IA no significa reemplazar a tu equipo',
          paragraphs: [
            'Una buena automatización no busca quitar el trato humano. Busca que el equipo dedique menos tiempo a tareas repetitivas y más tiempo a resolver casos importantes.',
            'Por ejemplo, un chatbot puede recopilar nombre, servicio de interés, presupuesto y urgencia. Después, una persona de ventas recibe un prospecto más claro.',
          ],
        },
        {
          heading: 'Cómo empezar sin complicarse',
          paragraphs: [
            'El mejor primer paso es identificar una tarea repetitiva y medible: responder las mismas preguntas, copiar datos entre sistemas, enviar seguimientos o armar reportes semanales.',
            'Con una automatización pequeña puedes probar impacto, ajustar procesos y después escalar hacia flujos más completos.',
          ],
        },
        {
          heading: 'Riesgos que debes cuidar',
          bullets: [
            {
              title: 'Datos sensibles',
              text: 'No toda información debe pasar por herramientas externas sin control y políticas claras.',
            },
            {
              title: 'Respuestas incorrectas',
              text: 'La IA debe tener límites, contexto y opción de escalar a una persona.',
            },
            {
              title: 'Automatizar un proceso malo',
              text: 'Antes de automatizar, conviene ordenar el flujo. La IA amplifica lo que ya existe.',
            },
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'app-movil-o-pagina-web',
    title: 'App móvil o página web: cuál necesita primero tu negocio',
    description:
      'No todos los negocios necesitan una app desde el inicio. Aprende a decidir entre app móvil, página web o una estrategia por etapas.',
    date: '2026-06-02',
    readTime: '6 min',
    category: 'Apps móviles',
    content: {
      intro: [
        'Una app móvil puede ser una herramienta poderosa, pero no siempre es el primer paso correcto. Muchos negocios obtienen mejores resultados empezando con una página web profesional y luego evolucionando hacia una app.',
        'La decisión depende del uso esperado, la frecuencia de interacción y el valor que tendrá para el cliente instalar la aplicación.',
      ],
      sections: [
        {
          heading: 'Cuándo conviene empezar con una página web',
          paragraphs: [
            'Si tu objetivo principal es que te encuentren en Google, explicar servicios, generar cotizaciones o vender productos, una página web suele ser la base más eficiente.',
            'No requiere instalación, funciona en cualquier dispositivo y es más fácil de compartir en anuncios, redes sociales y WhatsApp.',
          ],
        },
        {
          heading: 'Cuándo sí tiene sentido una app móvil',
          bullets: [
            {
              title: 'Uso frecuente',
              text: 'El cliente abrirá la app varias veces por semana o mes, no solo una vez.',
            },
            {
              title: 'Funciones nativas',
              text: 'Necesitas notificaciones push, geolocalización, cámara, modo offline o acceso rápido desde el teléfono.',
            },
            {
              title: 'Comunidad o fidelización',
              text: 'La app aporta beneficios constantes, membresías, puntos, pedidos recurrentes o seguimiento personalizado.',
            },
          ],
        },
        {
          heading: 'El riesgo de lanzar una app demasiado pronto',
          paragraphs: [
            'Una app sin estrategia puede quedarse sin descargas o sin uso después de la primera semana. Además, requiere mantenimiento, actualizaciones, publicación en tiendas y soporte para distintos dispositivos.',
            'Antes de invertir, conviene validar que tus clientes realmente la necesitan y que el negocio puede sostenerla.',
          ],
        },
        {
          heading: 'Una ruta inteligente',
          paragraphs: [
            'Para muchas empresas, el camino ideal es empezar con web, medir demanda, ordenar procesos y después construir una app con datos reales.',
            'Así la app no nace como una apuesta, sino como la evolución natural de una estrategia digital que ya funciona.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'errores-comunes-pagina-web-empresa',
    title: 'Errores comunes al crear una página web para una empresa',
    description:
      'Evita los errores que hacen que una página web se vea poco profesional, cargue lento o no convierta visitantes en prospectos.',
    date: '2026-05-31',
    readTime: '7 min',
    category: 'Páginas web',
    content: {
      intro: [
        'Crear una página web para una empresa parece sencillo hasta que empiezan los detalles: estructura, textos, diseño móvil, velocidad, SEO, formularios y medición.',
        'Estos son algunos errores comunes que pueden hacer que una web se vea bien por fuera, pero no ayude realmente al negocio.',
      ],
      sections: [
        {
          heading: 'Hablar demasiado de la empresa y poco del cliente',
          paragraphs: [
            'Muchos sitios empiezan con años de experiencia, misión y visión, pero no explican rápido qué problema resuelven. El visitante llega con una necesidad concreta y quiere saber si puedes ayudarlo.',
            'Un buen sitio debe responder: qué haces, para quién, qué beneficio entregas y cómo contactarte.',
          ],
        },
        {
          heading: 'Descuidar la versión móvil',
          paragraphs: [
            'Una web puede verse excelente en laptop y fallar en celular. Textos pequeños, botones difíciles de tocar, secciones demasiado largas o imágenes pesadas hacen que el usuario se vaya.',
            'Diseñar mobile-first ya no es opcional. Es la forma en la que la mayoría de tus clientes verá el sitio.',
          ],
        },
        {
          heading: 'Errores técnicos frecuentes',
          bullets: [
            {
              title: 'Carga lenta',
              text: 'Imágenes sin optimizar, scripts innecesarios y hosting débil reducen conversiones.',
            },
            {
              title: 'Sin SEO básico',
              text: 'Títulos, metadescripciones, URLs claras y estructura de encabezados deben estar cuidados.',
            },
            {
              title: 'Formularios poco claros',
              text: 'Si pedir cotización es difícil, el visitante no insistirá.',
            },
            {
              title: 'Sin medición',
              text: 'Sin analytics no sabes qué funciona, qué se ignora y dónde se pierden leads.',
            },
          ],
        },
        {
          heading: 'Pensar solo en diseño',
          paragraphs: [
            'Una página bonita no siempre vende. El diseño debe apoyar una estrategia: ordenar información, generar confianza y llevar al usuario a una acción.',
            'En Vorantheus construimos páginas pensando en negocio, no solo en apariencia.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'como-elegir-empresa-software-confiable',
    title: 'Cómo elegir una empresa de software confiable',
    description:
      'Elegir proveedor de software afecta presupuesto, tiempos, seguridad y crecimiento. Estas señales ayudan a tomar una mejor decisión.',
    date: '2026-05-29',
    readTime: '7 min',
    category: 'Software',
    content: {
      intro: [
        'Contratar una empresa de software no es solo comprar código. Es elegir a un equipo que entenderá tus procesos, traducirá necesidades en tecnología y acompañará decisiones importantes.',
        'Una mala elección puede costar meses, dinero y confianza. Una buena elección puede acelerar el crecimiento del negocio.',
      ],
      sections: [
        {
          heading: 'Señales de una empresa confiable',
          bullets: [
            {
              title: 'Hace preguntas antes de cotizar',
              text: 'Si cotiza sin entender objetivos, usuarios y alcance, probablemente está adivinando.',
            },
            {
              title: 'Explica el proceso',
              text: 'Debe quedar claro cómo se trabajará: descubrimiento, diseño, desarrollo, pruebas, entrega y soporte.',
            },
            {
              title: 'Habla de mantenimiento',
              text: 'El software no termina al publicarse. Requiere mejoras, seguridad y soporte.',
            },
            {
              title: 'Es transparente con límites',
              text: 'Un proveedor serio no promete todo en poco tiempo y bajo costo sin explicar riesgos.',
            },
          ],
        },
        {
          heading: 'Qué revisar en una propuesta',
          paragraphs: [
            'La propuesta debe incluir alcance, entregables, tiempos, precio, forma de pago, revisiones, tecnologías, responsabilidades y supuestos.',
            'También conviene preguntar qué pasa si se agregan funciones, cómo se manejará la propiedad del código y qué soporte habrá después de la entrega.',
          ],
        },
        {
          heading: 'El precio no debe ser el único criterio',
          paragraphs: [
            'Elegir la opción más barata puede salir caro si el proyecto queda incompleto, difícil de mantener o sin documentación. Elegir la más cara tampoco garantiza calidad.',
            'Lo importante es comparar valor: claridad, experiencia, comunicación, calidad técnica y entendimiento del negocio.',
          ],
        },
        {
          heading: 'Una relación de largo plazo',
          paragraphs: [
            'El mejor proveedor no solo entrega una primera versión. Te ayuda a priorizar, medir, mejorar y escalar.',
            'Por eso, antes de contratar, observa cómo comunica, qué preguntas hace y si realmente intenta entender el problema de negocio.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'mantenimiento-web',
    title: 'Mantenimiento web: por qué no basta con crear la página',
    description:
      'Publicar una página web es solo el inicio. El mantenimiento mantiene tu sitio seguro, actualizado, rápido y alineado con tu negocio.',
    date: '2026-05-27',
    readTime: '6 min',
    category: 'Mantenimiento',
    content: {
      intro: [
        'Una página web no es un folleto impreso. Vive en un entorno que cambia: navegadores, dispositivos, reglas de SEO, librerías, servidores, seguridad y necesidades del negocio.',
        'Por eso, crearla y olvidarla suele terminar en problemas de rendimiento, errores, contenido desactualizado o pérdida de oportunidades.',
      ],
      sections: [
        {
          heading: 'Qué incluye el mantenimiento web',
          bullets: [
            {
              title: 'Actualizaciones técnicas',
              text: 'Mantener dependencias, frameworks y configuraciones al día para reducir riesgos.',
            },
            {
              title: 'Monitoreo',
              text: 'Detectar caídas, errores o lentitud antes de que afecten a clientes.',
            },
            {
              title: 'Backups',
              text: 'Tener copias de seguridad y una ruta clara de recuperación.',
            },
            {
              title: 'Mejoras continuas',
              text: 'Actualizar textos, servicios, formularios, CTAs y secciones según evoluciona el negocio.',
            },
          ],
        },
        {
          heading: 'El costo de no mantener',
          paragraphs: [
            'Un formulario que deja de enviar correos, un enlace roto, una página lenta o un certificado vencido pueden parecer detalles menores. Pero cada uno puede significar prospectos perdidos.',
            'Además, cuando un sitio se abandona durante mucho tiempo, corregirlo después suele ser más caro que mantenerlo mes a mes.',
          ],
        },
        {
          heading: 'Mantenimiento también es estrategia',
          paragraphs: [
            'No se trata solo de parches técnicos. Revisar métricas, mejorar contenido y ajustar llamados a la acción puede aumentar conversiones sin rehacer todo el sitio.',
            'Un buen plan de mantenimiento convierte la web en una herramienta viva, no en un proyecto congelado.',
          ],
        },
        {
          heading: 'Cuándo contratar soporte continuo',
          paragraphs: [
            'Si tu página genera leads, ventas o reputación, necesita atención constante. Mientras más importante sea para el negocio, más importante es asegurar que funcione bien todos los días.',
            'El mantenimiento adecuado protege la inversión inicial y permite que el sitio siga generando valor.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'software-a-medida-vs-plataformas-genericas',
    title: 'Software a medida vs plataformas genéricas: cuál conviene más',
    description:
      'Compara software personalizado y plataformas listas para usar para decidir qué opción conviene según procesos, presupuesto y crecimiento.',
    date: '2026-05-25',
    readTime: '8 min',
    category: 'Software',
    content: {
      intro: [
        'Cuando una empresa quiere digitalizar procesos, suele tener dos caminos: usar una plataforma genérica existente o construir software a medida.',
        'Ambas opciones pueden ser correctas. La decisión depende del nivel de personalización que necesitas, el presupuesto, la urgencia y el valor estratégico del proceso.',
      ],
      sections: [
        {
          heading: 'Ventajas de una plataforma genérica',
          paragraphs: [
            'Las plataformas listas para usar suelen ser más rápidas de implementar. Ya tienen funciones, soporte, documentación y una cuota mensual predecible.',
            'Funcionan bien cuando tus procesos son estándar: facturación básica, agenda simple, CRM general, email marketing o tareas administrativas comunes.',
          ],
        },
        {
          heading: 'Límites de las soluciones genéricas',
          bullets: [
            {
              title: 'Adaptación parcial',
              text: 'Tu equipo puede terminar cambiando su proceso para encajar en la herramienta.',
            },
            {
              title: 'Costos acumulados',
              text: 'Usuarios extra, integraciones, módulos y comisiones pueden elevar el costo mensual.',
            },
            {
              title: 'Datos dispersos',
              text: 'Si usas varias plataformas, la información puede quedar separada y difícil de analizar.',
            },
            {
              title: 'Dependencia del proveedor',
              text: 'Cambios de precio, límites o políticas quedan fuera de tu control.',
            },
          ],
        },
        {
          heading: 'Cuándo conviene software a medida',
          paragraphs: [
            'El software a medida conviene cuando el proceso es central para el negocio, tiene reglas específicas o representa una ventaja competitiva.',
            'También conviene cuando varias herramientas separadas ya no se comunican bien y necesitas una operación centralizada.',
          ],
        },
        {
          heading: 'Una decisión práctica',
          paragraphs: [
            'Si necesitas resolver algo rápido y estándar, una plataforma genérica puede ser suficiente. Si necesitas diferenciarte, escalar o controlar procesos críticos, el software a medida puede generar más valor.',
            'En muchos casos, la mejor estrategia es empezar con una herramienta existente, validar el proceso y después construir una solución propia cuando el negocio lo justifique.',
          ],
        },
      ],
      ...defaultCta,
    },
  },
  {
    slug: 'cuanto-cuesta-pagina-web-mexico',
    title: '¿Cuánto cuesta hacer una página web en México en 2025?',
    description: 'Guía completa de precios reales para páginas web profesionales en México. Qué factores afectan el costo y cómo no pagar de más.',
    date: '2025-06-01',
    readTime: '8 min',
    category: 'Precios',
  },
  {
    slug: 'react-vs-wordpress',
    title: 'React vs WordPress: ¿cuál elegir para tu negocio en 2025?',
    description: 'Comparativa honesta entre las dos tecnologías más populares para sitios web. Cuándo usar cada una, ventajas y desventajas reales.',
    date: '2025-05-15',
    readTime: '6 min',
    category: 'Tecnología',
  },
  {
    slug: 'sistema-administrativo-vs-excel',
    title: 'Por qué tu negocio ya superó el Excel (y qué hacer al respecto)',
    description: 'Si manejas tu inventario, ventas o clientes en hojas de cálculo, estás dejando dinero sobre la mesa. Aquí explicamos por qué y cómo dar el salto.',
    date: '2025-04-28',
    readTime: '5 min',
    category: 'Negocios',
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getDynamicBlogPosts() {
  return blogPosts.filter((post) => Boolean(post.content))
}
