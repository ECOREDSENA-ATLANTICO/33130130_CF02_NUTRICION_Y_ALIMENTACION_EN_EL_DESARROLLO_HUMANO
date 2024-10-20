<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Importancia de la nutrición durante la vida

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-6.mb-md-5
        figure
          img(src='@/assets/curso/temas/tema3/img-1.png')           
          
      .col-lg-7
        .row.mb-3.pe-lg-3.align-items-center(data-aos="fade-left")
          .col-auto.pe-2      
        p.mb-3 Este recurso constituye una herramienta práctica para entender cada una de las etapas de la vida y considerar el aspecto nutricional como parte fundamental en cada una de las etapas para mantenerse saludable. 
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
        p <b>Calorías suficientes:</b> Aportar las calorías necesarias para que el organismo realice de forma eficiente los procesos metabólicos y trabajos físicos.
        p <b>Nutrientes suficientes:</b> Suministrar nutrientes al organismo como proteínas, vitaminas y minerales para que realicen las funciones plásticas y reguladoras.
        p <b>Agua:</b> Es necesario incluir en la dieta un mínimo de tres litros de agua al día; este elemento, aunque no es un nutriente, desempeña en el organismo procesos de asimilación y eliminación del sistema celular. 
        p <b>Fibra dietaría:</b> Debe suministrarse en cantidades suficientes porque esta aporta ligninas, polisacáridos y oligosacáridos.
        p <b>Equilibrio de los nutrientes:</b> Todos los aportes calóricos deben estar equilibrados entre sí, según lo establecido por los expertos de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y la Organización Mundial de la Salud (OMS). 
       
    .row.mb-4.pe-lg-3.align-items-center(data-aos="fade-left")
      .col-auto.pe-2
        figure
          img(src='@/assets/curso/temas/tema2/img-4.svg')
      .col-auto.px-0
        h3.mb-5 Criterios a tener en cuenta en la ingesta diaria recomendada (RDA)
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9.order-lg-1.order-2
        p Consumir todos los grupos de alimentos de forma variada, los glúcidos en un 55% a 60% y aumentar la cantidad de acuerdo con el ingreso energético total, sin sobrepasar un 10% en consumo de azúcares simples (azúcar refinada).
        p Se recomienda disminuir el consumo de lípidos en un 30% con respecto al ingreso energético total, también reducir el colesterol en 300 mg/día.
        p Controlar el consumo de proteínas siempre y cuando el consumo de calorías sea el adecuado.
        p Consumir fibra dietaría a diario, su ingesta no debe ser inferior a 22 gr/día.
        p Controlar el consumo de sal en 3 gr/ día para evitar el exceso de sodio en el cuerpo.


      .col-lg-3.col-md-6.order-lg-2.order-1.mb-3        
        figure
          img(src='@/assets/curso/temas/tema3/img-3.png')    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            p slslslls
          .col-lg-6
            p ksksksk







       

     



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
