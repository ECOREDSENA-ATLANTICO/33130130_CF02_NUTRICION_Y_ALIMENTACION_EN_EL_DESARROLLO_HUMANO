<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.fnd-act
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La Alimentación en cada etapa de la vida

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En esta parte del componente se describe la importancia de una dieta equilibrada y las necesidades nutricionales en las diferentes etapas de la vida. Además, se muestra la pirámide de los alimentos que es la base nutricional del ser humano. El material de estudio permite comprender los aspectos relacionados con la actividad de aprendizaje a desarrollar, esto con el fin de que el aprendiz pueda realizar las actividades de la mejor manera.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10        
        .row.justify-content-center.align-items-center                  
          .col-lg-6
            .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
              .col-auto.pe-2
                figure
                  img(src='@/assets/curso/temas/tema2/img-4.svg')
              .col-auto.px-0
                h3.mb-0 La infancia (0-2 años)
            p Parte de esta etapa es la lactancia, el cual es el proceso mediante el cual se produce una secreción nutritiva (leche) adaptada al crecimiento y desarrollo del recién nacido. Contiene todos los nutrientes indispensables para satisfacer las necesidades del recién nacido durante los primeros meses de vida.
          .col-lg-6.fnd-7-1
            .row.justify-content-center.align-items-center
              .col-xl-7.col-md-8.mb-4
                h5 Composición de la leche materna 
                p Producción:
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 750 ml/día (primer semestre).
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 640Kcal/día.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 600 ml/día (segundo semestre).
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 510Kcal/día.
              .col-xl-5.col-md-4.col-lg-4
                figure
                  img.img-s(src="@/assets/curso/temas/tema4/img-2.svg")


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Composición de la leche materna
        figure
          img(src='@/assets/curso/temas/tema4/img-3.png', alt='La composición de la leche materna, está compuesta por varios nutrientes, tales como: enzimas, calostro, secreción láctea; funciones inmunológicas y de defensa, bifidogénico, de crecimiento y de desarrollo.')                 
        figcaption Nota. SENA

    .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 6. 
            span Composición de la leche materna        
          .tabla-b.color-acento-contenido.mb-5.tbl5
            table
              caption Fuente: SENA
              thead
                tr
                  td(colspan="5") Valor energético
              tbody
                tr
                  td.tt(colspan="5") Macronutrientes (% de energías)
                tr.ttt
                  td Leche
                  td Kcal/10ml
                  td Grasa
                  td Glúcidos
                  td Proteínas
                tr
                  td Humana
                  td 70
                  td 57
                  td 38
                  td 5
                tr
                  td Bovina
                  td 70
                  td 47
                  td 33
                  td 20

    .row.justify-content-center.d-flex.mb-5
      .col-lg-6.fnd--1.fnd-
        .row.justify-content-center.align-items-center
          .col-xl-6
            p <b>Ingestas recomendadas en la mujer lactante.</b> Costo energético: 85 Kcal por cada 100 ml.
            p <b>Proteínas:</b> ingesta extra recomendada.
            p <b>Vitaminas y minerales:</b> se recomienda aumentar cantidades de todas las vitaminas menos (K) y minerales Ca, Fe y I.
            p <b>Ejemplo:</b> Se debe suministrar más de 700 mg/día de calcio.

          .col-xl-6.col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-4.png')
      .col-lg-6.fnd--2.fnd-
        .row.justify-content-center.align-items-center
          .col-xl-6
            p.mb-3 <b>Recomendaciones generales de tipo alimentario.</b> <br>Seguir una dieta variada y equilibrada incluyendo alimentos de todos los grupos, especialmente:
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Lácteos.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Alimentos proteicos.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Frutas y verduras.
            .row.pe-lg-3.justify-content-center.mb-4
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Asegurar un buen aporte hídrico.
            p Restringir la ingestión de alcohol y evitar el consumo de bebidas estimulantes (café, té, refrescos con cafeína, etc).
            
          .col-xl-6.col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-5.png')

    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-0 Niñez (2-11 años)
    p.mb-4 Los niños son el grupo de seres humanos más vulnerables en cuanto a la nutrición; son los más propensos a sufrir problemas de desnutrición y desarrollar enfermedades crónicas. Por esto es importante una adecuada nutrición en las diferentes etapas de crecimiento.

    .row.justify-content-center.d-flex.mb-5
      .col-lg-6.fnd--3.fnd-
        .row.justify-content-center.d-flex
          .col-xl-6
            p.mb-0 <b>Desarrollo físico</b>  
            p Los niños continúan ganando peso y altura, pero más lentamente de lo que lo hicieron durante los primeros dos años de vida. El desarrollo del cerebro también está en marcha; en el momento enque un niño llega a la edad de tres años, el cerebro habrá alcanzado aproximadamente el 75% del peso que tendrá en la edad adulta. En este período realizan actividades como saltar y andar en puntillas, además se presenta un desarrollo cognitivo y social.

          .col-xl-6
            figure
              img.img-298(src='@/assets/curso/temas/tema4/img-6.png')
      .col-lg-6.fnd--4.fnd-
        .row.justify-content-center.d-flex
          .col-xl-6
            p.mb-0 <b>Crecimiento:</b> talla y peso.
            p.mb-4 En el desarrollo físico de los infantes se dan modificaciones en forma y composición corporales que varían de acuerdo con el crecimiento y el sexo de cada individuo.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 <b>Peso:</b> 2,5 a 3,5 kg/año.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 <b>Talla:</b> 5 a 6 cm/año.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-4 <b>Dentición:</b> Entre los 6 y 12 años aparecen los dientes permanentes.
            
          .col-xl-6
            figure
              img.img-298(src='@/assets/curso/temas/tema4/img-7.png')
          
    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
      .col-lg-4.col-md-6.mb-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/img-8.png")
      .col-lg-8
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h5.mb-3 Energía
            p.mb-0 Todos los nutrientes aportan calorías, esenciales para actividades como correr, practicar deportes y estudiar. En la infancia, es crucial potenciar esa energía para evitar el sedentarismo en la adolescencia. 
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h5.mb-3 Proteínas
            p.mb-0 Las proteínas son cruciales en los procesos metabólicos y aportan aminoácidos esenciales que el organismo no puede producir. En los niños, el recambio de proteínas es elevado debido a su crecimiento constante.  
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h5.mb-3 Carbohidratos
            p.mb-0 Los hidratos de carbono son la principal fuente de energía del cuerpo. A pesar de su mala reputación relacionada con la obesidad, son esenciales en una dieta saludable para niños y adultos.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            h5.mb-3 Fibra
            p.mb-0 La fibra es muy importante en los niños porque ayuda a controlar la digestión y a remover las grasas saturadas y el colesterol malo, que es el causante de molestias en la salud. También sirve para prevenir la obesidad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .nutrition-box.nn1.bck-1
          .cont
            p.mb-0 <b>Por Ejemplo:</b> Para un niño de 7 años la cantidad de fibra diaria es: 7 + 5 = 12 g/día. Se permite una ingesta máxima de 35 gramos de fibra al día.
          img.pepper(src="@/assets/curso/temas/tema4/img-9.png")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 7. 
          span Pautas alimenticias en la infancia           
        figure
          img(src='@/assets/curso/temas/tema4/img-10.png', alt='Las pautas alimenticias en la infancia, son importantes por que consolidan los hábitos alimenticios, estilo de vida saludable, previenen enfermedades infantiles y enfermedades a futuro.')                 
        figcaption.mb-5 Nota. SENA

        .row.justify-content-center.align-items-center(data-aos="zoom-in")
          .col-xl-3.col-md-6.col-lg-6
            .crd_02.mb-5.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Alimentación diversificada.
                  
          .col-xl-3.col-md-6.col-lg-6
            .crd_02.mb-5.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Distribución y horarios regulares de comidas.
                  
          .col-xl-3.col-md-6.col-lg-6
            .crd_02.mb-5.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Selección de alimentos.
          .col-xl-3.col-md-6.col-lg-6
            .crd_02.mb-5.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Dieta variada en platos, olores, colores, sabores, texturas y consistencia.


    .row.justify-content-center.align-items-center.mb-5.fnd-6(data-aos="fade-left")
      .col-lg-5.col-md-6.p-0
        figure
          img(src='@/assets/curso/temas/tema4/img-12.png') 
      .col-lg-7.px-4.py-4
        p.mb-0 <b>Distribución de comidas</b>
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 <b>Desayuno:</b> Se debe incluir leche u otro lácteo, cereales o tostadas, un pequeño sándwich y jugo de frutas.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 <b>Almuerzo:</b> Es la comida más importante del día.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p <b>Dieta variada de platos,</b> teniendo en cuenta olores, sabores, texturas y consistencia.
        p.mb-0 <b>Errores alimentarios para evitar:</b>
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Dietas monótonas.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Desayuno insuficiente o no desayunar. 

    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-3 Adolescencia (12- 20 años)
    p La adolescencia se puede considerar la fase de transición de la niñez a la edad adulta. Sin embargo, los cambios físicos y psicológicos que se producen en la adolescencia pueden comenzar antes o durante la preadolescencia en edades de 9 a 12 años. La adolescencia puede ser una etapa de desorientación y descubrimiento; el período de transición puede hacer referencia a cuestiones de independencia e identidad propia.
    p.mb-4 En los últimos años se ha observado en las poblaciones más jóvenes un consumo excesivo de dietas hipercalóricas, es decir, un alto consumo de glúcidos y grasas sumado al sedentarismo característico de las ciudades, lo cual puede generar problemas de sobrepeso y obesidad.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-xl-10
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-6
            figure.mb-4
              img(src='@/assets/curso/temas/tema4/img-13.png')   
          .col-lg-9.mb-5
            .titulo-sexto.color-acento-contenido
              h5 Tabla 7. 
              span Cambios físicos y metabólicos en la adolescencia
            .tabla-b.color-acento-contenido.tbl6
              table
                caption Fuente: SENA
                thead
                  tr
                    th Hombres
                    th Mujeres
                tbody
                  tr
                    td Estructura de los genitales
                    td Estructura de los genitales
                  tr
                    td Vello corporal
                    td Desarrollo de las mamas
                  tr
                    td Mucosa laríngea (cambio de voz)
                    td Vello corporal
                  tr
                    td Piel (grosor)
                    td Glándulas sebáceas
                  tr
                    td Glándulas sebáceas
                    td Masa muscular
                  tr
                    td Masa muscular
                    td Crecimiento del esqueleto
                  tr
                    td Crecimiento del esqueleto
                    td Metabolismo proteico
                  tr
                    td Metabolismo proteico
                    td Metabolismo lipídico

    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-3
        h3.mb-0.fnd-2-1.fnd-2 Cambios psicológicos en la adolescencia
    .row.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-lg-7
        p Es una etapa de grandes contradicciones, pensamientos radicales y conflictividad, donde se presentan los siguientes comportamientos.
        .row.align-items-center.mb-5
          .col-md-6.col-lg-6
            .crd_02.mb-2.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Adquisición de independencia.
          .col-md-6.col-lg-6
            .crd_02.mb-2.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Desarrollo de la personalidad.
          .col-md-6.col-lg-6
            .crd_02.mb-2.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Búsqueda de la propia identidad.
          .col-md-6.col-lg-6
            .crd_02.mb-2.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Desarrollo intelectual.
          .col-md-6.col-lg-6
            .crd_02.mb-2.crd_02-2
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg")          
                .crd_02__txt
                  p.mb-1 Madurez y maduración sexual.
      .col-lg-5.col-md-8
        figure.mb-4
          img(src='@/assets/curso/temas/tema4/img-14.png')


    .row.justify-content-center.align-items-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8. 
          span Necesidades de energía y nutrientes
        .tabla-b.color-acento-contenido.tbl7.mb-5
          table
            caption Fuente: SENA
            thead
              tr
                th.ttn(rowspan="2")
                th(colspan="2") <b>Energía</b>
                th(colspan="2") <b>Proteínas</b>
            tbody                
              tr
                td.ttn
                td Edad (años)
                td Kcal/día
                td Edad (años)
                td g/día

              tr
                td <b>Hombres</b>
                td 11-14 <br> 15-19
                td 2.500 <br> 3.000
                td 11-14 <br>15-19
                td 44 <br> 56
              tr
                td <b>Mujeres</b>
                td 11-14 <br> 15-19
                td 2.200 <br> 2.200
                td 11-14 <br> 15-19
                td 43 <br> 45
              tr
                td(colspan="5") <b>Lípidos:</b> 30 % a 35 %, debe hacer un equilibrio entre ácidos grasos saturados, monoinsaturados y poliinsaturados.
              tr
                td(colspan="5") <b>Carbohidratos:</b> 55 % a 66 %, preferiblemente hidratos de carbono complejos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-10
        .row.justify-content-center.align-items-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Tabla 9. 
              span Recomendaciones de alimentación saludable
            .tabla-b.color-acento-contenido.tbl6.mb-4
              table
                caption Fuente: SENA
                thead
                  tr
                    th Consumo diario
                    th Consumo semanal
                tbody
                  tr
                    td Leche, yogurt y queso: 2 a 4 raciones
                    td Pescados: 3 a 4 raciones
                  tr
                    td Aceite de oliva: 2 a 4 raciones
                    td Carnes magras: 3 a 4 porciones
                  tr
                    td Verduras y hortalizas: 2 raciones
                    td Huevos: 3 a 4 raciones
                  tr
                    td Frutas: 3 raciones
                    td Legumbre: 2 a 4 raciones
                  tr
                    td Pan, cereales integrales, arroz y pasta 4 a 6 porciones
                    td Frutos secos: 3 a 7 raciones
                  tr
                    td Papas: 4 a 6 raciones
                    td
                  tr
                    td Agua: 6 a 8 raciones
                    td
                  tr
                    td
                    td
          .col-lg-4.col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/img-15.png')

    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-3
        h3.mb-0.fnd-2-1.fnd-2 Situaciones de riesgo nutricional
    .row.justify-content-center.align-items-center.mb-5.fnd-8-3
      .col-lg-3.col-md-6
        figure.mb-4
          img(src='@/assets/curso/temas/tema4/img-16.png')
      .col-lg-9
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Hábitos dietéticos inadecuados: No desayunar, saltar comidas, picar entre comidas y abuso de las comidas de preparación fácil.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Consumo de tabaco y alcohol: El consumo de tabaco repercute en el aprovechamiento de vitaminas C, E y ácido fólico. El alcohol interviene en la absorción y aprovechamiento de vitaminas y minerales, importante fuente de calorías vacías y disminuye el apetito.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Alimentación y deporte: Este concepto tiene que ver con las prácticas de deportes de alto rendimiento como ballet, atletismo, gimnasia rítmica, entre otros.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Embarazo durante la adolescencia: Representa un riesgo nutricional porque demanda suplir las necesidades de un adolescente más las necesidades del feto, la ganancia de peso es superior al de una mujer adulta (de 14 - 16 kg), por lo tanto, se debe evitar el consumo elevado de alimentos con valor nutricional muy alto y la ingesta de sustancias tóxicas.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Sobrepeso y obesidad: Tiene que ver con el sedentarismo, el consumo de grasas saturadas e hidratos de carbono simples y bebidas carbonatadas.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Trastornos de la conducta alimentaria: Anorexia nerviosa, bulimia nerviosa, entre otros.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Otros: Dietas no convencionales, alimentación durante los exámenes, entre otras.
    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-3 Adultez (30 - 60 años).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p A medida que el ser humano va pasando las diferentes etapas de la vida aumenta la posibilidad de padecer enfermedades de tipo crónico, por eso es necesaria una alimentación sana y que cubra todos los requerimientos nutricionales de la edad. La actividad física también es importante pues ayuda a mantener el cuerpo saludable. 
        p <b>Cambios físicos y metabólicos:</b> Se caracteriza por el cierre de la glándula epífisis y la detención del crecimiento, en esta etapa se suele producir la integración social en circunstancias normales. Las mujeres pierden la capacidad reproductora entre los 45 y 50 años y el hombre va disminuyendo, aunque no de manera drástica.
      .col-md-8.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img-17.png')
    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-3
        h3.mb-0.fnd-2-1.fnd-2 Alimentación - Ingestas recomendadas.
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema4/img-18.png')

      .col-lg-8
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.fnd-4-
            h1 01
            p.mb-0.text-center Tener en cuenta el significado de comer bien, porque muchas personas confunden este término con comer mucho o comer alimentos caros.
          .tarjeta.tarjeta--slyder.p-4.fnd-4-
            h1 02
            p.mb-0.text-center La dieta se debe variar al máximo, donde se incluyan todos los grupos nutricionales como glúcidos, proteínas, lípidos, vitaminas y minerales.
          .tarjeta.tarjeta--slyder.p-4.fnd-4-
            h1 03
            p.mb-0.text-center Es importante en la edad adulta comer a horarios establecidos y no saltarse ninguna comida, haciendo énfasis en el desayuno pues es la comida más importante del día, ya que cubre el 25% de la energía total requerida.
          .tarjeta.tarjeta--slyder.p-4.fnd-4-
            h1 04
            p.mb-0.text-center Es importante que cuando se alimente se coma despacio y se mastique bien, evitando distracciones.
          .tarjeta.tarjeta--slyder.p-4.fnd-4-
            h1 05
            p.mb-0.text-center Evite el consumo de calorías en exceso, consuma las calorías según el gasto energético total.
          .tarjeta.tarjeta--slyder.p-4.fnd-4-
            h1 06
            p.mb-0.text-center Tomar en pocas cantidades hamburgueses, pizzas, repostería, entre otros. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10. 
          span Alimentación - Ingestas recomendadas.
        .tabla-b.color-acento-contenido.tbl5-
          table
            caption Fuente: Sena
            thead
              tr
                th Persona sana
                th Necesidades energética Kcal
                th Variaciones
            tbody
              tr
                td Hombre
                td 2.700
                td 2.300-3.100
              tr
                td Mujer
                td 2.000
                td 1.600-2.400

    .row.justify-content-center.align-items-center.mb-5.fnd-8.p-lg-5.p-md-3(data-aos="zoom-in")
      .col-lg-12.fnd-8-1.p-lg-5.p-md-3
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-xl-9.mb-4.px-4
              h5 Recomendaciones alimentarias.
              .row.pe-lg-3.justify-content-center
                .col-auto.pe-2.mt-2
                  img(src="@/assets/curso/temas/tema1/check.svg")
                .col.px-0
                  p.mb-0 Comer frutas, verduras, legumbres (por ejemplo, lentejas, judías), frutos secos y cereales integrales (por ejemplo, maíz, mijo, avena, trigo o arroz integral no procesados).
              .row.pe-lg-3.justify-content-center
                .col-auto.pe-2.mt-2
                  img(src="@/assets/curso/temas/tema1/check.svg")
                .col.px-0
                  p.mb-0 Al menos 400 g (5 porciones) de frutas y hortalizas al día (2). Las patatas (papas), batatas (camote, boniato), la mandioca (yuca) y otros tubérculos feculentos no se consideran como frutas ni hortalizas.
              .row.pe-lg-3.justify-content-center
                .col-auto.pe-2.mt-2
                  img(src="@/assets/curso/temas/tema1/check.svg")
                .col.px-0
                  p.mb-0 Limitar el consumo de azúcares libres a menos del 10% de la ingesta calórica total (2, 5), que equivale a 50 gramos (o unas 12 cucharaditas rasas) en el caso de una persona con un peso saludable que consuma aproximadamente 2.000 calorías al día, si bien para obtener mayores beneficios, se recomienda idealmente reducir su consumo a menos del 5% de la ingesta calórica total cinco (5). Son los fabricantes, los cocineros o el propio consumidor quienes añaden a los alimentos la mayor parte de los azúcares libres. El azúcar libre también puede estar presente en el azúcar natural de la miel, los jarabes, y los zumos concentrados de frutas.

            .col-xl-3.col-md-4
              figure
                img(src='@/assets/curso/temas/tema4/img-19.png')

          .row.justify-content-center.align-items-center
            .col-xl-9.mb-4.px-4
              h5 Recomendaciones alimentarias.
              .row.pe-lg-3.justify-content-center
                .col-auto.pe-2.mt-2
                  img(src="@/assets/curso/temas/tema1/check.svg")
                .col.px-0
                  p.mb-0 Disminuir el consumo de grasa (1, 2, 3) al 30% de la ingesta calórica diaria. Las grasas no saturadas (presentes, por ejemplo, en el aceite de pescado, los aguacates, los frutos secos, o el aceite de girasol, canola y oliva) son preferibles a las grasas saturadas (presentes, por ejemplo, en la carne grasa, la mantequilla, el aceite de palma y de coco, la nata, el queso, el ghee y la manteca de cerdo) (3). Las grasas industriales de tipo trans (presentes en los alimentos procesados, la comida rápida, los aperitivos, los alimentos fritos, las pizzas congeladas, los pasteles, las galletas, las margarinas y las pastas para untar) no forman parte de una dieta sana.            
              .row.pe-lg-3.justify-content-center
                .col-auto.pe-2.mt-2
                  img(src="@/assets/curso/temas/tema1/check.svg")
                .col.px-0
                  p.mb-0 Reducir el consumo de sal a menos de 5 gramos al día (aproximadamente una cucharadita de café) (6) y consumir sal yodada.
            .col-xl-3.col-md-4
              figure
                img(src='@/assets/curso/temas/tema4/img-20.png')

    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-3
        h3.mb-0.fnd-2-1.fnd-2 Ejercicio físico genera beneficios sobre la salud.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p Los beneficios del ejercicio y la actividad física están bien documentados; la actividad física tiene la capacidad de regular y reducir el riesgo de varias enfermedades crónicas importantes, así como promover la calidad de vida y una sensación de bienestar.
        p Estudios realizados han establecido que la actividad física mejora el estado de ánimo de las personas y en muchos casos ayuda a que se tenga una mejor disposición porque ayuda a generar endorfinas. Además, el deporte físico contribuye a mantener una buena relación con las personas del entorno, y otras como:

        .row.justify-content-center.d-flex.fnd-5.mb-4
          .col-lg-6
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Reducción en el riesgo de desarrollar enfermedades cardíacas, isquemia y otras enfermedades cardiovasculares.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Reducción en el riesgo de desarrollar obesidad y diabetes.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Control de la hipertensión arterial y reducción en el riesgo de desarrollarla.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Reducción en el riesgo de cáncer de mama y cáncer de colon.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Ayuda en el control del peso corporal, la imagen corporal, mejora la tonificación de los músculos, preserva o aumenta la masa muscular, fortalece los huesos y las articulaciones.
          .col-lg-6
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Aumenta la coordinación y las respuestas neuromotoras reduciendo el riesgo de caídas.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Mejora la actividad del sistema inmune.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Reduce la depresión y la ansiedad.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Promueve la integración y el bienestar social.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Aumentar la posibilidad de mejorar la salud.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Mantener la autoestima alta.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Bajar los niveles de estrés.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Mantener el peso adecuado.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0 Compartir con amigos y conocer nueva gente.
      .col-lg-3.col-md-6
        figure
          img(src='@/assets/curso/temas/tema4/img-21.png')

    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col.px-0.mt-3
        h3.mb-3 Alimentación en la vejez (60 años en adelante)
    p Cuando se envejece hay una serie de transformaciones físicas, metabólicas, mentales y funcionales, las cuales influyen en el comportamiento y la disminución de la capacidad de adaptación a los cambios del entorno, lo que genera un aumento de la vulnerabilidad y de la fragilidad. Este proceso es continuo e inevitable.

    p Envejecer no es una enfermedad sino un cambio a lo largo de la vida. En general, se considera que se inicia al finalizar la fase de crecimiento y madurez de los individuos, entonces se considera anciano a toda persona mayor de 65 años que es la edad de jubilación en la mayoría de los países.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11. 
          span Cambios en el organismo asociados al envejecimiento
        .tabla-b.color-acento-contenido.tbl5-
          table
            caption Fuente: Sena
            thead
              tr
                th 25 años
                th Componente corporal
                th 75 años
            tbody
              tr
                td 17%
                td Masa magra
                td 12%
              tr
                td 6%
                td Hueso
                td 5%
              tr
                td 42%
                td Agua extracelular
                td 33%

    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-4
        h3.mb-0.fnd-2-1.fnd-2 Causas de la desnutrición en las personas de edad avanzada.
    .row.justify-content-center.align-items-center.mb-5.fnd-8-2.p-lg-5.p-md-3(data-aos="fade-right")
        .col-lg-12.fnd-8-1.p-lg-5.p-md-3
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.px-3
              .col-lg-6.mb-4.mb-md-5
                h5 Cambios en la composición del metabolismo	
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Reducción de masa celular activa.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Disminución de la masa muscular (sarcopenia).
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Perdida de la masa ósea.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Aumento del tejido adiposo y modificación de su distribución.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Disminución del gasto energético (metabolismo basal) y en el gasto energético por actividad física.

              .col-lg-6.col-md-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-22.png') 
            .row.justify-content-center.align-items-center.px-3
              .col-lg-6.mb-4.mb-md-5
                h5 Cambios en el aparato digestivo.	
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Cavidad orofaríngea: reducción de: Piezas dentales (atención prótesis), esmalte dentario flujo salival, disminución en la amilasa salival, dificultad de la deglutacion (disfagia), reducción de las papilas gustativas.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Estomago: digestión mas lenta y atrofia de la mucosa gástrica.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Intestino: disminución de la actividad de las enzimas intestinales, hiposecreción pancreática, menor capacidad de absorción.

              .col-lg-6.col-md-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-23.png') 
            .row.justify-content-center.align-items-center.px-3
              .col-lg-6.mb-4.mb-md-5
                h5 Cambios sensoriales.	
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Cambio en el gusto.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Cambios en el olfato.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Deterioro visual.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Deterioro auditivo.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg") 
                  .col.px-0 Otros cambios: sistema nervioso, circulatorio, respiración, óseo - articular, renal, inmune, reproductor y endocrino.

              .col-lg-6.col-md-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-24.png') 
            .row.justify-content-center.align-items-center.px-3
              .col-lg-6.mb-4.mb-md-5
                h5 Cambios psicosociales.	
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0 Elevada frecuencia de alteraciones emocionales y estado depresivo: esfera social - esfera física.
              .col-lg-6.col-md-6
                figure
                  img(src='@/assets/curso/temas/tema4/img-25.png') 
        
        
        
    .row.justify-content-center.align-items-center.mb-5.fnd-6
      .col-lg-5.col-md-6.p-0        
        figure
          img(src='@/assets/curso/temas/tema4/img-26.png') 
      .col-lg-7.col-md-11.py-4
        p Pluripatología, polifarmacia y cambios ligados al envejecimiento (biológicos y psicosociales) pueden influir negativamente sobre:
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Ingesta de alimentos.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 La digestión y absorción de nutrientes.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 La utilización de nutrientes.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Disminución del apetito.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Dietas restrictivas (hiposódicas, hipolipemiantes, entre otras).
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Alteraciones bucales del gusto y el olfato.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Pérdida de la agudeza visual.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Trastornos de deglutación (disfagia).
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Alteraciones cognitivas.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Alteraciones afectivas.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema2/check.svg")
          .col.px-0
            p.mb-0 Dificultad para realizar las actividades diarias como comprar y preparar alimentos.



    .row.justify-content-center.align-items-center.mb-3.p-4.mb-5(data-aos="zoom-in")
      .col-lg-3.col-md-6.mb-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/img-27.png")
      .col-lg-9
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            figure.mb-4(data-aos="zoom-in")
              img.img-tar1(src="@/assets/curso/temas/tema4/img-28.svg")
            h5.mb-3 Energía.	
            p.mb-0 Las necesidades energéticas disminuyen por lo que es importante mantener un peso ideal.
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            h5.mb-3 Proteínas.	
            p.mb-0 • Masa magra disminuida respecto al adulto joven.
            p.mb-0 • Renovación de proteínas en un 20% a 30% menor que en la edad adulta.
            p.mb-0 • Relativa mala absorción de aminoácidos (menor asimilación proteica).
            p.mb-0 • Reserva disminuida de aminoácidos para síntesis proteica.
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            figure.mb-4(data-aos="zoom-in")
              img.img-tar1(src="@/assets/curso/temas/tema4/img-29.svg")
            h5.mb-3 Glúcidos.	
            p.mb-0 • 5% a 65% del valor energético total (VET).
            p.mb-0 • Ingesta dietética mínima de 130 g/día.
            p.mb-0 • Restricción de azúcares simples.
            p.mb-0 • Vigilar intolerancia a la lactosa.
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            figure.mb-4(data-aos="zoom-in")
              img.img-tar1(src="@/assets/curso/temas/tema4/img-30.svg")
            h5.mb-3 Fibra dietética	
            p.mb-0 • 20 a 30 gramos diarios de frutas y verduras.
            p.mb-0 • Combinar la fibra soluble con la liposoluble.
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            h5.mb-3.me-3 Grasas 
            p.mb-0 • Fuente de energía.
            p.mb-0 • Vehículo de vitaminas liposolubles.
            p.mb-0 • Aporte de ácidos grasos esenciales (linoleico y alfa- linolénico).
            p.mb-0 • Mejorar la palatabilidad de la dieta.
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            h5.mb-3 Vitaminas.	
            p.mb-0 Las vitaminas hidrosolubles a las que se les debe prestar atención son las siguientes: ácido fólico, vitamina B12, vitamina B6, vitamina C.
            p.mb-0 Las vitaminas liposolubles a las que se debe poner atención son las siguientes: Vitamina A, vitamina D, vitamina E.
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            figure.mb-4(data-aos="zoom-in")
              img.img-tar1(src="@/assets/curso/temas/tema4/img-31.svg")
            h5.mb-3 Minerales.	
            p.mb-0 El aporte de minerales puede verse comprometido por:
            p.mb-0 • Menor apetito.
            p.mb-0 • Dificultad de masticación.
            p.mb-0 • Alteraciones endocrinas, digestivas y renales.
            p.mb-0 • Interacción con fármacos.
          .tarjeta.tarjeta--slyder.p-4.fnd-44
            h5.mb-3 Agua.	
            p.mb-0 Es muy importante tener en cuenta el riesgo elevado de deshidratación:
            p.mb-0 • Disminución de sensación de sed.
            p.mb-0 • Reducción voluntaria de ingesta (incontinencia urinaria).
            p.mb-0 • Descenso del agua corporal total.
            p.mb-0 • Disminución de la capacidad de la concentración renal.
            p.mb-0 • Uso crónico de laxantes y diuréticos.


    .row.justify-content-center(data-aos="fade-right")
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-35.png")
          .crd_hover_txt--body
            h5.mb-5 Consejos favorables en la ingesta de agua:
            p.mb-0 • Tomar un mínimo de 6 a 8 vasos de agua al día.
            p.mb-0 • Beber entre comidas y justo antes de comer.
            p.mb-0 • Estimular la ingesta de agua asociada a actividades placenteras.
            p.mb-0 • Evitar bebidas azucaradas, alcohólicas y ricas en cafeína.
            p.mb-0 • Aumentar el consumo de infusiones, caldos desgrasados, zumos naturales y sorbetes.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-37.png")
          .crd_hover_txt--body
            h5.mb-5 Importancia del ejercicio físico.
            p.mb-0 • Mantenimiento de la composición corporal o menor tendencia al cambio.
            p.mb-0 • Mejoramiento de la capacidad anabólica general y de las capacidades funcionales circulatorias y respiratorias.
            p.mb-0 • Mejoramiento de la función óseo-muscular.
            p.mb-0 • Disminución de la probabilidad de deficiencia vitamínica y de minerales.
            p.mb-0 • Distracción y ocupación de tiempo libre, además mejora el estado de ánimo.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-32.png")
          .crd_hover_txt--body.mtt
            h5.mb-5 Recomendaciones actividad física en personas mayores.
            p.mb-0 • Ejercicio aeróbico (prevención y tratamiento de enfermedades crónicas): 30 minutos (diarios) en actividades como paseo a paso lento, natación, ejercicio en agua y bicicleta estática.
            p.mb-0 • Ejercicios para fortalecer los músculos, retrasan o impiden la sarcopenia e incrementan la densidad ósea: trabajo muscular con pesas y/o máquinas.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-34.png")
          .crd_hover_txt--body
            h5.mb-5.mtt Alimentación nutricional básica.
            p.mb-0 Pautas en la elaboración de la dieta:
            p.mb-0 • Fraccionar la dieta en 5 a 6 tomas diarias.
            p.mb-0 • La energía (volumen y densidad), se debe repetir las comidas que proporcionan este tipo de nutrientes.
            p.mb-0 • La dieta debe ser individualizada.
            p.mb-0 • Comidas sencillas y de fácil preparación.
            p.mb-0 • En casos de falta de apetito se deben concentrar los platos.
            p.mb-0 • Se pueden utilizar todas las técnicas culinarias.
            p.mb-0 • Resaltar la importancia de la hidratación.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img-33.png")
          .crd_hover_txt--body
            h5.mb-5.mtt Alimentación básica adaptada.
            p.mb-0 Preparados nutricionales destinados a adaptar la alimentación oral a las necesidades de las personas con dificultades para alimentarse correctamente con una alimentación tradicional:
            p.mb-0 • Tiene el aspecto del plato hecho en casa.
            p.mb-0 • Fáciles de masticar y deglutir.
            p.mb-0 • Alta densidad nutricional.
            p.mb-0 • Sencillos de preparar.
            p.mb-0 • Usar cantidades exactas de sal, azúcar y grasas.
            p.mb-0 • Sustituyen, combinan o enriquecen los platos hechos.
























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
