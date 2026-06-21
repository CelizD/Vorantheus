export type Technology = {
  name: string
  slug: string
  tagline: string
  description: string[]
  useCases: string[]
  whyWeUseIt: string
  businessBenefits: string[]
  vorantheusCases: string[]
  examples: { title: string; description: string }[]
}

type TechnologyTemplate = {
  name: string
  slug: string
  tagline: string
  summary: string
  bestFor: string
  useCases: string[]
  businessBenefits: string[]
  vorantheusCases: string[]
}

function createTechnology({
  name,
  slug,
  tagline,
  summary,
  bestFor,
  useCases,
  businessBenefits,
  vorantheusCases,
}: TechnologyTemplate): Technology {
  return {
    name,
    slug,
    tagline,
    description: [
      summary,
      `${name} forma parte de un stack profesional cuando el proyecto necesita estabilidad, claridad técnica y una base preparada para crecer sin rehacer todo desde cero.`,
    ],
    useCases,
    whyWeUseIt:
      `Usamos ${name} cuando ${bestFor}. Nos permite entregar soluciones más ordenadas, mantenibles y alineadas con objetivos reales de negocio.`,
    businessBenefits,
    vorantheusCases,
    examples: [
      {
        title: `${name} en proyectos comerciales`,
        description:
          `Aplicamos ${name} para construir soluciones digitales que reducen fricción operativa, mejoran la experiencia del usuario y facilitan el crecimiento del negocio.`,
      },
      {
        title: `${name} para operación interna`,
        description:
          `Integramos ${name} en flujos, sistemas o herramientas internas donde la empresa necesita procesos más claros, automatizados y confiables.`,
      },
    ],
  }
}

