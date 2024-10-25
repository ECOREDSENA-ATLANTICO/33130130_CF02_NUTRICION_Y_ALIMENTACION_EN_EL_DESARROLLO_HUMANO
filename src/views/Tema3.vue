<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Importancia de la nutrición durante la vida

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .nutrition-box.nn1
          .cont
            p.mb-0 Este recurso constituye una herramienta práctica para entender cada una de las etapas de la vida y considerar el aspecto nutricional como parte fundamental en cada una de las etapas para mantenerse saludable. 
          img.pepper(src="@/assets/curso/temas/tema3/img-1.png")   

    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-0 Una dieta equilibrada

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-md-5
        figure
          img(src='@/assets/curso/temas/tema3/img-2.png')           
          
      .col-lg-9
        .row.mb-3.pe-lg-3.align-items-center(data-aos="fade-left")
          .col-auto.pe-2      
        p Una dieta equilibrada debe cumplir con cinco aspectos básicos:
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 <b>Calorías suficientes:</b> Aportar las calorías necesarias para que el organismo realice de forma eficiente los procesos metabólicos y trabajos físicos.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 <b>Nutrientes suficientes:</b> Suministrar nutrientes al organismo como proteínas, vitaminas y minerales para que realicen las funciones plásticas y reguladoras.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 <b>Agua:</b> Es necesario incluir en la dieta un mínimo de tres litros de agua al día; este elemento, aunque no es un nutriente, desempeña en el organismo procesos de asimilación y eliminación del sistema celular. 
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 <b>Fibra dietaría:</b> Debe suministrarse en cantidades suficientes porque esta aporta ligninas, polisacáridos y oligosacáridos.
        .row.pe-lg-3.justify-content-center
          .col-auto.pe-2.mt-2
            img(src="@/assets/curso/temas/tema1/check.svg")
          .col.px-0
            p.mb-0 <b>Equilibrio de los nutrientes:</b> Todos los aportes calóricos deben estar equilibrados entre sí, según lo establecido por los expertos de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y la Organización Mundial de la Salud (OMS). 
       
    .row.mb-4.pe-lg-3.align-items-center.justify-content-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col.px-0
        h3 Criterios a tener en cuenta en la ingesta diaria recomendada (RDA)
    

    .bloque-texto-a.color-secundario.botones.p-4.p-md-5.mb-5.fnd-11
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.mb-lg-0.mb-md-4
          .bloque-texto-a__texto.p-4
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Consumir todos los grupos de alimentos de forma variada, los glúcidos en un 55% a 60% y aumentar la cantidad de acuerdo con el ingreso energético total, sin sobrepasar un 10% en consumo de azúcares simples (azúcar refinada).
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Se recomienda disminuir el consumo de lípidos en un 30% con respecto al ingreso energético total, también reducir el colesterol en 300 mg/día.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Controlar el consumo de proteínas siempre y cuando el consumo de calorías sea el adecuado.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Consumir fibra dietaría a diario, su ingesta no debe ser inferior a 22 gr/día.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 Controlar el consumo de sal en 3 gr/ día para evitar el exceso de sodio en el cuerpo.
        .col-lg-4.mb-4.mb-lg-0.col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img-3.png')    

  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-6
            .cajon.color-secundario.p-4.fnd-7.mb-4
              p.mb-0 Para planear una dieta equilibrada se necesita determinar los alimentos en cantidades adecuadas de acuerdo con las necesidades, los cuales están asociados al peso del individuo, la edad y actividadque desarrolle. Se estudiarán cuáles son las necesidades diarias teniendo en cuenta que:

          .col-lg-6
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 1 g de proteína produce 4 kcal, puede representar en la dieta un aporte del 10 al 15 %.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 1 g de glúcidos produce 4 kcal, deben representar del 50 al 65 % de las calorías diarias.
            .row.pe-lg-3.justify-content-center
              .col-auto.pe-2.mt-2
                img(src="@/assets/curso/temas/tema1/check.svg")
              .col.px-0
                p.mb-0 1 g de grasa produce 9 kcal, deben representar el 25 al 30 % de las calorías diarias.

    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-0 Pirámide de la alimentación   
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.mb-4
        p La pirámide de la alimentación es una figura geométrica que orienta a las personas sobre una alimentación equilibrada. En esta pirámide están expuestos los principales alimentos que deben consumirse diariamente. La pirámide de alimentos recalca algunos conceptos de suma importancia: 

    .row.justify-content-center.align-items-center.mb-5.fnd-8-2.p-lg-5.p-md-3(data-aos="fade-right")
        .col-lg-12.fnd-8-1.p-lg-5.p-md-3
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center.px-1
              .col-xl-6.mb-4.mb-md-5
                h5 Variedad	
                p.mb-0 La pirámide de la alimentación es una figura geométrica que orienta a las personas sobre una alimentación equilibrada. En esta pirámide están expuestos los principales alimentos que deben consumirse diariamente. La pirámide de alimentos recalca algunos conceptos de suma importancia:Variedad: Uno de los inconvenientes más usuales en la alimentación es la monotonía porque siempre se come lo mismo, por eso la variedad es un factor importante del equilibrio nutricional. Hay que tener claro que ningún alimento aporta todos los nutrientes en las cantidades necesarias, por lo cual la dietadiaria debe contener los principales grupos de alimentos, hay que tener claro que ningún grupo de nutrientes es más importante que otro.
              .col-xl-6.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema3/img-4.png') 
            .row.justify-content-center.align-items-center
              .col-xl-4.mb-4.mb-md-5
                h5 Proporcionalidad.	
                p Es aconsejable consumir la mayor cantidad de los alimentos que se hallan en la base de la pirámide y menor proporción de los que se encuentran en la parte superior. Los alimentos que se comen deben ser en las cantidades adecuadas y suficientes, pero evitando el exceso.
              .col-xl-8
                figure
                  img(src='@/assets/curso/temas/tema3/img-5.png')

            .row.justify-content-center.align-items-center
              .col-xl-4
                h5 Moderación	
                p se recomienda consumir alimentos en porciones moderadas en número y tamaño, según las necesidades de energía de cada persona en particular. Seguir las pautas dadas ayuda a prevenir algunas enfermedades como la obesidad.
              .col-xl-8
                figure
                  img(src='@/assets/curso/temas/tema3/img-6.png')
 

    TabsA.color-secundarios.mb-5
      .tarjeta.color-primario.p-4.fnd-6(titulo="Primer nivel")
        .row
          .col-xl-6
            h4 Primer nivel
            p Los alimentos que se encuentran allí son de tipo energético tales como: cereales, arroz, pan, pasta y papas, los cuales aportan calorías al organismo;se recomienda consumir de cuatro a seis raciones al día.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-8.png')            
             
      .tarjeta.color-primario.p-4.fnd-6(titulo="Segundo nivel")
        .row
          .col-xl-6   
            h4 Segundo nivel
            p En este nivel se encuentran las frutas y verduras, este grupo de alimentos aporta a la dieta: fibra, vitaminas y antioxidantes beneficiosos para todoslos grupos de edades; se recomienda el consumo de dos a tres raciones diarias de estos alimentos.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-10.png')      
      .tarjeta.color-primario.p-4.fnd-6(titulo="Tercer nivel")
        h4 Tercer nivel
        p Este nivel incluye lácteos, carnes, mariscos, huevos y frutos secos. Se recomiendan dos raciones diarias de lácteos y carnes magras, priorizando el pescado por su hierro. Frutos secos y legumbres deben consumirse en porciones semanales.
      
      .tarjeta.color-primario.p-4.fnd-6(titulo="Pico de la pirámide")
        .row
          .col-xl-6   
            h4 Pico de la pirámide
            p En este último nivel situado en el pico de la pirámide se encuentran productos que tienen una gran cantidad de grasas como es el caso de las aceitunas, aceites vegetales como el de girasol, oliva, maíz y soya. El consumode estos productos debe ser moderado pues aportan muchas calorías y sealmacenan con facilidad en el cuerpo.
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-9.png')      
    
     



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
