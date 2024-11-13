<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Importancia de la nutrición durante la vida para evitar enfermedades',
      titulo:
        'Importancia de la nutrición durante la vida para evitar enfermedades.',
      introduccion:
        'Preguntas de opción múltiple: lea los siguientes enunciados y seleccione la respuesta que considere correcta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes enfermedades es comúnmente causada por la inadecuada alimentación?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Artritis.', esCorrecta: false },
            { id: 'b', texto: 'Diabetes tipo 2.', esCorrecta: true },
            { id: 'c', texto: 'Asma.', esCorrecta: false },
            { id: 'd', texto: 'Hipertensión arterial.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué aspecto es fundamental para evitar enfermedades por malnutrición?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar las grasas a toda costa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seguir una dieta equilibrada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Saltar comidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Consumir solo alimentos procesados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Por qué es crucial la nutrición durante la infancia?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para desarrollar hábitos poco saludables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para un crecimiento y desarrollo óptimos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para aumentar el tiempo de juego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para disminuir la actividad física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es un beneficio de una buena alimentación en la adultez',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prevención de enfermedades crónicas.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Mayor consumo de azúcares.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Ignorar la actividad física.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La historia familiar.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué factor afecta las necesidades nutricionales en la vejez',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de horas de sueño.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Cambios en el metabolismo.', esCorrecta: true },
            {
              id: 'c',
              texto: 'La cantidad de ejercicio realizado en la juventud.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Mejorar la visión.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de alimentos son esenciales para prevenir la desnutrición?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alimentos ricos en azúcares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alimentos ricos en nutrientes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Comida rápida.', esCorrecta: false },
            { id: 'd', texto: 'Alimentos muy procesados.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta..',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta..',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un signo de mala nutrición en niños?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Participación en deportes.', esCorrecta: false },
            { id: 'b', texto: 'Bajo peso para su edad.', esCorrecta: true },
            { id: 'c', texto: 'Consumo de verduras.', esCorrecta: false },
            { id: 'd', texto: 'Buen rendimiento escolar.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué se recomienda para mejorar la salud en adolescentes?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incluir una variedad de alimentos en la dieta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Consumir solo alimentos ultra procesados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Saltar el desayuno.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumentar el consumo de refrescos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cómo influyen los factores ambientales en la nutrición?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'No tienen impacto.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Pueden afectar el acceso a alimentos saludables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo influyen en la salud mental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Son irrelevantes para el bienestar físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué es un aspecto clave de la educación nutricional?',
          imagen: require('@/assets/actividad/img-5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Promover dietas extremas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Fomentar elecciones alimentarias saludables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar las necesidades individuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfatizar el consumo de alimentos altos en azúcar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
