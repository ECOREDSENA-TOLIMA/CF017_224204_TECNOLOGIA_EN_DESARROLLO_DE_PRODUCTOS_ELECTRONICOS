<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento preventivo

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Rutinas de limpieza



      

    p.mb-4 En términos generales los lubricantes utilizados son hechos todos a base de aceites minerales, ya que no son buenos conductores, lo que los hace ideales para no producir falsos contactos o cortocircuitos, resistencias o capacitancias parasitas dentro de los equipos electrónicos. 

    .cajon.color-primario.mt-4
      .row.justify-content-center.align-items-center.py-0.mt-1
        .col-12.mt-4.mb-4.px-5
          p En algunos casos estos aceites minerales cumplen una doble función, además de lubricar son buenos conductores térmicos dando lugar a que se utilicen como disipadores de calor, este fenómeno puede observarse ampliamente en sistemas de refrigeración complejos para servidores industriales.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Aplicación
    p La aplicación de diferentes productos ya sea para limpieza o lubricación dentro de equipos electrónicos tiene ciertas restricciones y prevenciones que no pueden ser pasadas por alto, ya que evitan daños inesperados dentro del equipo o accidentes indeseables.
    p Los productos de limpieza, desde el alcohol isopropílico hasta los limpia contactos, deben ser aplicados teniendo en cuenta las precauciones del fabricante y su ficha técnica. Estas no solamente buscan prevenir daños en el equipo sino accidentes que puedan afectar al personal técnico, pues estos productos químicos son nocivos para la salud y pueden llegar a ser extremadamente peligrosos si no se usan adecuadamente. 
    p.mb-5 Cada producto cumple una función específica dentro de la limpieza, tal como se explica a continuación.

    .row.justify-content-center.align-items-center.mt-4
      .col-lg-10.col-12
        .cajon.color-acento-contenido.mt-4.py-2.py-lg-4
          .timeline
            .timeline-item.me-4.me-lg-0
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-26.svg', alt='')
              .timeline-content.right
                p El alcohol isopropílico debe aplicarse con precaución, asegurando su correcta evaporación, ya que si queda acumulado dentro de los contactos y no se evapora por completo, se pueden llegar a generar situaciones de riesgo de cortocircuito al energizar el equipo nuevamente. 

            .timeline-item.me-4.me-lg-0
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-27.svg', alt='')
              .timeline-content
                p Los limpia contactos cuenta con un grado de corrosión tal que puede llegar a afectar las capas de antisolder y el marcado de los componentes sobre el impreso. 

            .timeline-item.me-4.me-lg-0
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-28.svg', alt='')
              .timeline-content.right
                p Se debe tener particular precaución con la aplicación del aire comprimido para la limpieza de polvo en equipos electrónicos. Comercialmente el bote de aire comprimido cuenta con un pequeño tubo en forma de pitillo, que ayuda a dirigir el aire hacia los puntos específicos donde requiere ser aplicado. Si este proceso se hiciera sin este elemento, podría ser riesgoso y llegar a remover componentes que no estén están adheridos a la superficie del impreso o generar contactos indeseables dentro de los circuitos.

            .timeline-item.me-4.me-lg-0
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-29.svg', alt='')
              .timeline-content
                p Por otra parte, los lubricantes al tener una base grasa deben ser aplicados con las precauciones correspondientes, cubriendo o aislando cualquier contacto eléctrico de la tarjeta o los cables circundantes. A pesar de que el lubricante utilizado no es conductor por su base grasa puede llegar a atraer partículas que contaminen de manera no deseada los contactos del circuito electrónico.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Recomendaciones de cuidado
    p.mb-5 La garantía que los fabricantes pueden brindar a los consumidores acerca de los componentes, aparatos y sistemas electrónicos, no sólo depende de la calidad del ensamble y los insumos utilizados, en gran medida depende también del buen uso y adecuado manejo por parte del usuario. 

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-30.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cualquier aparato o sistema electrónico cuenta generalmente con un manual de usuario, que advierte de las precauciones, modo de uso y las recomendaciones en su manipulación y operación.

    .cajon.color-primario.mt-4
      .row.justify-content-center.align-items-center.py-0.mt-1
        .col-12.mt-4.mb-4.px-5
          p Las garantías brindadas por las compañías productoras se encuentran blindadas por esta documentación que especifica esta correcta manipulación y cuidado de los equipos; en caso de no cumplirse, la garantía es inoperable debido a una mala manipulación por parte del usuario.
    
    .row.justify-content-center.align-items-center.mt-5
      .col-12
        p.mb-lg-0.lg-mb-5 Es obligación, entonces, por parte de las compañías, generar una documentación tan clara, específica y completa que le permita al usuario un uso adecuado de su equipo electrónico, así como de su cuidado y mantenimiento mínimo preventivo; además de brindar al usuario información de las capacidades y límites del equipo que está operando, y de los riesgos y prevenciones que debe tener en cuenta.


   

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass" scoped>

// Mixins and Placeholders
%clearfix
	&:after, &:before
		content: ''
		display: block
		width: 100%
		clear: both

@mixin prefix($prop, $val)
	@each $prefix in '-webkit-', '-moz-', '-ms-', ''
		#{$prefix}#{$prop}: $val

// Timeline
.timeline
	width: 100%
  margin: 30px auto
	position: relative
  padding: 0 10px
	@include prefix(transition, all .4s ease)

	&:before
		content: ""
		width: 0px
		height: 100%
		left: 50%
		top: 0
		position: absolute
		border-left: 2px #000000 dashed

	&:after
		content: ""
		clear: both
		display: table
		width: 100%

	.timeline-item
		position: relative
		@extend %clearfix

		.timeline-icon
			width: 70px
			height: 70px
			position: absolute
			top: 0
			left: 50%
			overflow: hidden
			margin-left: -32px

		.timeline-content
			width: 45%
			padding: 10px
			@include prefix(border-radius, 5px)
			@include prefix(transition, all .3s ease)

			&.right
				float: right

@media screen and (max-width: 768px)
	.timeline
		margin: 30px
		padding: 0px
    width: 90%
		&:before
			left: 0

		.timeline-item
			.timeline-content
				width: 90%
				float: right

				&:before, &.right:before
					left: 10%
					margin-left: -6px
					border-left: 0

			.timeline-icon
				left: 0
				width: 50px
				margin-left: -25px
</style>
