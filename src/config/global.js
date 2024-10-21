export default {
  global: {
    componenteFormativo:
      'Importancia de la nutrición durante la vida para evitar enfermedades',
    descripcionCurso:
      'El cuerpo humano necesita nutrientes como carbohidratos, vitaminas y minerales para funcionar adecuadamente. La falta o el exceso de estos nutrientes puede causar desbalances nutricionales y enfermedades. Este material examina las principales enfermedades alimenticias y ofrece recomendaciones para prevenirlas mediante una dieta equilibrada y actividad física. Se destaca cómo la nutrición influye en el crecimiento, el rendimiento y la salud en general, y se resalta el creciente interés por una alimentación saludable.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
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
        titulo: 'Enfermedades causadas por la inadecuada alimentación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Aspectos fundamentales para evitar enfermedades por malnutrición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Importancia de la nutrición durante la vida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La alimentación en cada etapa de la vida',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Concejo de alimentación para prevenir enfermedades.',
      referencia: 'Ecosistema recursos SENA [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/1gQgdQHYYDU?si=P6Nap2toNJ5JAjO1',
    },
  ],

  glosario: [
    {
      termino: 'Absorción:',
      significado:
        'es el proceso por el cual los nutrientes se mueven desde el lumen intestinal hasta la sangre, dando como resultado la absorción de nutrientes en el organismo.',
    },
    {
      termino: 'Absorción:',
      significado:
        'es el proceso por el cual los nutrientes se mueven desde el lumen intestinal hasta la sangre, dando como resultado la absorción de nutrientes en el organismo.',
    },
    {
      termino: 'Amilasa:',
      significado:
        'es una enzima hidrolasa que se produce en las gandulas salivares y que tiene la capacidad de sintetizar el almidón para volverlo más simple.',
    },
    {
      termino: 'Absorción:',
      significado:
        'es el proceso por el cual los nutrientes se mueven desde el lumen intestinal hasta la sangre, dando como resultado la absorción de nutrientes en el organismo.',
    },
    {
      termino: 'Cáncer:',
      significado:
        'es una enfermedad que se caracteriza por la presencia de células anormales en cuerpo, las cuales crecen y se multiplican de manera descontrolada.',
    },
    {
      termino: 'Cáncer:',
      significado:
        'es una enfermedad que se caracteriza por la presencia de células anormales en cuerpo, las cuales crecen y se multiplican de manera descontrolada.',
    },
    {
      termino: 'Cerebrósidos:',
      significado:
        'es una enfermedad que se caracteriza por la presencia de células anormales en cuerpo, las cuales crecen y se multiplican de manera descontrolada.',
    },
    {
      termino: 'Digestión:',
      significado:
        'es un proceso que comprende procesos mecánicos y químicos por medio de los cuales los materiales alimenticios complejos son hidrolizados a formas adecuadas, para poder ser absorbidos por la pared de la mucosa y así ser utilizados por el organismo',
    },
    {
      termino: 'Disacáridos:',
      significado:
        'están formados por dos monosacáridos y son los azucares más abundantes de los alimentos, los más conocidos son la sacarosa, lactosa y maltosa.',
    },
    {
      termino: 'Enzimas:',
      significado:
        'son catalizadores orgánicos de naturaleza proteica que aumentan considerablemente la velocidad de las reacciones.',
    },
    {
      termino: 'Fibra:',
      significado:
        'se encuentra y origina en las paredes celulares de los vegetales, los componentes más conocidos son la celulosa, hemicelulosa, pectinas y lignina.',
    },
    {
      termino: 'Glicoproteínas:',
      significado:
        'es una proteína que esta unidad a monosacáridos y por lo general tienen mayor número de proteínas.',
    },
    {
      termino: 'Glucolípidos:',
      significado:
        'están compuesta de esfingolípidos que es la ceramida más ácida graso, hacen parte de capa lipídica de membrana celular, los glúcidos que los conforman pueden ser galactosa, fructosa, glucosa y manosa.',
    },
    {
      termino: 'Hidratos de carbono:',
      significado:
        'los hidratos de carbono o glúcidos son moléculas de carbono, hidrógeno y oxígeno cuya fórmula es (CH2O)n, se clasifican en azúcares simples llamados monosacáridos, disacáridos y polisacáridos.',
    },
    {
      termino: 'Lípidos',
      significado:
        'están constituidos por fosfolípidos y colesterol; la función más relevante de estos compuestos es proporcionar energía al metabolismo y dar elementos estructurales a la membrana celular.',
    },
    {
      termino: 'Metabolismo:',
      significado:
        'hace referencia a un sinnúmero de reacciones bioquímicas y fisicoquímicas que ocurren en las células y en el organismo. Metabolismo basal (TMB): Hace referencia a la cantidad mínima de energía que el organismo requiere para que el cuerpo se mantenga despierto o en reposo y de esta manera cumplir todas sus actividades vitales como respiración, presión arterial, latidos del corazón, entre otros.',
    },
    {
      termino: 'Minerales:',
      significado:
        'son sustancias naturales compuestas por moléculas formadas por átomos de uno o más elementos químicos',
    },
    {
      termino: 'Monosacáridos:',
      significado:
        'Son azucares simples compuestos de tres a siete átomos de carbono, en este grupo se encuentra la glucosa y la fructosa.',
    },
    {
      termino: 'Mucina:',
      significado: 'es una proteína que tiene la capacidad de formar geles.',
    },
    {
      termino: 'Nutrición:',
      significado:
        'ciencia que estudia las relaciones entre los nutrientes y el organismo humano a nivel individual y colectivo, en diferentes situaciones fisiológicas y patológicas.',
    },
    {
      termino: 'Nutrientes:',
      significado:
        'son compuestos que se encuentran en los alimentos como proteínas, lípidos, glúcidos, minerales y vitaminas; que deben ser suministrados al cuerpo en cantidades adecuadas.',
    },
    {
      termino: 'Pepsina:',
      significado:
        'es una enzima que hidroliza las proteínas y se encuentra en el estómago.',
    },
    {
      termino: 'Mucina:',
      significado: 'es una proteína que tiene la capacidad de formar geles.',
    },
    {
      termino: 'Pepsinógeno:',
      significado: 'es una proenzima que se encuentra en el estómago.',
    },
    {
      termino: 'Polisacáridos:',
      significado:
        'están formados por moléculas de diez o más monosacáridos, se descomponen en moléculas más pequeñas por hidrólisis en el organismo de los seres humanos y tienen la función de mantener reservas de energía.',
    },
    {
      termino: 'Proteínas:',
      significado:
        'son sustancias orgánicas que contienen en general una base de elementos químicos como el carbono, el hidrógeno, el oxígeno y nitrógeno, están formadas por cadenas lineales de aminoácidos los cuales están encadenados a enlaces peptídicos que se forman en el grupo carboxilo de un aminoácido.',
    },
    {
      termino: 'Proteoglicanos:',
      significado:
        'es una glicoproteína que está unida a un tipo especial de polisacáridos. Triglicéridos: Son grasas naturales de baja densidad, lo cual les da la característica de almacenar energía en el tejido adiposo.',
    },
    {
      termino: 'Vitaminas:',
      significado:
        'compuestos orgánicos que el hombre necesita en dosis bajas para que el cuerpo se desarrolle adecuadamente, es necesario ingerirlas pues el organismo no tiene la capacidad de producirlas',
    },
  ],
  referencias: [
    {
      referencia:
        'Catherine Shaffer, M. (6 de Noviembre de 2016). <em>News Medical Life Sc iences.</em>',
      link:
        'http://www.news-medical.net/health/Types-of-Vitamin-B-(Spanish).aspx ',
    },
    {
      referencia: 'Centro Médico <em>Teknon.</em> (2016).',
      link:
        'http://www.teknon.es/es/especialidades/nogues-boqueras-raquel/nutricion-clinica.',
    },
    {
      referencia:
        'Corine, H. (182). Fundamentos de Nutrición. México: Continental.',
    },
    {
      referencia:
        'Elsevier. (2013). Nutrición comunicaría. España: <em>MASSON.</em>',
    },
    {
      referencia:
        'Fotolia. <em>Group of multiethnic hands holding world nutrition.</em>',
    },
    {
      referencia:
        'Fotolia. (2004). <em>Nutrition facts label hanging on a rope.</em> Vector.',
      link: 'http://co.fotolia.com/id/64693571',
    },
    {
      referencia:
        'Fotolia. (2004). <em>Silhouette junges Mannes mit Magen-Darm-Trakt.</em> Vector.',
      link: 'http://co.fotolia.com/id/39992078',
    },
    {
      referencia:
        'Hernández, D. R. (20 de Enero de 2015). Medicina Preventiva Santa Fe.M. y. (1999). Tratado de Nutrición. Madrid, España: Diaz de Santos SA',
      link:
        'http://medicinapreventiva.info/generalidades/10231/conozca-el-papel-fundamental-de-las-proteinas-para-la-salud-por-linternista/ ',
    },
    {
      referencia:
        '(2013). Manual de Nutrición y Dietetica. En A. Carbajal Azcona. Marid.',
      link:
        'http://eprints.ucm.es/22755/1/Manual-nutricion-dietetica-CARBAJAL.pdf',
    },
    {
      referencia:
        'Mataiz, J. (2002). Nutrición y Alimentación. Madrid, España: Océano.',
    },
    {
      referencia:
        'Nutrición deportiva. (s.f.). Servicio de nutrición. Pamplona, Navarra, España',
      link: 'http://www.podiumns.com/es/servicios/nutricion-deportiva/.',
    },
    {
      referencia:
        'Rodriguez, V. y. (2008). Bases de la Alimentación Humana. La Coruña, España: <em>Gesbiblo.</em>',
    },
    {
      referencia:
        'UNED. Facultad de Ciencias. Nutrición y Dietética. (2017). Guía de Alimentación y Salud. Obtenido del valor energético de los alimentos: Las necesidades energéticas del ser humano:',
      link:
        'http://www2.uned.es/pea-nutricion-y-dietetica-I/guia/guia_nutricion/valor_necesidades.htm',
    },
    {
      referencia:
        'Vasquez, C. c. (2005). Alimentación y Nutrición: Manual teórico Práctico. Madrid, España: Ediciones Diaz de Santos SA',
    },
  ],

  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Cristina Muñoz Urrea',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Yuri Alexandra Baez',
          cargo: 'Asesora pedagógica',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },

        {
          nombre: 'Luis Guillermo Roberto baez',
          cargo: 'Diseñadores gráficos',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Zulma rocio bravo Jiménez',
          cargo: 'Diseñadores gráficos',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },

        {
          nombre: 'Hector salina castellanos',
          cargo: 'Guionista del equipo',
          centro: 'Centro Agroindustrial - Regional Quindío.',
        },
        {
          nombre: 'Zulma Yurany viancha rodriguez',
          cargo: 'Líder del del Equipo ',
          centro: 'Centro Agroindustrial - Regional Quindío.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Hernando Junior Strusberg Perez',
          cargo: 'Diseño web',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollor <em> full stack</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },

        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
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