export const technologies: Technology[] = [
  {
    name: 'React',
    slug: 'react',
    tagline: 'La biblioteca que pone a los usuarios primero.',
    description: [
      'React es una biblioteca de JavaScript creada por Meta (Facebook) para construir interfaces de usuario interactivas, rápidas y confiables. Desde su lanzamiento en 2013 se convirtió en el estándar de la industria para el desarrollo de interfaces web modernas.',
      'Su modelo basado en componentes permite dividir una interfaz compleja en piezas independientes y reutilizables. Cada cambio de datos actualiza solo lo que necesita actualizarse, sin recargar la página, lo que se traduce en aplicaciones instantáneas para el usuario final.',
      'React impulsa productos como Facebook, Instagram, Airbnb, Netflix y miles de aplicaciones empresariales en todo el mundo. Su ecosistema es el más amplio de cualquier tecnología de interfaces web.',
    ],
    useCases: [
      'Paneles de administración y dashboards empresariales',
      'Tiendas en línea con carrito y flujo de compra dinámico',
      'Portales de clientes y plataformas SaaS',
      'Aplicaciones de gestión interna para empresas',
      'Interfaces que requieren actualizaciones en tiempo real',
    ],
    whyWeUseIt:
      'React nos permite construir interfaces complejas de forma modular y mantenible. Su ciclo de vida predecible, la separación clara de responsabilidades y el ecosistema de herramientas maduras reducen errores y aceleran el desarrollo sin sacrificar calidad.',
    businessBenefits: [
      'Interfaces modernas que generan confianza y aumentan conversiones',
      'Actualizaciones de pantalla sin recargas — experiencia de usuario premium',
      'Código reutilizable que reduce el costo de agregar nuevas funciones',
      'Gran comunidad y soporte a largo plazo garantizado por Meta',
      'Compatible con React Native para reutilizar lógica entre web y móvil',
    ],
    vorantheusCases: [
      'Sistemas administrativos con tablas, filtros y formularios dinámicos',
      'Dashboards de métricas que se actualizan en tiempo real',
      'Flujos de compra de e-commerce con múltiples pasos',
      'Portales de clientes con autenticación y perfiles',
    ],
    examples: [
      {
        title: 'Sistema ERP para restaurante',
        description:
          'Panel web en React que gestiona inventario, órdenes y reportes. Los cambios en cocina se reflejan en la pantalla del mesero sin recargar la página.',
      },
      {
        title: 'Portal de pacientes para clínica',
        description:
          'Interfaz donde los pacientes consultan su historial, citas y resultados de laboratorio. La información personal se carga de forma segura sin exponer datos sensibles en la URL.',
      },
      {
        title: 'Tienda en línea con carrito',
        description:
          'Catálogo interactivo con filtros, comparación de productos y carrito persistente. El inventario se actualiza en tiempo real para evitar ventas de productos agotados.',
      },
    ],
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
    tagline: 'El framework que convierte tu sitio en una ventaja competitiva.',
    description: [
      'Next.js es el framework de React más utilizado en el mundo para crear aplicaciones web de producción. Desarrollado por Vercel, añade sobre React capacidades críticas para negocios: renderizado del lado del servidor, generación de páginas estáticas, rutas de API integradas y optimización automática de imágenes, fuentes y scripts.',
      'La diferencia fundamental: un sitio en Next.js carga más rápido, indexa mejor en Google y escala sin esfuerzo. Google mide directamente la velocidad de carga (Core Web Vitals) al calcular el ranking de búsqueda, y Next.js está diseñado para obtener puntuaciones perfectas.',
      'Este sitio web de Vorantheus está construido con Next.js. Todos nuestros proyectos de páginas web y plataformas web también.',
    ],
    useCases: [
      'Sitios web empresariales y corporativos con SEO crítico',
      'Tiendas en línea que necesitan velocidad y conversión',
      'Landing pages de campañas publicitarias con carga ultrarrápida',
      'Plataformas web completas con autenticación y API',
      'Blogs y portales de contenido con miles de páginas',
    ],
    whyWeUseIt:
      'Next.js elimina decisiones de arquitectura difíciles y nos permite enfocarnos en el producto. El sistema de rutas, la generación estática incremental, el middleware y las rutas de API convierten una sola codebase en una solución completa. El resultado: proyectos más rápidos, sitios más veloces y clientes más contentos.',
    businessBenefits: [
      'Mejor posicionamiento en Google gracias a velocidad y SEO técnico superior',
      'Puntuaciones perfectas en Core Web Vitals de forma nativa',
      'Costos de servidor mínimos — las páginas estáticas no requieren servidor activo',
      'Seguridad mejorada — las claves de API y base de datos nunca llegan al navegador',
      'Escalabilidad automática sin configuración adicional en Vercel',
    ],
    vorantheusCases: [
      'Todos los sitios web institucionales y corporativos que desarrollamos',
      'Landing pages de alta conversión para campañas de marketing',
      'E-commerce con catálogos grandes y SEO de producto',
      'Plataformas web con panel de administración y API propia',
    ],
    examples: [
      {
        title: 'Sitio web para despacho de arquitectura',
        description:
          'Portafolio con carga instantánea de imágenes, páginas generadas estáticamente para cada proyecto y formulario de contacto. Posicionó en primera página de Google en menos de 3 meses.',
      },
      {
        title: 'Tienda de moda en línea',
        description:
          'Catálogo de 500+ productos con filtros, búsqueda, carrito y checkout. Cada producto tiene su propia URL optimizada para SEO. Tiempo de carga promedio: 0.8 segundos.',
      },
      {
        title: 'Plataforma de cursos en línea',
        description:
          'Sitio público en Next.js para SEO y captación, integrado con panel privado para estudiantes con progreso, videos y certificados.',
      },
    ],
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    tagline: 'Código que no falla en producción.',
    description: [
      'TypeScript es un lenguaje de programación desarrollado por Microsoft que extiende JavaScript añadiendo tipos estáticos. En términos simples: antes de que el código llegue a los usuarios, el compilador detecta los errores automáticamente.',
      'JavaScript es el lenguaje de la web, pero su flexibilidad extrema es también su mayor debilidad: los errores aparecen en producción, frente a los usuarios. TypeScript convierte esos errores en tiempo de ejecución en advertencias en tiempo de compilación — los problemas se detectan antes de hacer deploy.',
      'Google, Microsoft, Airbnb, Slack, Shopify y prácticamente toda empresa de software seria ha migrado sus codebases a TypeScript. Es el estándar de la industria para proyectos profesionales a largo plazo.',
    ],
    useCases: [
      'Cualquier proyecto web o de backend que requiera mantenimiento a largo plazo',
      'Sistemas grandes con múltiples desarrolladores trabajando en paralelo',
      'APIs y servicios que necesitan contratos de datos estrictos',
      'Librerías y componentes reutilizables',
      'Proyectos donde la refactorización segura es crítica',
    ],
    whyWeUseIt:
      'Usamos TypeScript en el 100% de nuestros proyectos. El autocomplete, la detección de errores en el editor y la documentación implícita a través de los tipos reducen los bugs a la mitad y hacen que el código sea comprensible para cualquier desarrollador que trabaje en él, ahora o en 3 años.',
    businessBenefits: [
      'Menos bugs en producción — los errores se detectan antes de que el usuario los vea',
      'Mantenimiento más rápido y económico — el código se entiende y modifica con seguridad',
      'Onboarding acelerado si se agregan desarrolladores al equipo',
      'Documentación viva — los tipos describen qué espera cada función',
      'Refactorizaciones seguras — cambiar una parte no rompe otra sin aviso',
    ],
    vorantheusCases: [
      'Todos los proyectos sin excepción — es nuestro estándar de calidad',
      'APIs con contratos de datos estrictos entre frontend y backend',
      'Sistemas administrativos con modelos de datos complejos',
      'Bibliotecas de componentes compartidas entre proyectos',
    ],
    examples: [
      {
        title: 'Sistema de facturación con CFDI',
        description:
          'El proceso de timbrado fiscal requiere estructuras de datos exactas. TypeScript garantiza que los campos requeridos por el SAT estén siempre presentes y con el formato correcto antes de enviar la solicitud.',
      },
      {
        title: 'API de e-commerce',
        description:
          'Definición de tipos para productos, órdenes, pagos y clientes. Cualquier cambio en la estructura de datos (p.ej. agregar un campo de talla) actualiza automáticamente todos los lugares donde se usa.',
      },
    ],
  },
  {
    name: 'Node.js',
    slug: 'nodejs',
    tagline: 'JavaScript en el servidor — rápido, escalable y sin complicaciones.',
    description: [
      'Node.js es un entorno de ejecución que permite usar JavaScript en el servidor, no solo en el navegador. Fue creado por Ryan Dahl en 2009 y se convirtió en la plataforma de backend más popular del mundo para aplicaciones web modernas.',
      'Su modelo de entrada/salida no bloqueante lo hace excepcionalmente eficiente para manejar muchas conexiones simultáneas con recursos mínimos. Netflix, LinkedIn, PayPal y Uber lo usan para sus servicios más críticos.',
      'Para equipos de desarrollo web, Node.js tiene una ventaja práctica decisiva: el mismo lenguaje (JavaScript/TypeScript) sirve tanto para el frontend como para el backend, lo que elimina la fricción entre capas y acelera el desarrollo.',
    ],
    useCases: [
      'APIs REST y GraphQL para aplicaciones web y móviles',
      'Servicios en tiempo real: chats, notificaciones, dashboards live',
      'Procesamiento de archivos: PDFs, imágenes, importaciones de Excel',
      'Integraciones con servicios de terceros: pagos, facturación, envíos',
      'Automatizaciones y tareas programadas',
    ],
    whyWeUseIt:
      'Node.js nos permite usar TypeScript de punta a punta — el mismo código y las mismas estructuras de datos en el frontend y el backend. Esto elimina duplicación, reduce errores de integración y acelera el tiempo de entrega. Su ecosistema de paquetes (npm) tiene solución para prácticamente cualquier necesidad.',
    businessBenefits: [
      'Desarrollo más rápido y económico al unificar el stack tecnológico',
      'Escalabilidad horizontal sencilla para picos de tráfico',
      'Costo de operación bajo — maneja más usuarios con menos servidor',
      'Integraciones rápidas con servicios externos: Stripe, SAT, WhatsApp, etc.',
      'Gran comunidad y paquetes para casi cualquier requerimiento',
    ],
    vorantheusCases: [
      'APIs de sistemas administrativos y ERPs',
      'Servicios de procesamiento de documentos (PDFs, facturas)',
      'Webhooks e integraciones con pasarelas de pago',
      'Automatizaciones de reportes y notificaciones',
    ],
    examples: [
      {
        title: 'API de gestión de pedidos para restaurante',
        description:
          'Servicio que recibe pedidos del sistema POS, los procesa, actualiza inventario en tiempo real y envía notificaciones a cocina. Maneja 200+ pedidos simultáneos sin latencia.',
      },
      {
        title: 'Generador de reportes PDF',
        description:
          'API que combina datos de ventas, genera PDFs con gráficas y los envía automáticamente por correo cada lunes al equipo directivo.',
      },
    ],
  },
  {
    name: 'Supabase',
    slug: 'supabase',
    tagline: 'La base de datos con superpoderes para tu negocio.',
    description: [
      'Supabase es una plataforma de base de datos como servicio (DBaaS) de código abierto. Combina PostgreSQL — la base de datos relacional más robusta del mundo — con autenticación, almacenamiento de archivos, funciones serverless y actualizaciones en tiempo real, todo en un solo servicio gestionado.',
      'Antes de plataformas como Supabase, construir un backend completo requería configurar y mantener múltiples servidores, sistemas de autenticación, bases de datos y CDNs. Supabase colapsa toda esa infraestructura en un servicio que funciona desde el primer día.',
      'Empresas como Mozilla, PwC y GitHub han adoptado Supabase. Es la alternativa open-source de referencia a Firebase, con la diferencia de que los datos son siempre tuyos y el sistema puede autohospedarse si se necesita.',
    ],
    useCases: [
      'Backend completo para aplicaciones web y móviles',
      'Autenticación de usuarios: email, Google, Apple, teléfono',
      'Almacenamiento de archivos: imágenes, documentos, videos',
      'Aplicaciones con datos en tiempo real (chats, dashboards)',
      'APIs autogeneradas desde el esquema de tu base de datos',
    ],
    whyWeUseIt:
      'Supabase nos permite lanzar proyectos con backend completo en días en lugar de semanas. Las políticas de seguridad a nivel de fila (RLS) garantizan que cada usuario solo vea sus datos. La integración con TypeScript genera tipos automáticamente desde el esquema de la base de datos, eliminando una fuente común de bugs.',
    businessBenefits: [
      'Tiempo de lanzamiento más corto — backend funcional desde el primer día',
      'Costos predecibles — plan gratuito generoso y precios transparentes',
      'Seguridad empresarial con control granular de acceso a datos',
      'Escalabilidad automática sin gestionar infraestructura',
      'Tus datos te pertenecen — exportables en cualquier momento',
    ],
    vorantheusCases: [
      'Base de datos de leads y cotizaciones del formulario de este sitio',
      'Sistemas de autenticación para portales de clientes',
      'Almacenamiento de archivos para plataformas de gestión documental',
      'Backends de aplicaciones móviles con sincronización en tiempo real',
    ],
    examples: [
      {
        title: 'Sistema de gestión de clientes (CRM)',
        description:
          'Base de datos de clientes, contratos y seguimientos. Cada usuario solo ve sus propios datos. El equipo de ventas consulta leads desde web, el directivo ve reportes globales.',
      },
      {
        title: 'Plataforma de renta de espacios',
        description:
          'Disponibilidad en tiempo real, reservas, pagos y notificaciones. La disponibilidad del calendario se actualiza instantáneamente cuando alguien hace una reserva.',
      },
    ],
  },
  {
    name: 'PostgreSQL',
    slug: 'postgresql',
    tagline: 'La base de datos en la que confía la industria desde hace 35 años.',
    description: [
      'PostgreSQL es el sistema de gestión de bases de datos relacionales de código abierto más avanzado del mundo. Con 35 años de desarrollo continuo, combina confiabilidad extrema, cumplimiento total del estándar SQL y características avanzadas como JSON nativo, búsqueda de texto completo, tipos geográficos y extensiones para inteligencia artificial.',
      'A diferencia de alternativas como MySQL o SQLite, PostgreSQL soporta transacciones ACID perfectas, claves foráneas con integridad referencial, y niveles de aislamiento avanzados. Esto significa que los datos siempre estarán en un estado consistente, incluso ante fallos del sistema.',
      'Instagram, Reddit, Spotify, Twitch, Airbnb y la mayoría de empresas tecnológicas de alto tráfico confían en PostgreSQL para sus datos más críticos.',
    ],
    useCases: [
      'Almacenamiento de datos de negocio que requieren integridad total',
      'Sistemas financieros, contables y de facturación',
      'Catálogos de productos con atributos variables y búsqueda avanzada',
      'Datos geográficos y de localización (con extensión PostGIS)',
      'Análisis de datos y reportes complejos',
    ],
    whyWeUseIt:
      'PostgreSQL es nuestra base de datos de elección para todos los proyectos con datos estructurados. Su cumplimiento estricto del estándar SQL, las transacciones perfectas y la capacidad de manejar consultas analíticas complejas lo hacen ideal para sistemas de negocio donde los datos son el activo más valioso.',
    businessBenefits: [
      'Integridad garantizada — los datos nunca quedan en estado inconsistente',
      'Rendimiento superior para consultas analíticas y reportes complejos',
      'Sin licencias ni costos de base de datos — completamente libre',
      'Extensible con funciones propias para lógica de negocio específica',
      'Soporte a largo plazo sin riesgo de abandono del proveedor',
    ],
    vorantheusCases: [
      'Bases de datos de todos los sistemas administrativos que desarrollamos',
      'Almacén de datos para reportes y analítica de negocio',
      'Catálogos de e-commerce con búsqueda full-text',
      'Sistemas de inventario con trazabilidad completa',
    ],
    examples: [
      {
        title: 'Sistema de inventario con trazabilidad',
        description:
          'Registro de cada movimiento de producto: entrada, salida, transferencia y ajuste. Las transacciones garantizan que el stock nunca quede en un estado inconsistente, incluso si el servidor falla a mitad de una operación.',
      },
      {
        title: 'Motor de reportes para distribuidora',
        description:
          'Consultas analíticas sobre millones de registros de ventas para generar reportes de rentabilidad por producto, zona y vendedor en segundos.',
      },
    ],
  },
  {
    name: 'Tailwind CSS',
    slug: 'tailwind-css',
    tagline: 'Diseño de interfaces sin salir del código.',
    description: [
      'Tailwind CSS es un framework de estilos de utilidades que revolucionó la forma de escribir CSS. En lugar de clases semánticas vagas como "card" o "button", Tailwind expone directamente las propiedades CSS como clases: `flex`, `gap-4`, `text-xl`, `rounded-2xl`. El resultado es un sistema de diseño consistente, predecible y extremadamente rápido de usar.',
      'La ventaja técnica más importante: Tailwind elimina el CSS muerto. En producción, solo se incluye el CSS que realmente se usa, lo que resulta en archivos de estilo de 5-15 KB en lugar de los 300+ KB de frameworks como Bootstrap.',
      'Vercel, Shopify, GitHub, OpenAI y miles de empresas tecnológicas adoptaron Tailwind como su sistema de diseño de facto. La consistencia visual de este sitio de Vorantheus está construida enteramente sobre Tailwind.',
    ],
    useCases: [
      'Interfaces web con diseño personalizado sin plantillas genéricas',
      'Sistemas de diseño consistentes entre múltiples páginas y componentes',
      'Prototipos rápidos que evolucionan a producto de producción',
      'Responsividad compleja: layouts que se adaptan a todos los tamaños de pantalla',
      'Temas oscuros/claros y variables de diseño globales',
    ],
    whyWeUseIt:
      'Tailwind nos permite implementar diseños complejos directamente en el componente, sin alternar entre archivos de CSS y HTML. El sistema de espaciado, tipografía y color es consistente por defecto, lo que elimina la anarquía visual que surge en proyectos largos. El resultado final siempre se ve coherente y profesional.',
    businessBenefits: [
      'Interfaces visualmente consistentes que transmiten profesionalismo',
      'Mantenimiento de diseño sencillo — cambios globales en un solo lugar',
      'Tiempo de desarrollo reducido sin sacrificar calidad visual',
      'Bundle CSS mínimo — sitios más rápidos y mejor puntuación en Lighthouse',
      'Fácil de colaborar entre diseñadores y desarrolladores',
    ],
    vorantheusCases: [
      'Todas las interfaces web y dashboards que construimos',
      'Sistemas de diseño para marcas con identidad visual estricta',
      'Paneles de administración con tablas, formularios y gráficas',
      'Páginas de marketing con animaciones y layouts complejos',
    ],
    examples: [
      {
        title: 'Sistema de diseño para cadena de clínicas',
        description:
          'Componentes reutilizables (botones, tablas, formularios) con la paleta de colores y tipografía de la marca. Cualquier nuevo módulo del sistema hereda el estilo automáticamente.',
      },
      {
        title: 'Dashboard de métricas de e-commerce',
        description:
          'Panel con tablas, gráficas y tarjetas de KPI. El layout se adapta perfectamente de escritorio a tablet. Modo oscuro incluido para uso nocturno.',
      },
    ],
  },
  {
    name: 'React Native',
    slug: 'react-native',
    tagline: 'Una sola base de código. iOS y Android nativos.',
    description: [
      'React Native es el framework de Meta para construir aplicaciones móviles nativas usando React y JavaScript. A diferencia de las soluciones "híbridas" que muestran un sitio web dentro de una app, React Native compila a componentes nativos reales — los mismos que usa una app escrita en Swift o Kotlin.',
      'El beneficio práctico es enorme: una sola codebase genera apps para iOS y Android de apariencia y comportamiento completamente nativos. Los botones, listas, animaciones y gestos se sienten como las apps del sistema operativo, no como páginas web.',
      'Facebook, Instagram, Shopify, Walmart y Discord usan React Native en producción. Es la opción más madura y respaldada del mercado para equipos que quieren eficiencia sin sacrificar calidad nativa.',
    ],
    useCases: [
      'Aplicaciones móviles para iOS y Android con una sola base de código',
      'Apps empresariales internas para equipos de campo y ventas',
      'E-commerce móvil con integración de pagos nativos (Apple Pay, Google Pay)',
      'Apps de gestión con acceso a cámara, GPS, notificaciones push y biometría',
      'Versión móvil de sistemas web existentes en React',
    ],
    whyWeUseIt:
      'React Native nos permite compartir lógica de negocio entre web y móvil, reduciendo el costo total del proyecto. El equipo que construye la web también construye la app — sin necesidad de dos equipos especializados en Swift y Kotlin. El resultado: apps nativas de alta calidad a precio competitivo.',
    businessBenefits: [
      'App en iOS y Android al mismo tiempo — sin pagar por dos proyectos separados',
      'Actualizaciones simultáneas en ambas plataformas',
      'Costo de desarrollo hasta 40% menor que hacer apps nativas separadas',
      'Experiencia de usuario nativa — no se siente como sitio web',
      'Acceso completo a hardware: cámara, GPS, NFC, biometría, notificaciones',
    ],
    vorantheusCases: [
      'Apps de gestión de campo para empresas de servicios',
      'Aplicaciones de catálogo y ventas para representantes comerciales',
      'Apps de seguimiento de pedidos y entregas',
      'Versiones móviles de sistemas ERP existentes',
    ],
    examples: [
      {
        title: 'App de gestión para técnicos de campo',
        description:
          'Los técnicos reciben órdenes de servicio en su teléfono, registran avances con fotos, capturan firma del cliente y sincronizan con el sistema central sin conexión a internet.',
      },
      {
        title: 'App de ventas para distribuidora',
        description:
          'Catálogo de 3,000+ productos con búsqueda, historial de clientes, generación de pedidos y cálculo de descuentos sin conexión. Sincroniza al recuperar señal.',
      },
    ],
  },
  {
    name: 'Kotlin',
    slug: 'kotlin',
    tagline: 'El lenguaje oficial de Android, diseñado para no fallar.',
    description: [
      'Kotlin es el lenguaje de programación oficial de Google para el desarrollo de aplicaciones Android. Creado por JetBrains (los creadores de IntelliJ IDEA y los IDEs más usados del mundo), Kotlin es moderno, conciso y diseñado para eliminar clases enteras de errores comunes en Java.',
      'Su característica más valorada es la seguridad de nulos nativa: en Kotlin, una variable no puede ser null a menos que se declare explícitamente como nullable. Esto elimina el NullPointerException — el error más común en aplicaciones Android y la causa de innumerables crashes en producción.',
      'Google anunció en 2019 que Kotlin es el lenguaje preferido para Android. Toda la documentación oficial, los nuevos frameworks (Jetpack Compose) y los ejemplos de Google están escritos en Kotlin. Es el camino estándar para apps Android nativas profesionales.',
    ],
    useCases: [
      'Aplicaciones Android nativas de alta performance',
      'Apps que requieren acceso profundo al hardware Android',
      'Aplicaciones empresariales con requerimientos de seguridad estrictos',
      'Apps que usan Jetpack Compose para interfaces declarativas',
      'Servicios backend en JVM con Spring Boot',
    ],
    whyWeUseIt:
      'Cuando el cliente necesita una app Android nativa — no React Native — usamos Kotlin. La seguridad de tipos, la interoperabilidad perfecta con Java y el acceso completo al ecosistema de Jetpack de Google nos permiten construir apps robustas que se integran perfectamente con el sistema Android.',
    businessBenefits: [
      'Apps Android con rendimiento máximo y acceso total al hardware del dispositivo',
      'Crashes mínimos gracias a la seguridad de nulos de Kotlin',
      'Acceso nativo a todas las APIs de Google: Maps, Pay, Drive, etc.',
      'Experiencia visual perfectamente alineada con las guías de Material Design',
      'Actualizaciones de sistema operativo manejadas con anticipación',
    ],
    vorantheusCases: [
      'Apps Android para uso interno empresarial con hardware especializado',
      'Aplicaciones que requieren integración profunda con el sistema Android',
      'Apps para dispositivos especializados: PDAs, tablets industriales, POS Android',
    ],
    examples: [
      {
        title: 'App de inventario para tablet industrial',
        description:
          'Sistema de gestión de almacén para tablets ruggedizadas con Android. Lectura de códigos de barras por cámara y escáner Bluetooth, sin conexión a internet permanente.',
      },
      {
        title: 'App POS para punto de venta',
        description:
          'Punto de venta Android con impresora térmica, lector de tarjetas y caja registradora. Integrada con el sistema de inventario central a través de API.',
      },
    ],
  },
  {
    name: 'Swift',
    slug: 'swift',
    tagline: 'El lenguaje de Apple para experiencias iOS de primera clase.',
    description: [
      'Swift es el lenguaje de programación creado por Apple para el desarrollo de aplicaciones en iOS, macOS, watchOS y tvOS. Lanzado en 2014 como sucesor de Objective-C, Swift es moderno, expresivo y entre los lenguajes de programación más rápidos que existen — comparable en rendimiento a C++.',
      'Swift fue diseñado desde cero para la seguridad. Su sistema de tipos es estricto, el manejo de errores es explícito y las variables deben inicializarse antes de usarse. El resultado es código que falla en tiempo de compilación en lugar de en manos del usuario final.',
      'Apple es el impulsor único de Swift y su integración con Xcode, SwiftUI, Core Data, ARKit y todo el ecosistema Apple es perfecta. Para apps iOS de alta calidad que aprovechan al máximo el hardware Apple, Swift es el único camino.',
    ],
    useCases: [
      'Aplicaciones iOS nativas para iPhone y iPad',
      'Apps que aprovechan hardware Apple exclusivo: Face ID, ARKit, Core ML',
      'Aplicaciones para macOS y Apple Watch',
      'Apps de salud y fitness con HealthKit',
      'Experiencias de realidad aumentada con ARKit',
    ],
    whyWeUseIt:
      'Cuando la calidad iOS premium y el acceso completo al ecosistema Apple son prioritarios, usamos Swift. SwiftUI permite crear interfaces declarativas que siguen perfectamente los patrones de diseño de Apple, resultando en apps que se sienten exactamente como las apps nativas de Apple.',
    businessBenefits: [
      'Apps iOS que se sienten como parte del sistema operativo — no como un port',
      'Acceso a Face ID, Touch ID y Secure Enclave para seguridad bancaria',
      'Mejor rendimiento de batería al usar APIs nativas optimizadas',
      'Acceso a App Store con todas las capacidades de pago in-app y suscripciones',
      'Integración con iCloud, Siri, Shortcuts y el ecosistema Apple',
    ],
    vorantheusCases: [
      'Apps iOS para empresas con usuarios del ecosistema Apple',
      'Aplicaciones de salud y bienestar con integración a Apple Health',
      'Apps de productividad que sincronizan con iCloud',
    ],
    examples: [
      {
        title: 'App de seguimiento de salud para clínica',
        description:
          'Los pacientes registran síntomas, medicamentos y citas. Se integra con Apple Health para importar datos de actividad y frecuencia cardíaca del Apple Watch.',
      },
      {
        title: 'App de catálogo para vendedores en iPad',
        description:
          'Catálogo interactivo de productos con fotos en alta resolución, simulador de configuración y generación de propuestas en PDF. Funciona sin conexión a internet.',
      },
    ],
  },
  {
    name: 'Python',
    slug: 'python',
    tagline: 'El lenguaje de la inteligencia artificial y la automatización.',
    description: [
      'Python es el lenguaje de programación más popular del mundo según todos los índices relevantes (TIOBE, Stack Overflow, GitHub). Su sintaxis clara y legible lo hace accesible, pero su ecosistema lo hace imbatible: Python es el lenguaje de la ciencia de datos, el machine learning, la inteligencia artificial y la automatización.',
      'La razón de la dominancia de Python en IA es histórica: NumPy, Pandas, TensorFlow, PyTorch, scikit-learn, Hugging Face y prácticamente todas las librerías de machine learning fueron escritas en Python primero. Los modelos de lenguaje grandes (LLMs), las redes neuronales y los algoritmos de análisis de datos se entrenan y despliegan con Python.',
      'Para negocios, Python es la herramienta de automatización por excelencia: procesar miles de registros de Excel, enviar correos masivos programados, extraer datos de páginas web, conectar sistemas incompatibles entre sí.',
    ],
    useCases: [
      'Automatizaciones de procesos: reportes, correos, procesamiento de datos',
      'Chatbots e integración con modelos de lenguaje (OpenAI, Claude, Gemini)',
      'Procesamiento y análisis de datos de ventas, inventario, finanzas',
      'Extracción de datos de páginas web (web scraping)',
      'APIs de machine learning e inteligencia artificial',
    ],
    whyWeUseIt:
      'Python es nuestra herramienta principal para todo lo que implique automatización e inteligencia artificial. Su ecosistema de librerías no tiene rival: en horas podemos conectar un modelo de lenguaje con una base de datos, automatizar un proceso manual que toma horas al día, o procesar miles de registros de un Excel.',
    businessBenefits: [
      'Automatizar tareas repetitivas y liberar tiempo de tu equipo',
      'Análisis de datos propios para tomar mejores decisiones',
      'Chatbots inteligentes que responden preguntas de clientes 24/7',
      'Integración entre sistemas que no se comunican nativamente',
      'Procesamiento de documentos: PDFs, Excels, formularios',
    ],
    vorantheusCases: [
      'Chatbots de atención al cliente con IA para sitios web y WhatsApp',
      'Automatizaciones de reportes y procesamiento de datos',
      'Scrapers de precios y monitoreo de competencia',
      'Integraciones entre sistemas legacy y plataformas modernas',
    ],
    examples: [
      {
        title: 'Chatbot de atención a clientes para tienda',
        description:
          'Bot entrenado con el catálogo y políticas de la tienda que responde preguntas frecuentes, ayuda a encontrar productos y escala a un humano cuando no puede resolver la consulta.',
      },
      {
        title: 'Automatización de reportes de ventas',
        description:
          'Script que cada lunes descarga las ventas del sistema, genera análisis por producto y zona, crea gráficas y envía el reporte en PDF por correo al equipo directivo.',
      },
      {
        title: 'Integración entre ERP antiguo y plataforma moderna',
        description:
          'Conector Python que lee los datos del sistema legacy, los transforma al formato nuevo y los sincroniza en tiempo real sin requerir reemplazar el sistema existente.',
      },
    ],
  },
  {
    name: 'Vercel',
    slug: 'vercel',
    tagline: 'Deploy en segundos. Cero configuración. Uptime perfecto.',
    description: [
      'Vercel es la plataforma de hosting y deployment para aplicaciones web modernas creada por los mismos autores de Next.js. Está diseñada específicamente para el flujo de trabajo moderno: conectas tu repositorio de GitHub, haces push, y en 30-60 segundos tu sitio está actualizado en producción.',
      'A diferencia del hosting tradicional donde tienes un servidor que mantener, Vercel distribuye tu sitio en una red global de más de 100 puntos de presencia (Edge Network). Cada usuario del mundo recibe el sitio desde el servidor más cercano a su ubicación, lo que reduce los tiempos de carga a milisegundos independientemente de dónde estén.',
      'Vercel gestiona automáticamente certificados SSL, actualizaciones de seguridad, escalabilidad por picos de tráfico y deployments de preview para cada rama de código. Es la plataforma que elige el equipo de Next.js para sus propios proyectos.',
    ],
    useCases: [
      'Hosting de sitios web Next.js con rendimiento máximo',
      'Deployments automáticos desde GitHub en cada commit',
      'Previews de cada rama para revisar cambios antes de publicar',
      'Funciones serverless para APIs sin gestionar servidores',
      'Edge Middleware para lógica de enrutamiento ultrarrápida',
    ],
    whyWeUseIt:
      'Vercel elimina la complejidad del deployment y la infraestructura. Cada proyecto que entregamos está configurado para que el cliente pueda ver cambios en producción con solo hacer push a GitHub. Los ambientes de preview permiten revisar y aprobar cada cambio antes de que llegue a los usuarios finales.',
    businessBenefits: [
      'Sitio siempre disponible — 99.99% de uptime garantizado',
      'Actualizaciones de contenido reflejadas en segundos, no en horas',
      'SSL automático y certificados de seguridad sin costo adicional',
      'Escalabilidad instantánea ante picos de tráfico (lanzamientos, campañas)',
      'Sin gestión de servidores — cero costos de administración de infraestructura',
    ],
    vorantheusCases: [
      'Hosting de todos los sitios web institucionales que desarrollamos',
      'Plataforma de deployment para proyectos Next.js de clientes',
      'Entornos de preview para revisión y aprobación de cambios',
      'Funciones de API serverless para formularios y notificaciones',
    ],
    examples: [
      {
        title: 'Sitio web con 500K visitas al mes',
        description:
          'Portal de contenido que recibe picos de tráfico de 50,000 usuarios simultáneos durante eventos en vivo. Vercel escala automáticamente sin intervención manual ni tiempo de inactividad.',
      },
      {
        title: 'Flujo de aprobación de cambios',
        description:
          'Cada cambio genera una URL de preview única. El cliente revisa y aprueba en el preview antes de publicar. Al aprobar, el cambio va a producción en un clic.',
      },
    ],
  },
  {
    name: 'Firebase',
    slug: 'firebase',
    tagline: 'Backend de Google para apps que escalan desde el día uno.',
    description: [
      'Firebase es la plataforma de desarrollo de aplicaciones de Google que ofrece base de datos en tiempo real, autenticación, almacenamiento de archivos, funciones en la nube y analítica en un solo servicio. Su mayor fortaleza es la sincronización en tiempo real: los datos se actualizan instantáneamente en todos los dispositivos conectados.',
      'Usado por millones de aplicaciones en el mundo, Firebase permite lanzar productos con backend completo en días. Es ideal para aplicaciones con actualizaciones en vivo, notificaciones push, autenticación social y flujos colaborativos.',
    ],
    useCases: [
      'Aplicaciones con sincronización de datos en tiempo real',
      'Autenticación con Google, Facebook, Apple y email',
      'Notificaciones push para apps móviles',
      'Almacenamiento de archivos multimedia en la nube',
    ],
    whyWeUseIt:
      'Firebase es la solución más rápida para lanzar apps con backend completo. Su integración nativa con Google Cloud y los SDKs para React Native y Flutter aceleran el desarrollo cuando la velocidad de lanzamiento es prioritaria.',
    businessBenefits: [
      'App funcional con backend en días, no semanas',
      'Escalabilidad automática gestionada por Google',
      'Notificaciones push sin costo de infraestructura adicional',
      'Monitoreo y analítica de uso incluidos',
    ],
    vorantheusCases: [
      'Apps móviles con chat y mensajería en tiempo real',
      'Sistemas de notificaciones push para apps iOS y Android',
      'Backends rápidos para prototipos y MVPs',
    ],
    examples: [
      {
        title: 'App de reservas con disponibilidad en vivo',
        description:
          'Los clientes ven disponibilidad actualizada al segundo. Cuando alguien reserva un espacio, todos los demás usuarios lo ven ocupado instantáneamente sin recargar la pantalla.',
      },
      {
        title: 'Notificaciones de entregas en tiempo real',
        description:
          'Push notifications que alertan al cliente cuando su pedido es preparado, enviado y entregado. El estado del repartidor se actualiza en el mapa en vivo.',
      },
    ],
  },
  {
    name: 'MySQL',
    slug: 'mysql',
    tagline: 'La base de datos más usada del mundo para aplicaciones web.',
    description: [
      'MySQL es el sistema de base de datos relacional de código abierto más popular del mundo, respaldado por Oracle y usado por empresas como Facebook, Twitter, YouTube y Netflix. Su combinación de simplicidad, rendimiento probado y disponibilidad en prácticamente cualquier proveedor de hosting lo hace la elección pragmática para millones de proyectos.',
      'MySQL destaca por su velocidad en operaciones de lectura, su amplio soporte en herramientas de administración y su compatibilidad con la mayoría de los lenguajes y frameworks. Es la base de datos predeterminada de WordPress, Drupal, Magento y muchos otros sistemas populares.',
    ],
    useCases: [
      'Aplicaciones web con datos estructurados y relacionales',
      'E-commerce y tiendas en línea con catálogo de productos',
      'Sistemas de gestión de contenido (CMS)',
      'Migración y coexistencia con sistemas legacy',
    ],
    whyWeUseIt:
      'Usamos MySQL cuando el cliente ya tiene infraestructura, conocimiento interno o proveedores que lo requieren. Su compatibilidad universal y la familiaridad del equipo con sus herramientas de administración facilitan la transición y el mantenimiento.',
    businessBenefits: [
      'Sin costos de licencia — completamente gratuito',
      'Compatible con casi todos los proveedores de hosting',
      'Herramientas de administración maduras como phpMyAdmin',
      'Soporte amplio en la comunidad y documentación extensa',
    ],
    vorantheusCases: [
      'Sistemas heredados que requieren MySQL por compatibilidad',
      'Proyectos con proveedores de hosting con MySQL disponible',
      'Migraciones desde sistemas existentes basados en MySQL',
    ],
    examples: [
      {
        title: 'Migración de base de datos para sistema ERP',
        description:
          'Empresa con ERP en MySQL de 10 años. Mantuvimos MySQL para preservar compatibilidad con reportes existentes mientras modernizamos la interfaz con React y Next.js.',
      },
      {
        title: 'Catálogo de e-commerce heredado',
        description:
          'Tienda con 8,000 productos en MySQL. Optimizamos índices y consultas logrando tiempos de respuesta 5x más rápidos sin migrar la base de datos.',
      },
    ],
  },
  {
    name: 'MongoDB',
    slug: 'mongodb',
    tagline: 'La base de datos de documentos para datos flexibles y escalables.',
    description: [
      'MongoDB es la base de datos NoSQL más popular del mundo. Almacena los datos como documentos JSON en lugar de tablas y filas, lo que la hace ideal cuando la estructura de los datos es variable, evoluciona frecuentemente o tiene jerarquías anidadas complejas. MongoDB es usado por eBay, Forbes, Adobe, Cisco y miles de startups.',
      'Su modelo de documentos elimina los JOINs complejos: toda la información relacionada se guarda junta en un solo documento. Esto simplifica las consultas y permite escalar horizontalmente de forma nativa, distribuyendo los datos en múltiples servidores automáticamente.',
    ],
    useCases: [
      'Catálogos de productos con atributos variables por categoría',
      'Sistemas de logs y auditoría de alto volumen',
      'Aplicaciones con estructuras de datos que cambian frecuentemente',
      'APIs que manejan datos semi-estructurados o JSON puro',
    ],
    whyWeUseIt:
      'MongoDB es la elección natural cuando los datos no encajan bien en un esquema tabular rígido. Para catálogos con cientos de atributos diferentes por producto, logs de eventos y sistemas donde la velocidad de desarrollo supera la necesidad de relaciones complejas.',
    businessBenefits: [
      'Flexibilidad de esquema — agrega campos nuevos sin migraciones complejas',
      'Escalabilidad horizontal nativa para millones de registros',
      'Consultas rápidas en datos anidados sin JOINs',
      'Atlas Cloud de MongoDB simplifica la infraestructura',
    ],
    vorantheusCases: [
      'Sistemas de logs y auditoría para plataformas de alto volumen',
      'Catálogos con productos de atributos muy variables',
      'Backends de APIs con respuestas JSON complejas',
    ],
    examples: [
      {
        title: 'Catálogo de refacciones automotrices',
        description:
          'Más de 200,000 refacciones con atributos completamente distintos por categoría. MongoDB permitió definir el esquema de cada categoría de forma independiente sin tablas de atributos genéricas.',
      },
      {
        title: 'Sistema de auditoría de cambios',
        description:
          'Registro de cada acción de usuario en un sistema financiero. MongoDB almacena el estado completo del registro antes y después de cada cambio, facilitando auditorías regulatorias.',
      },
    ],
  },
  {
    name: 'Express.js',
    slug: 'express',
    tagline: 'El framework minimalista que pone en marcha tu API al instante.',
    description: [
      'Express.js es el framework de Node.js más descargado del mundo con más de 100 millones de descargas mensuales. Su filosofía minimalista te da solo lo esencial: enrutamiento, middleware y acceso a la solicitud/respuesta HTTP. Sin opiniones adicionales, sin magia — solo código claro y predecible.',
      'Express es la base de la mayoría de las APIs en Node.js. Frameworks como NestJS, Sails y LoopBack están construidos sobre Express. Su ecosistema de middleware — autenticación, compresión, CORS, logging — cubre prácticamente cualquier necesidad sin agregar peso innecesario.',
    ],
    useCases: [
      'APIs REST ligeras y microservicios',
      'Proxies y gateways de API',
      'Backends para aplicaciones móviles y SPAs',
      'Prototipado rápido de APIs',
    ],
    whyWeUseIt:
      'Express es nuestra elección para APIs donde la simplicidad y el control son prioritarios. Sin la estructura de NestJS, pero con total libertad para organizarlo como mejor sirve al proyecto. Ideal para microservicios pequeños y APIs que se integran con sistemas existentes.',
    businessBenefits: [
      'API funcional en horas — sin configuración compleja',
      'Cero overhead — el servidor hace exactamente lo que necesita',
      'Ecosistema maduro con middleware para cualquier caso de uso',
      'Fácil de desplegar en cualquier proveedor de Node.js',
    ],
    vorantheusCases: [
      'Microservicios de notificaciones y webhooks',
      'APIs de integración entre sistemas de terceros',
      'Backends ligeros para landing pages con formularios',
    ],
    examples: [
      {
        title: 'Gateway de integración con SAT',
        description:
          'API Express que recibe solicitudes de timbrado, las valida, las envía al PAC certificado y devuelve el CFDI firmado. Maneja errores y reintentos de forma robusta.',
      },
      {
        title: 'Servidor de webhooks para pagos',
        description:
          'Express procesa notificaciones de Stripe y Mercado Pago, verifica firmas de seguridad y actualiza el estado de órdenes en tiempo real.',
      },
    ],
  },
  {
    name: 'Docker',
    slug: 'docker',
    tagline: 'El mismo entorno en tu computadora y en producción.',
    description: [
      'Docker es la plataforma de contenedores que cambió cómo se desarrolla, empaqueta y despliega software. Un contenedor Docker encapsula una aplicación con todas sus dependencias — lenguaje, librerías, configuración — en un paquete portable que funciona igual en cualquier entorno: la laptop del desarrollador, el servidor de pruebas o la nube.',
      'El problema que resuelve Docker es el clásico "en mi máquina sí funciona". Con Docker, si funciona en tu computadora, funciona en producción. Esto elimina horas de debugging de entornos y hace que los deployments sean predecibles y repetibles.',
    ],
    useCases: [
      'Empaquetado de aplicaciones para deployment reproducible',
      'Entornos de desarrollo consistentes entre el equipo',
      'Orquestación de múltiples servicios con Docker Compose',
      'Base para despliegues en Kubernetes y servicios en la nube',
    ],
    whyWeUseIt:
      'Docker garantiza que el entorno de desarrollo y producción son idénticos. Eliminamos la categoría entera de bugs "solo pasa en producción" y facilitamos el onboarding de nuevos desarrolladores — clonar el repo y correr `docker compose up` es suficiente.',
    businessBenefits: [
      'Deployments sin sorpresas — lo que se prueba es lo que se publica',
      'Onboarding de nuevos desarrolladores en minutos, no días',
      'Aislamiento de servicios — un servicio caído no afecta a los demás',
      'Portable entre cualquier proveedor de nube sin cambios de código',
    ],
    vorantheusCases: [
      'Contenedores de APIs y servicios backend en producción',
      'Entornos locales de desarrollo con base de datos incluida',
      'Pipelines de CI/CD con builds reproducibles',
    ],
    examples: [
      {
        title: 'Stack completo con Docker Compose',
        description:
          'API NestJS, PostgreSQL, Redis y Nginx orquestados con un solo archivo. El equipo levanta el entorno completo en segundos con `docker compose up`.',
      },
      {
        title: 'Pipeline de CI/CD con Docker',
        description:
          'Cada commit genera una imagen Docker etiquetada. Los tests corren en contenedores idénticos al entorno de producción antes de hacer deploy automáticamente.',
      },
    ],
  },
  {
    name: 'AWS',
    slug: 'aws',
    tagline: 'La nube más grande del mundo para infraestructura sin límites.',
    description: [
      'Amazon Web Services (AWS) es la plataforma de servicios en la nube más grande y madura del mundo, con más de 200 servicios disponibles. Desde servidores virtuales (EC2) y almacenamiento (S3) hasta bases de datos gestionadas (RDS), funciones serverless (Lambda) e inteligencia artificial, AWS provee la infraestructura sobre la que corre una fracción significativa de internet.',
      'Netflix, Airbnb, Spotify, LinkedIn y la gran mayoría de las empresas tecnológicas más importantes del mundo construyen sobre AWS. Su red global de regiones y zonas de disponibilidad garantiza alta disponibilidad, latencia mínima y cumplimiento regulatorio en prácticamente cualquier país.',
    ],
    useCases: [
      'Infraestructura escalable para aplicaciones de alto tráfico',
      'Almacenamiento masivo de archivos con S3',
      'Bases de datos gestionadas con RDS y DynamoDB',
      'Funciones serverless con Lambda para procesos automáticos',
    ],
    whyWeUseIt:
      'AWS es la elección cuando el cliente necesita control total sobre su infraestructura, cumplimiento regulatorio específico o está migrando desde sistemas on-premise. Su madurez, documentación y ecosistema no tienen rival para proyectos con requerimientos de enterprise.',
    businessBenefits: [
      'Infraestructura que escala automáticamente a millones de usuarios',
      'SLAs de 99.99% de disponibilidad respaldados por Amazon',
      'Cumplimiento de regulaciones: HIPAA, PCI DSS, ISO 27001',
      'Pay-as-you-go — pagas solo por lo que usas',
    ],
    vorantheusCases: [
      'Hosting de aplicaciones con requerimientos de compliance regulatorio',
      'Almacenamiento de archivos y backups con S3',
      'Funciones Lambda para procesamiento asíncrono de documentos',
    ],
    examples: [
      {
        title: 'Plataforma de telemedicina en AWS',
        description:
          'Sistema de videoconferencias médicas con cumplimiento HIPAA. Almacenamiento cifrado de expedientes en S3, base de datos RDS en VPC privada y CDN CloudFront para baja latencia.',
      },
      {
        title: 'Procesamiento masivo de imágenes',
        description:
          'Lambda function que procesa automáticamente imágenes subidas a S3: redimensiona, comprime y genera thumbnails en múltiples resoluciones sin servidor dedicado.',
      },
    ],
  },
  {
    name: 'OpenAI',
    slug: 'openai',
    tagline: 'La IA más avanzada del mundo integrada en tu negocio.',
    description: [
      'OpenAI es la empresa creadora de GPT-4, ChatGPT y DALL-E — los modelos de inteligencia artificial generativa más avanzados disponibles comercialmente. A través de su API, cualquier aplicación puede integrar capacidades de comprensión y generación de texto, análisis de documentos, generación de imágenes y mucho más.',
      'La API de OpenAI permite construir asistentes que responden preguntas con el contexto de tu negocio, generan contenido personalizado, analizan documentos, extraen información estructurada de texto libre y automatizan comunicación. Es la puerta de entrada más accesible a la IA para negocios de cualquier tamaño.',
    ],
    useCases: [
      'Chatbots de atención al cliente entrenados con tu información',
      'Análisis y extracción de datos de documentos PDF y contratos',
      'Generación automática de descripciones de productos',
      'Asistentes internos para equipos de ventas y soporte',
    ],
    whyWeUseIt:
      'La API de OpenAI es la forma más práctica de agregar IA real a un producto. GPT-4 entiende contexto complejo, sigue instrucciones precisas y genera respuestas de calidad. Lo integramos con los datos propios del cliente para crear asistentes especializados en su industria.',
    businessBenefits: [
      'Atención al cliente 24/7 sin costo de personal adicional',
      'Procesamiento automático de documentos que toma horas manualmente',
      'Generación de contenido a escala para catálogos y descripciones',
      'Ventaja competitiva real con IA que habla el idioma de tu negocio',
    ],
    vorantheusCases: [
      'Chatbots de WhatsApp y sitio web para negocios de servicios',
      'Procesamiento automático de cotizaciones y contratos',
      'Generación de descripciones de productos para tiendas en línea',
    ],
    examples: [
      {
        title: 'Asistente de ventas por WhatsApp',
        description:
          'Bot que conoce el catálogo completo, responde preguntas de disponibilidad y precio, califica leads y agenda citas con el equipo comercial — las 24 horas del día.',
      },
      {
        title: 'Procesador de contratos',
        description:
          'Sistema que recibe PDFs de contratos, extrae cláusulas clave, identifica fechas de vencimiento y genera resúmenes ejecutivos en segundos en lugar de horas.',
      },
    ],
  },
  {
    name: 'Stripe',
    slug: 'stripe',
    tagline: 'El estándar global para pagos en línea seguros y sin fricciones.',
    description: [
      'Stripe es la plataforma de pagos en línea preferida por startups y empresas tecnológicas en todo el mundo. Procesa pagos con tarjeta de crédito y débito, OXXO, transferencias bancarias y más de 135 métodos de pago globales, todo con una API que los desarrolladores pueden integrar en horas.',
      'Más que un procesador de pagos, Stripe es una suite completa: manejo de suscripciones recurrentes, facturas automáticas, detección de fraude con ML, pagos en múltiples monedas y cumplimiento PCI DSS Level 1 incluido. Companies like Shopify, Salesforce, and Zoom use Stripe for all their payment processing.',
    ],
    useCases: [
      'Pagos únicos y suscripciones recurrentes en e-commerce',
      'Facturación automática para servicios SaaS',
      'Marketplaces con pagos entre múltiples partes',
      'Pagos internacionales en múltiples monedas',
    ],
    whyWeUseIt:
      'Stripe tiene la mejor documentación de cualquier API de pagos, el ecosistema de webhooks más confiable y la seguridad más sólida del mercado. Integrar Stripe en un proyecto Next.js o Node.js toma horas, no semanas, y su dashboard de analítica da visibilidad total sobre los ingresos.',
    businessBenefits: [
      'Pagos con tarjeta aceptados sin configurar cuenta bancaria compleja',
      'Cumplimiento PCI DSS incluido — sin auditorías de seguridad adicionales',
      'Suscripciones automáticas con manejo de renovaciones y cancelaciones',
      'Dashboard en tiempo real con ingresos, reembolsos y disputas',
    ],
    vorantheusCases: [
      'Checkout de e-commerce con múltiples métodos de pago',
      'Suscripciones mensuales para plataformas SaaS',
      'Pagos internacionales para clientes con clientes en EE.UU.',
    ],
    examples: [
      {
        title: 'Plataforma de cursos con membresías',
        description:
          'Cobro mensual automático con Stripe Subscriptions. Los alumnos acceden al contenido mientras su tarjeta esté vigente. Cambios de plan, pausas y cancelaciones gestionados automáticamente.',
      },
      {
        title: 'E-commerce con múltiples métodos de pago',
        description:
          'Checkout que acepta tarjetas Visa/Mastercard internacionales y pagos en OXXO para clientes sin tarjeta bancaria. Confirmación por email automática al acreditar.',
      },
    ],
  },
  {
    name: 'Mercado Pago',
    slug: 'mercado-pago',
    tagline: 'El método de pago que tu cliente mexicano ya conoce y usa.',
    description: [
      'Mercado Pago es la plataforma de pagos líder en América Latina, parte del ecosistema de Mercado Libre. En México, es uno de los métodos de pago digital más utilizados, con soporte para tarjetas de crédito y débito, OXXO, SPEI, Mercado Crédito y pagos a meses sin intereses — los métodos que los compradores mexicanos prefieren.',
      'Para negocios que venden en México y LATAM, Mercado Pago ofrece tasas competitivas, una API robusta y la confianza de una marca que los compradores ya conocen. La integración incluye checkout hospedado, API de pagos personalizada y soporte para flujos de suscripción.',
    ],
    useCases: [
      'E-commerce con pagos a meses sin intereses en México',
      'Checkout con OXXO para clientes sin tarjeta bancaria',
      'Pagos con QR para negocios físicos',
      'Suscripciones y pagos recurrentes en pesos mexicanos',
    ],
    whyWeUseIt:
      'Para clientes con negocios en México, Mercado Pago suele ser indispensable. Los compradores mexicanos confían en la marca y el soporte a pagos en OXXO y a meses sin intereses aumenta significativamente la tasa de conversión versus solo ofrecer tarjeta de crédito.',
    businessBenefits: [
      'Mayor conversión — tus clientes pagan con el método que prefieren',
      'OXXO incluido — vendes incluso a clientes sin cuenta bancaria',
      'Meses sin intereses — aumenta el ticket promedio de compra',
      'Protección al vendedor contra fraudes y chargebacks',
    ],
    vorantheusCases: [
      'Checkout de e-commerce dirigido al mercado mexicano',
      'Tiendas en línea que necesitan OXXO y meses sin intereses',
      'Plataformas de servicios con suscripciones en MXN',
    ],
    examples: [
      {
        title: 'Tienda de moda con pagos a 12 meses',
        description:
          'Checkout con opción de pagar a 3, 6 y 12 meses sin intereses en tarjetas participantes. La opción de OXXO abrió un segmento de clientes que antes no podía comprar en línea.',
      },
      {
        title: 'Plataforma de membresías deportivas',
        description:
          'Membresías mensuales cobradas automáticamente en pesos. Los socios reciben su acceso digital al confirmar el pago y se desactiva automáticamente si la renovación falla.',
      },
    ],
  },
  {
    name: 'Flutter',
    slug: 'flutter',
    tagline: 'Apps hermosas para iOS, Android y web desde un solo código.',
    description: [
      'Flutter es el framework de Google para construir aplicaciones nativas compiladas para móvil, web y desktop desde una sola base de código usando el lenguaje Dart. A diferencia de React Native, Flutter no usa componentes nativos del sistema operativo — renderiza cada píxel con su propio motor gráfico, lo que garantiza una apariencia idéntica en iOS y Android.',
      'Su sistema de widgets y el motor Skia permiten crear interfaces visualmente ricas con animaciones fluidas a 60fps/120fps. Google, eBay, BMW y Alibaba han migrado apps a Flutter. Es la opción de elección cuando la consistencia visual entre plataformas y la performance de UI son críticas.',
    ],
    useCases: [
      'Apps móviles iOS y Android con diseño altamente personalizado',
      'Aplicaciones con animaciones complejas y UI premium',
      'Apps que también requieren versión web o desktop',
      'MVPs rápidos que necesitan presencia en ambas tiendas',
    ],
    whyWeUseIt:
      'Flutter es nuestra elección cuando el diseño personalizado es prioritario y el cliente necesita app en iOS y Android. El renderizado propio garantiza que las animaciones y transiciones se vean exactamente igual en todos los dispositivos, sin depender de los componentes nativos de cada OS.',
    businessBenefits: [
      'App en iOS y Android simultáneamente con diseño pixel-perfect',
      'Animaciones y transiciones fluidas a 60fps o más',
      'Hot reload — cambios de UI visibles en milisegundos durante desarrollo',
      'La misma app puede ejecutarse en web con ajustes mínimos',
    ],
    vorantheusCases: [
      'Apps móviles con branding fuerte y animaciones personalizadas',
      'Aplicaciones que requieren presencia en iOS, Android y web',
      'MVPs de productos digitales con UI premium',
    ],
    examples: [
      {
        title: 'App de fitness con animaciones de ejercicios',
        description:
          'Animaciones fluidas de instrucciones de ejercicio, temporizadores interactivos y visualizaciones de progreso. La experiencia visual fue clave para la retención de usuarios.',
      },
      {
        title: 'App de delivery con mapa en tiempo real',
        description:
          'Mapa con ubicación de repartidores actualizada cada 3 segundos, animaciones de marcadores y transiciones suaves entre estados del pedido.',
      },
    ],
  },
  {
    name: 'GitHub',
    slug: 'github',
    tagline: 'El hogar del código donde la colaboración se vuelve producto.',
    description: [
      'GitHub es la plataforma de colaboración de código más grande del mundo, con más de 100 millones de desarrolladores y 420 millones de repositorios. Aloja el código fuente de prácticamente todo el software de código abierto relevante del mundo y es el sistema de control de versiones estándar de la industria.',
      'Más allá de almacenar código, GitHub es una plataforma completa de DevOps: automatización de pipelines CI/CD con GitHub Actions, gestión de proyectos con Issues y Projects, revisiones de código colaborativas y despliegues automáticos. Es la columna vertebral del flujo de trabajo moderno de desarrollo de software.',
    ],
    useCases: [
      'Control de versiones del código fuente del proyecto',
      'Colaboración entre desarrolladores con pull requests y revisiones',
      'CI/CD automatizado con GitHub Actions',
      'Gestión de tareas y sprints con GitHub Projects',
    ],
    whyWeUseIt:
      'Todo nuestro código vive en GitHub. Los clientes tienen acceso al repositorio de su proyecto, pueden ver el historial completo de cambios y colaborar directamente. GitHub Actions automatiza los tests y deployments en cada commit, eliminando pasos manuales y errores humanos.',
    businessBenefits: [
      'Tú eres dueño de tu código — acceso total al repositorio en cualquier momento',
      'Historial completo de cada cambio — nada se pierde',
      'Deployments automáticos seguros sin intervención manual',
      'Colaboración estructurada con revisiones antes de publicar cambios',
    ],
    vorantheusCases: [
      'Repositorio de todos los proyectos que desarrollamos para clientes',
      'Pipelines de CI/CD para deployments automáticos a Vercel y AWS',
      'Gestión de backlog y sprints con clientes',
    ],
    examples: [
      {
        title: 'Pipeline de deployment automático',
        description:
          'Cada push a main ejecuta tests, lint y build. Si todo pasa, el sitio se publica automáticamente en Vercel en menos de 2 minutos. Sin intervención humana.',
      },
      {
        title: 'Repositorio con acceso del cliente',
        description:
          'El cliente accede al repositorio de su proyecto, ve el historial de cambios, aprueba pull requests y tiene respaldo completo de su inversión en código.',
      },
    ],
  },
  {
    name: 'Figma',
    slug: 'figma',
    tagline: 'Diseño colaborativo que se convierte directamente en código.',
    description: [
      'Figma es la herramienta de diseño de interfaces más adoptada por equipos de producto modernos. Permite crear prototipos interactivos, sistemas de diseño y especificaciones de UI que los desarrolladores pueden inspeccionar directamente, acelerando el puente entre diseño y código.',
      'La colaboración en tiempo real de Figma — múltiples personas editando el mismo archivo simultáneamente — revolucionó los flujos de trabajo de diseño. Empresas como Airbnb, Uber, Microsoft y Apple usan Figma como herramienta central de diseño. Su adquisición por Adobe en 2022 confirmó su posición dominante en el mercado.',
    ],
    useCases: [
      'Diseño de interfaces de aplicaciones web y móviles',
      'Prototipado interactivo para validar flujos con usuarios',
      'Sistemas de diseño reutilizables para productos digitales',
      'Especificaciones visuales para el equipo de desarrollo',
    ],
    whyWeUseIt:
      'Usamos Figma para diseñar todas las interfaces antes de escribir código. Permite iterar rápidamente sobre el diseño con el cliente, aprobar la dirección visual antes de invertir en desarrollo y generar especificaciones exactas de colores, tipografía y espaciados que el equipo de desarrollo sigue al píxel.',
    businessBenefits: [
      'Ves tu app antes de que se construya — apruebas el diseño primero',
      'Cambios de diseño en Figma son más baratos que cambios en código',
      'Especificaciones exactas eliminan malentendidos entre diseño y desarrollo',
      'Prototipo funcional para validar con usuarios antes de invertir en desarrollo',
    ],
    vorantheusCases: [
      'Diseño de todas las interfaces web y móviles antes del desarrollo',
      'Prototipado interactivo para presentaciones a clientes',
      'Sistemas de diseño para marcas con múltiples productos digitales',
    ],
    examples: [
      {
        title: 'Diseño de sistema administrativo',
        description:
          'Prototipo interactivo completo del ERP antes de escribir una línea de código. El cliente navegó todas las pantallas, aprobó flujos y solicitó ajustes — sin costo de desarrollo.',
      },
      {
        title: 'Sistema de diseño para app móvil',
        description:
          'Librería de componentes en Figma: botones, formularios, tarjetas, iconos y paleta de colores. El equipo de desarrollo la usa como referencia exacta para cada componente.',
      },
    ],
  },
  createTechnology({
    name: 'Django',
    slug: 'django',
    tagline: 'Framework backend robusto para productos con lógica de negocio seria.',
    summary:
      'Django es un framework de Python para construir aplicaciones web seguras, estructuradas y escalables con panel administrativo, autenticación, ORM y buenas prácticas integradas.',
    bestFor: 'un backend necesita seguridad, estructura y velocidad de desarrollo sin sacrificar mantenibilidad',
    useCases: [
      'Sistemas administrativos y portales internos',
      'Aplicaciones con panel de administración avanzado',
      'APIs para productos web y móviles',
      'Plataformas con permisos, usuarios y flujos de negocio',
    ],
    businessBenefits: [
      'Lanzamiento más rápido gracias a herramientas integradas',
      'Arquitectura ordenada para mantenimiento a largo plazo',
      'Seguridad madura para usuarios, sesiones y permisos',
      'Ideal para sistemas con datos y reglas de negocio complejas',
    ],
    vorantheusCases: [
      'Backends para sistemas administrativos',
      'Paneles internos con permisos por rol',
      'APIs para apps móviles y plataformas web',
    ],
  }),
  createTechnology({
    name: 'FastAPI',
    slug: 'fastapi',
    tagline: 'APIs rápidas en Python con documentación automática.',
    summary:
      'FastAPI es un framework moderno de Python para crear APIs veloces, tipadas y fáciles de documentar, ideal para servicios backend, integraciones e inteligencia artificial.',
    bestFor: 'el proyecto requiere APIs rápidas, validación clara de datos o integración con modelos de IA en Python',
    useCases: [
      'APIs para aplicaciones web y móviles',
      'Servicios de IA y procesamiento de datos',
      'Microservicios ligeros y de alto rendimiento',
      'Integraciones con sistemas externos',
    ],
    businessBenefits: [
      'APIs rápidas y documentadas desde el inicio',
      'Menos errores gracias a validación automática',
      'Excelente conexión con ecosistemas de IA y datos',
      'Escalable para servicios independientes',
    ],
    vorantheusCases: [
      'Servicios de IA conectados a plataformas web',
      'APIs internas para automatizaciones',
      'Procesamiento de datos y documentos',
    ],
  }),
  createTechnology({
    name: 'Redis',
    slug: 'redis',
    tagline: 'Velocidad para caché, sesiones y procesos en tiempo real.',
    summary:
      'Redis es una base de datos en memoria usada para acelerar aplicaciones, manejar sesiones, colas de trabajo, límites de uso y datos temporales de alta velocidad.',
    bestFor: 'una plataforma necesita responder rápido, evitar sobrecarga de base de datos o coordinar procesos en segundo plano',
    useCases: [
      'Caché de consultas y respuestas frecuentes',
      'Sesiones de usuario y tokens temporales',
      'Colas de tareas y procesamiento asíncrono',
      'Rate limiting para proteger APIs',
    ],
    businessBenefits: [
      'Aplicaciones más rápidas para el usuario final',
      'Menor carga sobre bases de datos principales',
      'Mejor estabilidad ante picos de tráfico',
      'Procesos en segundo plano más confiables',
    ],
    vorantheusCases: [
      'Caché para dashboards y reportes',
      'Rate limiting en APIs públicas',
      'Colas para notificaciones y automatizaciones',
    ],
  }),
  createTechnology({
    name: 'Google Cloud',
    slug: 'google-cloud',
    tagline: 'Infraestructura cloud con datos, IA y escalabilidad global.',
    summary:
      'Google Cloud es la plataforma de nube de Google para hospedar aplicaciones, bases de datos, APIs, analítica, inteligencia artificial e infraestructura escalable.',
    bestFor: 'el negocio requiere infraestructura cloud confiable, servicios de datos o integración avanzada con IA',
    useCases: [
      'Hosting de aplicaciones y APIs',
      'Almacenamiento y procesamiento de datos',
      'Servicios de IA, visión y lenguaje',
      'Infraestructura para productos escalables',
    ],
    businessBenefits: [
      'Infraestructura global administrada',
      'Servicios avanzados de datos e inteligencia artificial',
      'Escalabilidad sin comprar servidores propios',
      'Integración sólida con herramientas empresariales',
    ],
    vorantheusCases: [
      'Deploy de APIs y servicios backend',
      'Procesamiento de datos para reportes',
      'Integraciones con servicios de IA de Google',
    ],
  }),
  createTechnology({
    name: 'Cloudflare',
    slug: 'cloudflare',
    tagline: 'Seguridad, velocidad y protección para sitios modernos.',
    summary:
      'Cloudflare ofrece CDN, DNS, protección DDoS, reglas de seguridad, cacheo y herramientas edge para mejorar la velocidad y seguridad de sitios web.',
    bestFor: 'un sitio necesita cargar rápido, protegerse mejor y tener una capa de red confiable',
    useCases: [
      'CDN para sitios web y archivos estáticos',
      'DNS administrado y protección DDoS',
      'Reglas de firewall y seguridad web',
      'Optimización de rendimiento global',
    ],
    businessBenefits: [
      'Sitios más rápidos para usuarios de distintas regiones',
      'Mayor protección contra ataques comunes',
      'Menos carga sobre servidores de origen',
      'Mejor disponibilidad del sitio',
    ],
    vorantheusCases: [
      'Protección de sitios corporativos',
      'Optimización de velocidad en landing pages',
      'Configuración de DNS y seguridad web',
    ],
  }),
  createTechnology({
    name: 'GitHub Actions',
    slug: 'github-actions',
    tagline: 'Automatización de pruebas, builds y despliegues desde GitHub.',
    summary:
      'GitHub Actions permite automatizar flujos de CI/CD: correr lint, tests, builds, despliegues y tareas repetitivas cada vez que cambia el código.',
    bestFor: 'el equipo necesita publicar cambios con menos pasos manuales y mayor control de calidad',
    useCases: [
      'CI/CD para sitios y aplicaciones',
      'Ejecución automática de lint, tests y build',
      'Deploys a Vercel, AWS u otros servicios',
      'Automatizaciones de mantenimiento del repositorio',
    ],
    businessBenefits: [
      'Publicaciones más seguras y repetibles',
      'Menos errores humanos en deploys',
      'Detección temprana de fallos técnicos',
      'Mejor trazabilidad de cambios',
    ],
    vorantheusCases: [
      'Pipelines de calidad para proyectos web',
      'Deploys automáticos por rama',
      'Validación de builds antes de publicar',
    ],
  }),
  createTechnology({
    name: 'Grafana',
    slug: 'grafana',
    tagline: 'Dashboards para entender la salud de tus sistemas.',
    summary:
      'Grafana es una plataforma de visualización para métricas, logs y datos operativos que permite crear dashboards claros sobre el estado de una aplicación.',
    bestFor: 'una plataforma necesita visibilidad técnica y operativa para detectar problemas antes de que afecten al cliente',
    useCases: [
      'Dashboards de rendimiento y disponibilidad',
      'Monitoreo de APIs, servidores y bases de datos',
      'Visualización de métricas de negocio',
      'Alertas sobre incidentes técnicos',
    ],
    businessBenefits: [
      'Mayor visibilidad sobre sistemas críticos',
      'Detección temprana de fallos',
      'Mejor toma de decisiones con datos',
      'Menos tiempo investigando incidentes',
    ],
    vorantheusCases: [
      'Monitoreo de APIs y servicios backend',
      'Dashboards para infraestructura cloud',
      'Paneles internos de métricas técnicas',
    ],
  }),
  createTechnology({
    name: 'Prometheus',
    slug: 'prometheus',
    tagline: 'Métricas confiables para monitorear infraestructura y servicios.',
    summary:
      'Prometheus es una herramienta de monitoreo y alertas diseñada para recopilar métricas de aplicaciones, APIs, servidores y contenedores.',
    bestFor: 'un sistema necesita métricas técnicas consistentes y alertas automáticas ante comportamiento anormal',
    useCases: [
      'Monitoreo de servicios backend',
      'Alertas de disponibilidad y rendimiento',
      'Métricas de infraestructura y contenedores',
      'Observabilidad para sistemas distribuidos',
    ],
    businessBenefits: [
      'Menor tiempo de respuesta ante incidentes',
      'Datos técnicos confiables para mantenimiento',
      'Alertas antes de que el problema escale',
      'Base sólida para observabilidad profesional',
    ],
    vorantheusCases: [
      'Monitoreo de APIs críticas',
      'Métricas de contenedores Docker',
      'Alertas de rendimiento y disponibilidad',
    ],
  }),
  createTechnology({
    name: 'Sentry',
    slug: 'sentry',
    tagline: 'Errores visibles antes de que se conviertan en pérdidas.',
    summary:
      'Sentry es una plataforma de monitoreo de errores y rendimiento que ayuda a detectar fallos en frontend, backend y aplicaciones móviles.',
    bestFor: 'el producto necesita detectar, priorizar y resolver errores reales de usuarios con rapidez',
    useCases: [
      'Monitoreo de errores en producción',
      'Seguimiento de performance y lentitud',
      'Alertas para fallos críticos',
      'Diagnóstico con contexto técnico del usuario',
    ],
    businessBenefits: [
      'Errores detectados antes de que muchos clientes los reporten',
      'Diagnóstico más rápido para correcciones',
      'Mayor estabilidad del producto',
      'Mejor experiencia para usuarios finales',
    ],
    vorantheusCases: [
      'Monitoreo de sitios Next.js',
      'Seguimiento de errores en APIs',
      'Alertas para formularios y flujos críticos',
    ],
  }),
  createTechnology({
    name: 'Jira',
    slug: 'jira',
    tagline: 'Gestión de proyectos para equipos con procesos claros.',
    summary:
      'Jira es una herramienta de gestión de proyectos usada para organizar tareas, sprints, bugs, prioridades y entregas en equipos de software.',
    bestFor: 'un proyecto necesita seguimiento formal, priorización clara y comunicación ordenada entre cliente y equipo',
    useCases: [
      'Backlogs y sprints de desarrollo',
      'Seguimiento de bugs y solicitudes',
      'Gestión de prioridades por etapa',
      'Reportes de avance para stakeholders',
    ],
    businessBenefits: [
      'Mayor claridad sobre qué se está construyendo',
      'Mejor control de prioridades y tiempos',
      'Menos pérdida de información entre reuniones',
      'Seguimiento trazable de tareas y decisiones',
    ],
    vorantheusCases: [
      'Gestión de proyectos medianos y grandes',
      'Seguimiento de incidencias y mejoras',
      'Organización de sprints de desarrollo',
    ],
  }),
  createTechnology({
    name: 'Notion',
    slug: 'notion',
    tagline: 'Documentación viva para proyectos, procesos y decisiones.',
    summary:
      'Notion es una herramienta flexible para documentar proyectos, procesos, bases de conocimiento, calendarios, tareas y decisiones en un solo lugar.',
    bestFor: 'el cliente necesita documentación clara, centralizada y fácil de mantener durante el proyecto',
    useCases: [
      'Documentación de procesos y requerimientos',
      'Bases de conocimiento internas',
      'Roadmaps y seguimiento ligero de tareas',
      'Manuales de uso para equipos',
    ],
    businessBenefits: [
      'Información centralizada y fácil de consultar',
      'Menos dependencia de mensajes sueltos',
      'Mejor transferencia de conocimiento',
      'Documentación útil después de entregar el proyecto',
    ],
    vorantheusCases: [
      'Documentación de proyectos para clientes',
      'Manuales de uso de sistemas internos',
      'Organización de requerimientos y entregables',
    ],
  }),
  createTechnology({
    name: 'Postman',
    slug: 'postman',
    tagline: 'Pruebas y documentación práctica para APIs.',
    summary:
      'Postman es una herramienta para probar APIs, organizar colecciones de endpoints, documentar integraciones y validar flujos antes de conectarlos a una app.',
    bestFor: 'el proyecto depende de APIs internas o externas que deben probarse y documentarse con claridad',
    useCases: [
      'Pruebas manuales y automatizadas de APIs',
      'Documentación de endpoints',
      'Validación de integraciones externas',
      'Colecciones compartidas entre equipos',
    ],
    businessBenefits: [
      'Integraciones más claras y menos propensas a error',
      'Pruebas rápidas antes de publicar cambios',
      'Mejor comunicación entre backend y frontend',
      'Documentación técnica reutilizable',
    ],
    vorantheusCases: [
      'Pruebas de APIs para sistemas administrativos',
      'Validación de webhooks de pagos',
      'Documentación de endpoints para clientes',
    ],
  }),
  createTechnology({
    name: 'Swagger',
    slug: 'swagger',
    tagline: 'Documentación de APIs clara, navegable y mantenible.',
    summary:
      'Swagger, basado en OpenAPI, permite describir APIs con contratos formales que pueden explorarse, probarse y compartirse fácilmente.',
    bestFor: 'una API necesita documentación confiable para clientes, integraciones o equipos internos',
    useCases: [
      'Documentación interactiva de APIs REST',
      'Contratos técnicos para integraciones',
      'Pruebas de endpoints desde navegador',
      'Generación de clientes y tipos a partir de OpenAPI',
    ],
    businessBenefits: [
      'Menos confusión al integrar sistemas',
      'Documentación técnica siempre disponible',
      'Mejor colaboración con terceros',
      'Reducción de errores por contratos ambiguos',
    ],
    vorantheusCases: [
      'Documentación de APIs para apps móviles',
      'Contratos de integración con terceros',
      'APIs internas para plataformas empresariales',
    ],
  }),
  createTechnology({
    name: 'n8n',
    slug: 'n8n',
    tagline: 'Automatización visual para conectar herramientas y procesos.',
    summary:
      'n8n es una plataforma de automatización que permite conectar aplicaciones, APIs, bases de datos e IA mediante flujos visuales y lógica personalizada.',
    bestFor: 'un negocio quiere automatizar tareas repetitivas sin construir un sistema completo desde cero',
    useCases: [
      'Automatización de leads y seguimiento',
      'Sincronización entre CRM, hojas de cálculo y correo',
      'Flujos con IA y webhooks',
      'Alertas y reportes automáticos',
    ],
    businessBenefits: [
      'Ahorro de tiempo en tareas repetitivas',
      'Procesos más ordenados y medibles',
      'Menos errores de captura manual',
      'Integraciones rápidas entre herramientas existentes',
    ],
    vorantheusCases: [
      'Automatizaciones para leads de formularios',
      'Flujos con IA para clasificar solicitudes',
      'Reportes automáticos para equipos comerciales',
    ],
  }),
  createTechnology({
    name: 'PayPal',
    slug: 'paypal',
    tagline: 'Pagos globales con una marca conocida por los compradores.',
    summary:
      'PayPal es una plataforma de pagos en línea usada globalmente para aceptar pagos con saldo, tarjeta y cuentas PayPal de forma rápida.',
    bestFor: 'una tienda o plataforma necesita ofrecer un método de pago reconocido para clientes nacionales e internacionales',
    useCases: [
      'E-commerce con clientes internacionales',
      'Pagos únicos por servicios digitales',
      'Checkout alternativo a tarjeta directa',
      'Cobros en múltiples monedas',
    ],
    businessBenefits: [
      'Más confianza para compradores internacionales',
      'Método de pago adicional en checkout',
      'Menos fricción para clientes que ya usan PayPal',
      'Cobros digitales sin infraestructura bancaria compleja',
    ],
    vorantheusCases: [
      'Tiendas en línea con pagos globales',
      'Servicios digitales con checkout rápido',
      'Integraciones de pago como método secundario',
    ],
  }),
  createTechnology({
    name: 'Conekta',
    slug: 'conekta',
    tagline: 'Pagos en México con tarjetas, OXXO y métodos locales.',
    summary:
      'Conekta es una pasarela de pagos enfocada en México que permite aceptar tarjetas, pagos en efectivo, SPEI y métodos locales para e-commerce y servicios.',
    bestFor: 'un negocio mexicano necesita aceptar pagos locales con una integración enfocada en el mercado nacional',
    useCases: [
      'Checkout para tiendas mexicanas',
      'Pagos en efectivo y transferencia',
      'Cobros de servicios y reservas',
      'Integraciones de pago con sistemas propios',
    ],
    businessBenefits: [
      'Métodos de pago adaptados al cliente mexicano',
      'Mayor flexibilidad para cobrar en línea',
      'Integración con flujos de e-commerce',
      'Alternativa local a pasarelas internacionales',
    ],
    vorantheusCases: [
      'Tiendas en línea para negocios mexicanos',
      'Pagos de servicios con referencia',
      'Integración de checkout en plataformas propias',
    ],
  }),
  createTechnology({
    name: 'Shopify',
    slug: 'shopify',
    tagline: 'Comercio electrónico listo para vender con menos fricción.',
    summary:
      'Shopify es una plataforma de e-commerce que permite crear tiendas en línea, administrar productos, inventario, pagos y pedidos sin construir todo desde cero.',
    bestFor: 'un negocio quiere vender rápido en línea con una base estable y herramientas comerciales ya resueltas',
    useCases: [
      'Tiendas en línea de productos físicos o digitales',
      'Catálogos con inventario y variantes',
      'Integración con pasarelas de pago y envíos',
      'Automatización comercial para e-commerce',
    ],
    businessBenefits: [
      'Lanzamiento rápido de tienda en línea',
      'Administración sencilla para el equipo',
      'Ecosistema amplio de integraciones',
      'Menor costo inicial frente a un e-commerce desde cero',
    ],
    vorantheusCases: [
      'Tiendas para marcas que quieren vender rápido',
      'Configuración de temas y experiencia de compra',
      'Integraciones con pagos, envíos y analítica',
    ],
  }),
  createTechnology({
    name: 'WordPress',
    slug: 'wordpress',
    tagline: 'CMS flexible para sitios administrables y contenido frecuente.',
    summary:
      'WordPress es el CMS más usado del mundo para crear sitios administrables, blogs, páginas corporativas y proyectos donde el cliente necesita editar contenido con facilidad.',
    bestFor: 'el sitio requiere administración de contenido frecuente y un panel conocido por equipos no técnicos',
    useCases: [
      'Sitios corporativos administrables',
      'Blogs y portales de contenido',
      'Landing pages con editor visual',
      'Sitios con plugins y funcionalidades comunes',
    ],
    businessBenefits: [
      'El equipo puede editar contenido sin desarrollador',
      'Amplio ecosistema de plugins y temas',
      'Buena opción para contenido frecuente',
      'Costos iniciales accesibles en proyectos sencillos',
    ],
    vorantheusCases: [
      'Sitios informativos administrables',
      'Blogs empresariales',
      'Migraciones y mejoras de sitios existentes',
    ],
  }),
  createTechnology({
    name: 'WooCommerce',
    slug: 'woocommerce',
    tagline: 'E-commerce sobre WordPress para tiendas administrables.',
    summary:
      'WooCommerce es el plugin de comercio electrónico más popular para WordPress, usado para vender productos, gestionar inventario, pagos y envíos desde un CMS conocido.',
    bestFor: 'un negocio ya usa WordPress o necesita una tienda administrable con control amplio de contenido',
    useCases: [
      'Tiendas en línea sobre WordPress',
      'Catálogos con productos, variantes y cupones',
      'Integración con pasarelas de pago',
      'E-commerce con blog y contenido SEO',
    ],
    businessBenefits: [
      'Control completo de contenido y tienda en un solo panel',
      'Gran ecosistema de extensiones',
      'Flexible para tiendas pequeñas y medianas',
      'Buena combinación entre SEO y venta en línea',
    ],
    vorantheusCases: [
      'Tiendas administrables para negocios locales',
      'Integraciones de pago y envío en WordPress',
      'Optimización técnica de tiendas existentes',
    ],
  }),
  createTechnology({
    name: 'Angular',
    slug: 'angular',
    tagline: 'Framework frontend completo para aplicaciones empresariales.',
    summary:
      'Angular es un framework de Google para construir aplicaciones web robustas con arquitectura estructurada, TypeScript, formularios avanzados, rutas y herramientas integradas.',
    bestFor: 'una aplicación web requiere estructura estricta, módulos claros y escalabilidad para equipos grandes',
    useCases: ['Dashboards empresariales', 'Portales internos', 'Aplicaciones SPA complejas', 'Sistemas con formularios avanzados'],
    businessBenefits: ['Arquitectura consistente', 'Buen mantenimiento a largo plazo', 'Ideal para equipos grandes', 'Herramientas integradas desde el inicio'],
    vorantheusCases: ['Aplicaciones internas empresariales', 'Paneles administrativos complejos', 'Portales con permisos por rol'],
  }),
  createTechnology({
    name: 'Vue.js',
    slug: 'vuejs',
    tagline: 'Framework frontend progresivo para interfaces rápidas y flexibles.',
    summary:
      'Vue.js es un framework JavaScript para construir interfaces reactivas, componentes reutilizables y aplicaciones web modernas con una curva de aprendizaje ligera.',
    bestFor: 'el proyecto necesita una interfaz moderna, rápida de desarrollar y fácil de mantener',
    useCases: ['Landing pages interactivas', 'Dashboards ligeros', 'Aplicaciones web progresivas', 'Componentes embebidos en sitios existentes'],
    businessBenefits: ['Desarrollo ágil', 'Interfaz moderna y reactiva', 'Fácil adopción en proyectos existentes', 'Buen equilibrio entre simplicidad y potencia'],
    vorantheusCases: ['Interfaces comerciales ligeras', 'Componentes interactivos', 'Paneles web con ciclos de desarrollo cortos'],
  }),
  createTechnology({
    name: 'Laravel',
    slug: 'laravel',
    tagline: 'Framework PHP moderno para sistemas web productivos.',
    summary:
      'Laravel es un framework PHP para crear aplicaciones web, APIs, paneles administrativos y sistemas con autenticación, base de datos y colas de trabajo.',
    bestFor: 'un negocio necesita un sistema web estable con panel administrativo, lógica de negocio y desarrollo eficiente',
    useCases: ['Sistemas administrativos', 'Portales de clientes', 'APIs para apps', 'Backends con panel de gestión'],
    businessBenefits: ['Desarrollo rápido y ordenado', 'Ecosistema maduro', 'Buen soporte para aplicaciones de negocio', 'Costos accesibles de mantenimiento'],
    vorantheusCases: ['Sistemas internos para pymes', 'Portales con usuarios y roles', 'APIs y paneles administrativos'],
  }),
  createTechnology({
    name: 'Spring Boot',
    slug: 'spring-boot',
    tagline: 'Backend Java para sistemas empresariales de alta confiabilidad.',
    summary:
      'Spring Boot es un framework Java que simplifica la creación de APIs, microservicios y sistemas empresariales seguros, escalables y mantenibles.',
    bestFor: 'una empresa necesita backend robusto, integración con sistemas corporativos o arquitectura enterprise',
    useCases: ['APIs empresariales', 'Microservicios', 'Integraciones bancarias o corporativas', 'Sistemas con alta disponibilidad'],
    businessBenefits: ['Alta confiabilidad', 'Ecosistema enterprise probado', 'Seguridad y escalabilidad', 'Ideal para proyectos críticos'],
    vorantheusCases: ['Backends corporativos', 'Integraciones con sistemas legacy', 'Servicios empresariales escalables'],
  }),
  createTechnology({
    name: 'GraphQL',
    slug: 'graphql',
    tagline: 'APIs flexibles para pedir exactamente los datos necesarios.',
    summary:
      'GraphQL es un lenguaje de consulta para APIs que permite al frontend solicitar solo los datos que necesita, reduciendo respuestas excesivas y endpoints duplicados.',
    bestFor: 'una aplicación tiene múltiples vistas, clientes o necesidades de datos que cambian frecuentemente',
    useCases: ['APIs para web y móvil', 'Dashboards con datos compuestos', 'Plataformas con múltiples clientes', 'Integraciones frontend-backend complejas'],
    businessBenefits: ['Menos llamadas innecesarias', 'Mayor flexibilidad para nuevas pantallas', 'Contratos de datos claros', 'Mejor experiencia en apps móviles'],
    vorantheusCases: ['Plataformas SaaS', 'Apps móviles conectadas a APIs', 'Dashboards con múltiples fuentes de datos'],
  }),
  createTechnology({
    name: 'Socket.IO',
    slug: 'socket-io',
    tagline: 'Comunicación en tiempo real para apps interactivas.',
    summary:
      'Socket.IO permite comunicación bidireccional en tiempo real entre cliente y servidor para chats, notificaciones, dashboards live y colaboración.',
    bestFor: 'el producto necesita actualizaciones instantáneas sin recargar la página',
    useCases: ['Chats y mensajería', 'Notificaciones en vivo', 'Dashboards en tiempo real', 'Seguimiento de pedidos o ubicaciones'],
    businessBenefits: ['Experiencia más inmediata', 'Menos actualizaciones manuales', 'Mayor visibilidad operativa', 'Interacciones colaborativas en vivo'],
    vorantheusCases: ['Sistemas con notificaciones live', 'Paneles operativos en tiempo real', 'Flujos de pedidos y seguimiento'],
  }),
  createTechnology({
    name: 'Prisma',
    slug: 'prisma',
    tagline: 'Acceso a base de datos con tipos seguros y desarrollo ágil.',
    summary:
      'Prisma es un ORM moderno para Node.js y TypeScript que simplifica consultas, migraciones y modelos de datos con tipos automáticos.',
    bestFor: 'un backend TypeScript necesita trabajar con base de datos de forma segura, clara y mantenible',
    useCases: ['APIs con PostgreSQL o MySQL', 'Sistemas administrativos', 'Modelado de datos', 'Migraciones controladas'],
    businessBenefits: ['Menos errores en consultas', 'Desarrollo más rápido', 'Modelos de datos claros', 'Mantenimiento más seguro'],
    vorantheusCases: ['APIs para sistemas internos', 'Modelos de negocio relacionales', 'Backends TypeScript con base de datos'],
  }),
  createTechnology({
    name: 'Kubernetes',
    slug: 'kubernetes',
    tagline: 'Orquestación de contenedores para productos que necesitan escalar.',
    summary:
      'Kubernetes administra contenedores en producción, distribuye carga, reinicia servicios fallidos y permite desplegar aplicaciones escalables.',
    bestFor: 'una plataforma tiene múltiples servicios, alto tráfico o necesidades avanzadas de disponibilidad',
    useCases: ['Microservicios', 'APIs de alto tráfico', 'Infraestructura multi-servicio', 'Deploys escalables en cloud'],
    businessBenefits: ['Alta disponibilidad', 'Escalabilidad automática', 'Deploys más controlados', 'Menor dependencia de un solo servidor'],
    vorantheusCases: ['Arquitecturas cloud avanzadas', 'Servicios backend contenedorizados', 'Plataformas con crecimiento progresivo'],
  }),
  createTechnology({
    name: 'Terraform',
    slug: 'terraform',
    tagline: 'Infraestructura como código para despliegues repetibles.',
    summary:
      'Terraform permite definir infraestructura cloud con código, versionarla y recrearla de forma consistente en AWS, Google Cloud, Cloudflare y otros proveedores.',
    bestFor: 'un proyecto necesita infraestructura controlada, documentada y replicable entre ambientes',
    useCases: ['Infraestructura cloud', 'Ambientes staging y producción', 'DNS y redes', 'Automatización de recursos'],
    businessBenefits: ['Menos configuración manual', 'Infraestructura documentada', 'Cambios trazables', 'Ambientes más consistentes'],
    vorantheusCases: ['Configuración cloud para clientes', 'Automatización de infraestructura', 'Deploys reproducibles'],
  }),
  createTechnology({
    name: 'Nginx',
    slug: 'nginx',
    tagline: 'Servidor web y proxy para rendimiento y control de tráfico.',
    summary:
      'Nginx es un servidor web y reverse proxy usado para servir sitios, balancear tráfico, manejar SSL, cachear contenido y proteger servicios backend.',
    bestFor: 'una aplicación necesita controlar tráfico, publicar APIs o mejorar rendimiento en infraestructura propia',
    useCases: ['Reverse proxy para APIs', 'Servidor web', 'Balanceo de carga', 'SSL y reglas de red'],
    businessBenefits: ['Mejor rendimiento', 'Mayor control de despliegue', 'Protección de servicios internos', 'Infraestructura más flexible'],
    vorantheusCases: ['Publicación de APIs', 'Configuración de servidores', 'Optimización de tráfico web'],
  }),
  createTechnology({
    name: 'Google Analytics',
    slug: 'google-analytics',
    tagline: 'Medición para entender visitas, conversiones y comportamiento.',
    summary:
      'Google Analytics permite medir tráfico, eventos, conversiones y comportamiento de usuarios para tomar mejores decisiones comerciales.',
    bestFor: 'un sitio necesita saber qué canales, páginas y botones generan oportunidades reales',
    useCases: ['Medición de visitas', 'Eventos de formularios y CTAs', 'Análisis de campañas', 'Reportes de conversión'],
    businessBenefits: ['Decisiones basadas en datos', 'Mejor lectura del embudo comercial', 'Optimización de campañas', 'Visibilidad sobre leads'],
    vorantheusCases: ['Tracking de cotizaciones', 'Eventos de WhatsApp y paquetes', 'Medición de páginas de servicios'],
  }),
  createTechnology({
    name: 'Electron',
    slug: 'electron',
    tagline: 'Aplicaciones de escritorio usando tecnologías web.',
    summary:
      'Electron permite crear apps de escritorio para Windows, macOS y Linux usando JavaScript, HTML y CSS, con acceso a funciones del sistema.',
    bestFor: 'un negocio necesita una app de escritorio conectada a sistemas web o procesos locales',
    useCases: ['Apps de escritorio internas', 'Herramientas administrativas', 'Sistemas conectados a hardware local', 'Clientes desktop para plataformas web'],
    businessBenefits: ['Una base tecnológica para varios sistemas', 'Integración con procesos locales', 'Distribución en escritorio', 'Experiencia dedicada para equipos internos'],
    vorantheusCases: ['Herramientas internas de operación', 'Apps desktop conectadas a APIs', 'Sistemas con necesidades locales'],
  }),
  createTechnology({
    name: 'Capacitor',
    slug: 'capacitor',
    tagline: 'Apps móviles nativas a partir de proyectos web modernos.',
    summary:
      'Capacitor permite convertir aplicaciones web en apps iOS y Android con acceso a funcionalidades nativas como cámara, archivos, notificaciones y almacenamiento.',
    bestFor: 'un producto web necesita llegar a tiendas móviles sin rehacer toda la app desde cero',
    useCases: ['Apps móviles híbridas', 'MVPs para iOS y Android', 'Acceso a funciones nativas', 'Reutilización de código web'],
    businessBenefits: ['Menor costo de desarrollo móvil', 'Salida más rápida a tiendas', 'Reutilización del frontend existente', 'Acceso a capacidades nativas'],
    vorantheusCases: ['Apps móviles para clientes con plataforma web', 'MVPs móviles', 'Extensiones móviles de sistemas administrativos'],
  }),
  createTechnology({
    name: 'Strapi',
    slug: 'strapi',
    tagline: 'CMS headless para administrar contenido con APIs modernas.',
    summary:
      'Strapi es un CMS headless open-source que permite administrar contenido y exponerlo mediante APIs para sitios, apps y plataformas.',
    bestFor: 'el cliente necesita editar contenido desde un panel mientras el frontend se mantiene moderno y personalizado',
    useCases: ['Sitios con contenido administrable', 'Blogs headless', 'Catálogos y landing pages', 'APIs de contenido para apps'],
    businessBenefits: ['Contenido editable sin tocar código', 'Frontend libre y personalizado', 'API lista para web y móvil', 'Escalable para múltiples canales'],
    vorantheusCases: ['Sitios corporativos administrables', 'Blogs conectados a Next.js', 'Catálogos con CMS'],
  }),
  createTechnology({
    name: 'JavaScript',
    slug: 'javascript',
    tagline: 'El lenguaje base de la web moderna.',
    summary:
      'JavaScript es el lenguaje principal del navegador y una pieza central para crear interfaces, APIs, automatizaciones y aplicaciones modernas.',
    bestFor: 'un proyecto requiere interactividad web, integraciones o desarrollo full-stack flexible',
    useCases: ['Interfaces web', 'APIs con Node.js', 'Automatizaciones', 'Integraciones con servicios externos'],
    businessBenefits: ['Ecosistema enorme', 'Desarrollo web rápido', 'Compatible con todos los navegadores', 'Base para stacks modernos'],
    vorantheusCases: ['Sitios interactivos', 'Automatizaciones web', 'Integraciones frontend-backend'],
  }),
  createTechnology({
    name: '.NET',
    slug: 'dotnet',
    tagline: 'Plataforma Microsoft para aplicaciones empresariales robustas.',
    summary:
      '.NET es una plataforma de Microsoft para crear APIs, aplicaciones web, servicios empresariales y software de alto rendimiento con C#.',
    bestFor: 'una empresa necesita sistemas sólidos, integraciones Microsoft o backend enterprise con soporte a largo plazo',
    useCases: ['APIs empresariales', 'Sistemas internos', 'Integraciones Microsoft', 'Aplicaciones de alto rendimiento'],
    businessBenefits: ['Ecosistema empresarial maduro', 'Alto rendimiento', 'Buen soporte corporativo', 'Ideal para integraciones Microsoft'],
    vorantheusCases: ['Backends empresariales', 'Integraciones con sistemas Microsoft', 'APIs para operación interna'],
  }),
  createTechnology({
    name: 'PHP',
    slug: 'php',
    tagline: 'Lenguaje web maduro para sitios, CMS y sistemas comerciales.',
    summary:
      'PHP es un lenguaje ampliamente usado en la web, especialmente en WordPress, WooCommerce, Laravel y sistemas empresariales existentes.',
    bestFor: 'un proyecto trabaja con CMS, e-commerce o sistemas existentes basados en PHP',
    useCases: ['WordPress y WooCommerce', 'Aplicaciones Laravel', 'APIs web', 'Mantenimiento de sistemas existentes'],
    businessBenefits: ['Amplia disponibilidad de talento', 'Ecosistema maduro', 'Buena opción para CMS y e-commerce', 'Mantenimiento accesible'],
    vorantheusCases: ['Mejoras en sitios WordPress', 'Tiendas WooCommerce', 'Sistemas Laravel'],
  }),
  createTechnology({
    name: 'Cypress',
    slug: 'cypress',
    tagline: 'Pruebas end-to-end para validar experiencias web críticas.',
    summary:
      'Cypress es una herramienta de testing para automatizar flujos web, validar formularios, revisar interacciones y reducir regresiones.',
    bestFor: 'una página o aplicación necesita verificar flujos importantes antes de publicar cambios',
    useCases: ['Pruebas de formularios', 'Flujos de compra', 'Regresión visual funcional', 'Validación de páginas críticas'],
    businessBenefits: ['Menos errores en producción', 'Mayor confianza al publicar', 'Flujos comerciales protegidos', 'QA más eficiente'],
    vorantheusCases: ['Pruebas de cotización', 'Validación de checkouts', 'Automatización de flujos clave'],
  }),
  createTechnology({
    name: 'Jest',
    slug: 'jest',
    tagline: 'Pruebas unitarias confiables para JavaScript y TypeScript.',
    summary:
      'Jest es un framework de pruebas para validar funciones, componentes y lógica de negocio en proyectos JavaScript y TypeScript.',
    bestFor: 'un proyecto necesita probar lógica crítica y evitar regresiones durante mantenimiento',
    useCases: ['Pruebas unitarias', 'Pruebas de componentes', 'Validación de utilidades', 'Cobertura de lógica de negocio'],
    businessBenefits: ['Mayor estabilidad del código', 'Cambios más seguros', 'Menos errores repetidos', 'Mantenimiento más confiable'],
    vorantheusCases: ['Pruebas de lógica de cotización', 'Validación de helpers', 'Cobertura de componentes críticos'],
  }),
  createTechnology({
    name: 'Vitest',
    slug: 'vitest',
    tagline: 'Testing moderno y rápido para proyectos Vite y TypeScript.',
    summary:
      'Vitest es un framework de pruebas rápido compatible con el ecosistema moderno de frontend, ideal para unit tests y lógica TypeScript.',
    bestFor: 'un proyecto necesita pruebas veloces, modernas y fáciles de integrar con herramientas actuales',
    useCases: ['Pruebas unitarias rápidas', 'Testing de utilidades', 'Validación de componentes', 'CI para proyectos frontend'],
    businessBenefits: ['Ejecución rápida de pruebas', 'Mejor feedback para desarrollo', 'Menos fricción en CI', 'Compatible con TypeScript moderno'],
    vorantheusCases: ['Pruebas de utilidades frontend', 'Validación de lógica de UI', 'Pipelines de calidad en proyectos modernos'],
  }),
]

export function getTechnology(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug)
}
