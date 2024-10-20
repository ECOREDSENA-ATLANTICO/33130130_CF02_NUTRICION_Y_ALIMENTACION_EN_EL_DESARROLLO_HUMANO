<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
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
        p.mb-0 En esta actividad de aprendizaje se describe la importancia de una dieta equilibrada y las necesidades nutricionales en las diferentes etapas de la vida. Además, se muestra la pirámide de los alimentos que es la base nutricional del ser humano. El material de estudio permite comprender los aspectos relacionados con la actividad de aprendizaje a desarrollar, esto con el fin de que el aprendiz pueda realizar las actividades de la mejor manera.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10        
        .row.justify-content-center.align-items-center                  
          .col-lg-6
            .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
              .col-auto.pe-2
                figure
                  img(src='@/assets/curso/temas/tema2/img-4.svg')
              .col-auto.px-0
                h3.mb-0 La infancia (0-2 años)
            p Parte de esta etapa es la lactancia, el cual es el proceso mediante el cual se produce una secreción nutritiva (leche) adaptada al crecimiento y desarrollo del recién nacido. Contiene todos los nutrientes indispensables para satisfacer las necesidades del recién nacido durante los primeros meses de vida.
          .col-lg-6
            .row.justify-content-center.align-items-center
              .col-lg-6
                h5 Composición de la leche materna 
                p Producción:
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 750 ml/día (primer semestre)
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 640Kcal/día.
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 600 ml/día (segundo semestre)
                .row.pe-lg-3.justify-content-center
                  .col-auto.pe-2.mt-2
                    img(src="@/assets/curso/temas/tema1/check.svg")
                  .col.px-0
                    p.mb-0 510Kcal/día
              .col-lg-6
                figure
                  img(src="@/assets/curso/temas/tema4/img-2.svg")


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Composición de la leche materna
        figure
          img(src='@/assets/curso/temas/tema4/img-3.png')                 
        figcaption Nota. SENA

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 5. 
            span Composición de la leche materna        
        
    .row.justify-content-center.d-flex.mb-5
      .col-lg-6.fnd--1.fnd-
        .row.justify-content-center.d-flex
          .col-lg-6
            p <b>Ingestas recomendadas en la mujer lactante energía:</b> Costo energético: 85 Kcal por cada 100 ml.
            p <b>Proteínas:</b> ingesta extra recomendada.
            p <b>Vitaminas y minerales:</b> se recomienda aumentar cantidades de todas las vitaminas menos (K) y minerales Ca, Fe y I.
            p <b>Ejemplo:</b> Se debe suministrar más de 700 mg/día de calcio.

          .col-lg-6
            figure
              img.img-298(src='@/assets/curso/temas/tema4/img-4.png')
      .col-lg-6.fnd--2.fnd-
        .row.justify-content-center.d-flex
          .col-lg-6
            p.mb-3 <b>Recomendaciones generales de tipo alimentario.</b> Seguir una dieta variada y equilibrada incluyendo alimentos de todos los grupos, especialmente:
            p.mb-0 Lácteos.
            p.mb-0 Alimentos proteicos.
            p.mb-0 Frutas y verduras.
            p.mb-3 Asegurar un buen aporte hídrico.
            p Restringir la ingestión de alcohol y evitar el consumo de bebidas estimulantes (café, té, refrescos con cafeína, etc).
            
          .col-lg-6
            figure
              img.img-298(src='@/assets/curso/temas/tema4/img-5.png')

    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-0 Niñez (2-11 años)
        p Los niños son el grupo de seres humanos más vulnerables en cuanto a la nutrición; son los más propensos a sufrir problemas de desnutrición y desarrollar enfermedades crónicas. Por esto es importante una adecuada nutrición en las diferentes etapas de crecimiento.

    .row.justify-content-center.d-flex.mb-5
      .col-lg-6.fnd--1.fnd-
        .row.justify-content-center.d-flex
          .col-lg-6
            p.mb-0 <b>Desarrollo físico</b>  
            p Los niños continúan ganando peso y altura, pero más lentamente de lo que lo hicieron durante los primeros dos años de vida. El desarrollo del cerebro también está en marcha; en el momento enque un niño llega a la edad de tres años, el cerebro habrá alcanzado aproximadamente el 75% del peso que tendrá en la edad adulta. En este período realizan actividades como saltar y andar en puntillas, además se presenta un desarrollo cognitivo y social.

          .col-lg-6
            figure
              img.img-298(src='@/assets/curso/temas/tema4/img-6.png')
      .col-lg-6.fnd--2.fnd-
        .row.justify-content-center.d-flex
          .col-lg-6
            p.mb-0 <b>Crecimiento:</b> talla y peso.
            p.mb-3 En el desarrollo físico de los infantes se dan modificaciones en forma y composición corporales que varían de acuerdo con el crecimiento y el sexo de cada individuo.
            p.mb-0 <b>Peso:</b> 2,5 a 3,5 kg/año.
            p.mb-0 <b>Talla:</b> 5 a 6 cm/año.
            p.mb-0 <b>Dentición:</b> Entre los 6 y 12 años
            p.mb-3 aparecen los dientes permanentes.
            
          .col-lg-6
            figure
              img.img-298(src='@/assets/curso/temas/tema4/img-7.png')
          
    .row.justify-content-center.align-items-center.mb-3.fnd-6.p-4(data-aos="zoom-in")
      .col-lg-3.col-md-6.mb-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/img-8.png")
      .col-lg-9
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

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-8
        .nutrition-box.nn
          .cont
            p.mb-0 <b>Por Ejemplo:</b> Para un niño de 7 años la cantidad de fibra diaria es: 7 + 5 = 12 g/día. Se permite una ingesta máxima de 35 gramos de fibra al día.
          img.pepper(src="@/assets/curso/temas/tema4/img-9.png")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4. 
          span Pautas alimenticias en la infancia           
        figure
          img(src='@/assets/curso/temas/tema4/img-10.png')                 
        figcaption Nota. SENA

        .row.justify-content-center.align-items-center(data-aos="zoom-in")
          .col-xl-6.col-lg-6.col-md-8
            .crd_02.mb-5.crd_02-1
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg", alt="alt")          
                .crd_02__txt
                  p.mb-1 <b>Alimentación diversificada.</b>
                  
          .col-xl-6.col-lg-6.col-md-8
            .crd_02.mb-5.crd_02-1
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg", alt="alt")          
                .crd_02__txt
                  p.mb-1 <b>Distribución y horarios regulares de comidas.</b>
                  
          .col-xl-6.col-lg-6.col-md-8
            .crd_02.mb-5.crd_02-1
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg", alt="alt")          
                .crd_02__txt
                  p.mb-1 <b>Selección de alimentos.</b>
          .col-xl-6.col-lg-6.col-md-8
            .crd_02.mb-5.crd_02-1
                .crd_02__icon.dan
                  img(src="@/assets/curso/temas/tema4/img-11.svg", alt="alt")          
                .crd_02__txt
                  p.mb-1 <b>Dieta variada en platos, olores, colores, sabores, texturas y consistencia.</b>


    .row.justify-content-center.align-items-center.mb-5.fnd-6(data-aos="fade-left")
      .col-lg-4.col-md-6.p-0
        figure
          img(src='@/assets/curso/temas/tema4/img-12.png') 
      .col-lg-8.px-4
        p.mb-0 <b>Distribución de comidas</b>
        p.mb-0 <b>Desayuno:</b> Se debe incluir leche u otro lácteo, cereales o tostadas, un pequeñosándwich y jugo de frutas.
        p.mb-0 <b>Almuerzo:</b> Es la comida más importante del día.
        p.mb-3 <b>Dieta variada de platos,</b> teniendo en cuenta olores, sabores, texturas y consistencia.
        p.mb-0 Errores alimentarios para evitar:
        p Dietas monótonas.
        p Desayuno insuficiente o no desayunar. 

    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-3 Adolescencia (12- 20 años)
      p La adolescencia se puede considerar la fase de transición de la niñez a la edad adulta. Sin embargo, los cambios físicos y psicológicos que se producen en la adolescencia pueden comenzar antes o durante la preadolescencia en edades de 9 a 12 años. La adolescencia puede ser una etapa de desorientación y descubrimiento; el período de transición puede hacer referencia a cuestiones deindependencia e identidad propia.
      p En los últimos años se ha observado en las poblaciones más jóvenes un consumo excesivo de dietas hipercalóricas, es decir, un alto consumo de glúcidos y grasas sumado al sedentarismo característico de las ciudades, lo cual puede generar problemas de sobrepeso y obesidad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-md-5
        figure
          img(src='@/assets/curso/temas/tema4/img-13.png')   






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
