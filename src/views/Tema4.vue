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
