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
]

export function getTechnology(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug)
}
