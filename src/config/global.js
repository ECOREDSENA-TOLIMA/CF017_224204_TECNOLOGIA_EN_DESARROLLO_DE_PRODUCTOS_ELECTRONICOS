export default {
  global: {
    componenteFormativo:
      'Ejecución del mantenimiento de productos electrónicos',
    descripcionCurso:
      'En este componente formativo se abordan los aspectos relativos a la ejecución del mantenimiento de productos electrónicos, donde se expondrán desde los tipos de fallas típicas en un circuito electrónico hasta las generalidades del mantenimiento preventivo de un equipo nuevo que se pone en funcionamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      /*{
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },*/
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis de pruebas del circuito electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Codificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Relación causa - efecto',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Localización de fallas y diagnóstico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instructivos o diagramas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mantenimiento preventivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Rutinas de limpieza',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Aplicación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Recomendaciones de cuidado',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Relación causa - efecto',
      referencia:
        'OIT. (s.f.) <em>Análisis de causa raíz: el diagrama de espina de pescado.</em>',
      tipo: 'Sitio WEB',
      link:
        'https://managing-ils-reporting.itcilo.org/es/herramientas/analisis-de-causa-raiz-el-diagrama-de-espina-de-pescado',
    },
    {
      tema: 'Relación causa - efecto',
      referencia:
        'GEO Tutoriales. (2017). <em>Qué es el Diagrama de Ishikawa o Diagrama de Causa Efecto.</em> Gestión de operaciones. ',
      tipo: 'Sitio WEB',
      link:
        'https://www.gestiondeoperaciones.net/gestion-de-calidad/que-es-el-diagrama-de-ishikawa-o-diagrama-de-causa-efecto/',
    },
    {
      tema: 'Localización de fallas y diagnóstico',
      referencia:
        'Fidestec. (2018). <em>5 formas de detectar cortocircuitos en placas electrónicas.</em>',
      tipo: 'Sitio WEB',
      link:
        'https://fidestec.com/blog/5-formas-de-detectar-cortocircuitos-en-placas-electronicas/',
    },
    {
      tema: 'Localización de fallas y diagnóstico',
      referencia:
        'Soriano, S. (2016). <em>La Técnica de diagnóstico V-I. Actualizado en 2020.</em>',
      tipo: 'Sitio WEB',
      link:
        'https://www.thesergioscorner.com/post/2016/03/01/t%C3%A9cnica-de-diagn%C3%B3stico-vi',
    },
  ],
  glosario: [
    {
      termino: 'Prueba aislada',
      significado:
        'Pruebas aplicadas a circuitos electrónicos sin que sean energizadas.',
    },
    {
      termino: 'Impedancia',
      significado:
        'Es la oposición que presenta un componente o un circuito al paso de la corriente alterna. Esta puede presentar componentes resistivas, capacitivas o inductivas, o las tres.',
    },
    {
      termino: 'Capacitancias parásitas',
      significado:
        'Son capacitancias que se forman entre dos elementos que no hacen parte del circuito electrónico, por ejemplo, entre una capa de material contaminante y una parte del cobre las pistas de la tarjeta.',
    },
    {
      termino: 'Fuga',
      significado:
        'Pequeña cantidad de corriente que recorre un semiconductor en estado no polarizado o en polarización inversa.',
    },
  ],
  referencias: [
    {
      referencia:
        'FORUM. (2017). <em>DIY circuit test points, what do people use?.</em>',
      link:
        'https://forum.arduino.cc/t/diy-circuit-test-points-what-do-people-use/470436/2',
    },
    {
      referencia: 'NS Market (s.f). <em>ABI Elentronics.</em>',
      link: 'https://www.nsmarket.gr/en/index/manufacturers?row=190',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruíz',
          cargo: 'Experto Temático',
          centro:
            'Regional Distrito Capital - Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Sergio Augusto Ardila Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo:
            'Responsable equipo de Desarrollo Curricular Ecosistema de Recursos Educativos Digitales ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Viviana Esperanza Herrera Qiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Cristian Mauricio Otálora Clavijo',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
