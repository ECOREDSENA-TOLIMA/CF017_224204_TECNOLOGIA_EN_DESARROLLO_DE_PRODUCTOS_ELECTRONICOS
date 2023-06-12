<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento preventivo

    .row.justify-content-center.align-items-center.mt-5
      .col-12.mb-5(data-aos="zoom-out-down")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-01.png', alt='Mantenimiento preventivo')
      .col-12
        p.mb-5(data-aos="fade-left") A lo largo de la evolución de los procesos industriales, el mantenimiento ha tenido avances significativos reduciendo cada vez más la necesidad de hacer mantenimientos correctivos, y haciendo más uso frecuente de mantenimientos preventivos, los cuales en costes de materiales de repuestos mano de obra y tiempo de parada de las plantas son sustancialmente menores, tal como se aprecia en la siguiente figura.

    
    .row.justify-content-center.mt-4.mb-4
      .col-lg-10.col-12.mb-4
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Figura 6.</b> <i>Tipos de mantenimiento</i>

      .col-lg-5.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-right")
        .tarjeta-avatar.col-12
          img(src="@/assets/curso/temas/tema2/tema2-02.svg", alt="Mantenimiento Correctivo")   
          .tarjeta.col-12.p-4.py-5.color-acento-contenido
            p.mb-0.text-center.mt-4
              strong #[i Mantenimiento Correctivo]
            p.text-center implica sacar de funcionamiento una máquina o un equipo para corregir la avería.

      .col-lg-5.col-12.d-flex.mb-lg-0.mb-5(data-aos="fade-left")
        .tarjeta-avatar.col-12
          img(src="@/assets/curso/temas/tema2/tema2-03.svg", alt="Mantenimiento Preventivo")   
          .tarjeta.col-12.p-4.py-5.color-acento-contenido
            p.mb-0.text-center.mt-4
              strong #[i Mantenimiento Preventivo]
            p.text-center es una tarea programada, que busca prevenir daños mayores, por tanto toma mucho menos tiempo.

    .cajon.color-primario.mt-5.mb-5(data-aos="zoom-out-down")
      .row.justify-content-center.align-items-center.py-0.mt-4
        .col-12.mt-4.mb-4.px-5
          p(data-aos="fade-left") En la industria actual, la mayoría de los fabricantes de aparatos eléctricos y electrónicos, brindan a los usuarios y técnicos de mantenimiento, la información necesaria para que estos mantenimientos sean realizados a tiempo, garantizando la vida útil de los equipos y su funcionamiento adecuado.

    p.mb-5(data-aos="fade-left") Existen diversos factores que determinan la frecuencia con la que debe realizarse un mantenimiento preventivo. Dos de ellos son los siguientes (ver siguiente figura).

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10.col-12.mb-4
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Figura 7.</b> <i>Factores</i>
          
      .col-lg-10.col-12.mb-4(data-aos="zoom-out-up")
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/tema2-04.svg', alt='Factores')

          .tarjeta.color-acento-contenido.p-3(x="78%" y="22%" numero="1")
            p.mb-2 Uno de ellos es en #[strong el ambiente] en donde se ha puesto en funcionamiento el equipo electrónico. Factores como #[strong el clima, altitud y la humedad relativa del ambiente] pueden llegar a afectar significativamente el deterioro de las piezas del equipo electrónico en cuestión. 

          .tarjeta.color-acento-contenido.p-3(x="50%" y="36%" numero="2")
            p Un segundo factor significativo es el tipo de servicio que presta el equipo, #[strong si es un servicio continuo u ocasional.]

    p.mb-5(data-aos="fade-left") Los fabricantes al desarrollar un nuevo equipo electrónico, generalmente realizan una serie de pruebas, teniendo en cuenta los factores anteriormente mencionados, entre otros, para determinar la vida útil de ciertas piezas mecánicas y/o electrónicas. Estas pruebas son ampliamente documentadas para generar los manuales de servicio y mantenimiento, donde se indica claramente la frecuencia, con las que deben hacerse. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='En ámbitos industriales la documentación y seguimiento')
      .col-lg-7.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0(data-aos="fade-up")
            .cajon.color-primario
              .row.justify-content-center.align-items-center.py-0.mt-1
                .col-12.mt-4.mb-4.px-5
                  p.mb-lg-0.lg-mb-5 En ámbitos industriales la documentación y seguimiento a los mantenimientos correctivos proveen la información necesaria para que el departamento de mantenimiento pueda establecer un cronograma de mantenimiento con las frecuencias a ejecutar. A nivel industrial, generalmente, los mantenimientos pueden ser semanales, mensuales, trimestrales o anuales.
         
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Rutinas de limpieza

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0
            p(data-aos="fade-right") La contaminación en diferentes ámbitos y ambientes puede generar en los contactos eléctricos de un circuito procesos de sulfatación que afectan eléctricamente, modificando así el correcto funcionamiento de un equipo electrónico; en casos más extremos, esta sulfatación y contaminación de los contactos puede llegar a generar fallas más graves las cuales puedan ocasionar otras dentro del equipo. La limpieza, entonces, debe garantizar que sus contactos estén libres de todos estos contaminantes, además de ser lo suficientemente cuidadosa para no modificar ni la estructura y la química de los componentes de un equipo electrónico. 
            p(data-aos="fade-right") La limpieza también es importante no solamente al iniciar el proceso de mantenimiento si no después de realizar las respectivas reparaciones, ya que procesos como la soldadura generan contaminantes sobre los packs de los componentes provenientes de las resinas fundentes que pueden generar contactos indeseados, capacitancia, entre otros problemas muy comunes, los cuales pueden llegar a modificar el buen funcionamiento de un equipo.
            p(data-aos="fade-right") A continuación, se presentan algunos productos de limpieza.

      .col-lg-5.col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='Rutinas de limpieza')
        

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-acento-botones" data-aos="zoom-out-up")
      .row(titulo="Alcohol isopropílico")
        .col-md-7.mb-4.mb-md-0
          p El producto por excelencia a utilizar generalmente es alcohol isopropílico, el cual es un tipo de alcohol muy particular, que tiene la capacidad de remover grasas provenientes de los fundentes de la soldadura, pero sin ser lo suficientemente abrasivo como para dañar la estructura de la tarjeta o el cuerpo plástico de un componente; también posee una característica de operación en menor tiempo que otros tipos de alcoholes. 
          p.mb-5 En el mercado podemos encontrar envasados algunos tipos de limpiadores, que poseen componentes desengrasantes para la limpieza de tarjetas y componentes, pero el observar en detalle el componente principal de estos limpiadores casi siempre es el alcohol isopropílico.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-07.png', alt='Alcohol isopropílico')

      .row(titulo="Aire comprimido")
        .col-md-7.mb-4.mb-md-0
          p En la industria del mantenimiento de computadores es común encontrar envasado aire comprimido que se utiliza para la limpieza de polvos sobre las tarjetas de los servidores y computadores. 
          p.mb-5 Este aire comprimido debe ser aplicado con precaución y las recomendaciones del fabricante, para evitar generar daños estructurales en la tarjeta o desprender componentes accidentalmente. Un pequeño inconveniente con este elemento, es que genera grandes cantidades de energía estática; hoy en día se consiguen productos comerciales que corrigen ese problema, y vienen indicados como antiestáticas.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-08.png', alt='Aire comprimido')

      .row(titulo="Limpiadores de contacto")
        .col-md-7.mb-4.mb-md-0
          p Comercialmente también se consiguen limpiadores de contactos, que básicamente son productos petroquímicos con cierto grado de corrosión para limpiar los contactos tanto de equipos eléctricos como electrónicos. 
          p.mb-5 Con estos productos se recomienda tener especial cuidado ya que algunos pueden llegar a afectar las capas de antisolder de una tarjeta impresa. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-09.png', alt='Limpiadores de contacto')

    p.mb-5(data-aos="fade-right") Los equipos electrónicos que tienen algún tipo de pieza móvil pueden llegar a requerir dependiendo del caso de alguna lubricación, para que estas conserven su funcionalidad y no sufran ningún tipo de deterioro. 

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="zoom-out-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Ambientes con una elevada humedad relativa, o cercanos al nivel del mar, tienden generar cúmulo de extrema oxidación que deteriora las partes móviles de un equipo. Una adecuada lubricación previene estos problemas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='Ambientes con una elevada humedad relativa')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-11.png', alt='De igual forma, la ubicación también es fundamental a nivel eléctrico')
          .col-md-6.mb-4.mb-md-0
            p De igual forma, la ubicación también es fundamental a nivel eléctrico, ya que máquinas eléctricas móviles tales como motores solenoides y generadores, con una pobre o inexistente ubicación, requerirá de un esfuerzo mecánico mayor, lo cual eléctricamente se traduce en un requerimiento de corriente y un consumo de potencia mayor al nominal.

    p.mb-5(data-aos="fade-left") En términos generales los lubricantes utilizados son hechos todos a base de aceites minerales, ya que no son buenos conductores, lo que los hace ideales para no producir falsos contactos o cortocircuitos, resistencias o capacitancias parasitas dentro de los equipos electrónicos. 

    .cajon.color-primario.mt-4(data-aos="zoom-out-down")
      .row.justify-content-center.align-items-center.py-0.mt-1
        .col-12.mt-4.mb-4.px-5(data-aos="fade-left")
          p En algunos casos estos aceites minerales cumplen una doble función, además de lubricar son buenos conductores térmicos dando lugar a que se utilicen como disipadores de calor, este fenómeno puede observarse ampliamente en sistemas de refrigeración complejos para servidores industriales.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Aplicación
    p(data-aos="fade-right") La aplicación de diferentes productos ya sea para limpieza o lubricación dentro de equipos electrónicos tiene ciertas restricciones y prevenciones que no pueden ser pasadas por alto, ya que evitan daños inesperados dentro del equipo o accidentes indeseables.
    p(data-aos="fade-right") Los productos de limpieza, desde el alcohol isopropílico hasta los limpia contactos, deben ser aplicados teniendo en cuenta las precauciones del fabricante y su ficha técnica. Estas no solamente buscan prevenir daños en el equipo sino accidentes que puedan afectar al personal técnico, pues estos productos químicos son nocivos para la salud y pueden llegar a ser extremadamente peligrosos si no se usan adecuadamente. 
    p.mb-5(data-aos="fade-right") Cada producto cumple una función específica dentro de la limpieza, tal como se explica a continuación.

    .row.justify-content-center.align-items-center.mt-4(data-aos="zoom-out-down")
      .col-lg-10.col-12
        .cajon.color-acento-contenido.mt-4.py-2.py-lg-4
          .timeline
            .timeline-item.me-4.me-lg-0(data-aos="fade-up")
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-26.svg', alt='')
              .timeline-content.right
                p El alcohol isopropílico debe aplicarse con precaución, asegurando su correcta evaporación, ya que si queda acumulado dentro de los contactos y no se evapora por completo, se pueden llegar a generar situaciones de riesgo de cortocircuito al energizar el equipo nuevamente. 

            .timeline-item.me-4.me-lg-0(data-aos="fade-up")
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-27.svg', alt='')
              .timeline-content
                p Los limpia contactos cuenta con un grado de corrosión tal que puede llegar a afectar las capas de antisolder y el marcado de los componentes sobre el impreso. 

            .timeline-item.me-4.me-lg-0(data-aos="fade-up")
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-28.svg', alt='')
              .timeline-content.right
                p Se debe tener particular precaución con la aplicación del aire comprimido para la limpieza de polvo en equipos electrónicos. Comercialmente el bote de aire comprimido cuenta con un pequeño tubo en forma de pitillo, que ayuda a dirigir el aire hacia los puntos específicos donde requiere ser aplicado. Si este proceso se hiciera sin este elemento, podría ser riesgoso y llegar a remover componentes que no estén están adheridos a la superficie del impreso o generar contactos indeseables dentro de los circuitos.

            .timeline-item.me-4.me-lg-0(data-aos="fade-up")
              .timeline-icon
                img(src='@/assets/curso/temas/tema2/tema2-29.svg', alt='')
              .timeline-content
                p Por otra parte, los lubricantes al tener una base grasa deben ser aplicados con las precauciones correspondientes, cubriendo o aislando cualquier contacto eléctrico de la tarjeta o los cables circundantes. A pesar de que el lubricante utilizado no es conductor por su base grasa puede llegar a atraer partículas que contaminen de manera no deseada los contactos del circuito electrónico.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Recomendaciones de cuidado
    p.mb-5(data-aos="fade-right") La garantía que los fabricantes pueden brindar a los consumidores acerca de los componentes, aparatos y sistemas electrónicos, no sólo depende de la calidad del ensamble y los insumos utilizados, en gran medida depende también del buen uso y adecuado manejo por parte del usuario. 

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-10(data-aos="zoom-out-down")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-30.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0(data-aos="fade-left") Cualquier aparato o sistema electrónico cuenta generalmente con un manual de usuario, que advierte de las precauciones, modo de uso y las recomendaciones en su manipulación y operación.

    .cajon.color-primario.mt-5(data-aos="zoom-out-down")
      .row.justify-content-center.align-items-center.py-0.mt-1
        .col-12.mt-4.mb-4.px-5(data-aos="fade-right")
          p Las garantías brindadas por las compañías productoras se encuentran blindadas por esta documentación que especifica esta correcta manipulación y cuidado de los equipos; en caso de no cumplirse, la garantía es inoperable debido a una mala manipulación por parte del usuario.
    
    .row.justify-content-center.align-items-center.mt-5
      .col-12(data-aos="fade-right")
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
