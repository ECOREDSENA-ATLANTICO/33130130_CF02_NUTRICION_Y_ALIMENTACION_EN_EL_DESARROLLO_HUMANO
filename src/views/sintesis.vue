<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La inadecuada alimentación puede llevar a diversas enfermedades, como la obesidad, diabetes, enfermedades cardiovasculares y desnutrición. Para prevenir estas condiciones, es fundamental adoptar hábitos alimentarios saludables, que incluyan una dieta equilibrada rica en nutrientes y la práctica regular de actividad física.
    p La nutrición es crucial a lo largo de toda la vida, ya que impacta el crecimiento, el desarrollo cognitivo y la salud general. En cada etapa de la vida, desde la infancia hasta la vejez, las necesidades nutricionales varían. Una alimentación adecuada en la infancia promueve un desarrollo óptimo, mientras que, en la adultez y la tercera edad, ayuda a mantener la salud y prevenir enfermedades crónicas.
    p.mb-5 Fomentar la educación nutricional y la conciencia sobre la importancia de una dieta equilibrada es esencial para mejorar la salud y calidad de vida en todas las etapas.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis de este componente se describe la importancia de la nutrición, las enfermedades causadas por la mala alimentación y la alimentación en cada etapa de la vida.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
