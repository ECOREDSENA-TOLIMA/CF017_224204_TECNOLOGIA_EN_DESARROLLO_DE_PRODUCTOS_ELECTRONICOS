<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis de pruebas del circuito electrónico

    .row.justify-content-center.align-items-center
      .col-lg-5.col-12(data-aos="zoom-out-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-01.png', alt='Análisis de pruebas del circuito electrónico')
      .col-lg-7.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0(data-aos="fade-up")
            .cajon.color-primario
              .row.justify-content-center.align-items-center.py-0.mt-1
                .col-12.mt-4.mb-4.px-5
                  p.mb-lg-0.lg-mb-5 Cuando se practica una prueba a cualquier tipo de sistema, el objetivo de esta es determinar el estado o el correcto funcionamiento del mismo. Para ello, es necesario analizar los datos obtenidos en la prueba ejecutada y contar con toda la documentación correspondiente del diseño del producto para poder determinar los parámetros normales de funcionamiento y las posibles anomalías en cada caso. 
          .col-12.mt-3(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-sm-2.col-md-2.col-6.px-3
                img(src='@/assets/curso/temas/tema1/tema1-02.svg', alt='')
              .col-sm-10.col-md-10.col-12.py-0
                p.mb-0 El análisis de pruebas también puede arrojar indicadores de proceso los cuales brindan información de errores o anomalías presentadas dentro de la producción que no pertenecen al diseño como tal.
    
    .row.justify-content-center.align-items-center.mt-5.mb-5(data-aos="flip-left")
      .col-sm-2.col-md-1.col-6.py-0
        img(src='@/assets/curso/temas/tema1/tema1-03.svg', alt='')
      .col-sm-10.col-md-11.col-12.py-0
        p.mb-0 Los tipos de fallas presentados en un equipo electrónico pueden clasificarse de la siguiente forma.
        .titulo-sexto.color-acento-contenido.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 1.</b> <i>Tipos de fallas</i>

    .row.justify-content-center.align-items-center.mb-5.py-4(style="background-color:#D8F7F2")
      .col-12.col-md-6.px-4(data-aos="fade-up")
        img(src='@/assets/curso/temas/tema1/tema1-20.svg', alt='')
      .col-12.col-md-6.px-4(data-aos="fade-up")
        img(src='@/assets/curso/temas/tema1/tema1-21.svg', alt='')
      .col-md-9.cajon.color-naranja.mt-3(data-aos="zoom-in")
        p.p-3.mb-0 A nivel eléctrico podemos encontrar #[strong tres tipos de fallas] que se pueden  observar dependiendo de la característica presentada dentro de la media.
      .col-md-12.px-0.mx-0.pt-4
        .row.justify-content-center
          .col-12.col-md-4.col-lg-3.mb-3.mb-xl-0(data-aos="fade-right")
            .tarjeta.tarjeta-slide.arriba.color-acento-botones(@mouseover="mostrarIndicador1 = false")
              .indicador--click(v-if="mostrarIndicador1")
              .tarjeta-slide__contenedor.py-5
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-04.svg')})`, 'background-size':'initial', 'background-repeat': 'no-repeat'}")
                .tarjeta-slide__contenido.p-2.p-xl-2.py-3
                  p.text-center Cortocircuitos entre dos puntos de un circuito o dos pines de un componente.
          .col-12.col-md-4.col-lg-3.mb-5.mb-xl-0(data-aos="fade-left")
            .tarjeta.tarjeta-slide.arriba.color-acento-botones
              .tarjeta-slide__contenedor.py-5.py-lg-4
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-05.svg')})`, 'background-size':'initial', 'background-repeat': 'no-repeat'}")
                .tarjeta-slide__contenido.p-3.p-xl-2.py-3
                  p.text-center Fallas del tipo circuito abierto, donde en un circuito no presenta conexión eléctrica entre dos puntos en donde debería haber continuidad eléctrica.
          .col-12.col-md-4.col-lg-3.mb-5.mb-xl-0(data-aos="fade-right")
            .tarjeta.tarjeta-slide.arriba.color-acento-botones
              .tarjeta-slide__contenedor.py-5.py-lg-2
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-06.svg')})`, 'background-size':'initial', 'background-repeat': 'no-repeat'}")
                .tarjeta-slide__contenido.p-3.p-xl-2.py-3
                  p.text-center Fugas de corriente o de voltaje por anomalías dentro de los componentes como tal o la presencia de resistencias eléctricas debido a residuos contaminantes producto del ensamble.

    .row.mb-4
      .col-12.px-0.mb-4(data-aos="zoom-out")
        p A la hora de determinar el funcionamiento de un sistema o componente, básicamente se pueden practicar dos pruebas una de encendido sin carga y otra de encendido con carga, esto si el sistema alimenta algún tipo de carga; sin embargo, se puede considerar un tercer tipo de prueba que se ejecuta sin energizar la tarjeta como tal, a este tipo de pruebas se le conoce como prueba VI.
      .col-12.px-0(data-aos="zoom-in-left")
        .cajon.color-primario
          .row.justify-content-center.align-items-center.py-0.mt-1
            .col-12.mt-4.mb-4.px-5
              p.mb-lg-0.lg-mb-5 Estas pruebas se ejecutan en sistemas extremadamente sensibles a las descargas electrostáticas o donde no se tiene la fuente adecuada para su energización, a veces se les llama pruebas aisladas.

      .col-12.mt-4.px-0(data-aos="zoom-in-left")
        p Para las pruebas de funcionamiento es necesario tener presente los siguientes aspectos.          

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-12(data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-10.col-md-10
                figure
                  img(src='@/assets/curso/temas/tema1/tema1-07.png', alt='Documentación técnica')
              .col-10.col-md-10.mb-2.mb-md-0
                h4.mt-3 Documentación técnica
                p Tener la documentación técnica referente al diseño y el manual de operación y mantenimiento del mismo, debido a que estos documentos brindan los parámetros de funcionamiento normal y una guía para poder tomar las medidas correspondientes. 

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-10.col-10
                figure
                  img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='Puntos de prueba')
              .col-md-10.col-10.mb-2.mb-md-0
                h4.mt-3 Puntos de prueba
                p Es necesario que el diseño cuente con un mínimo de puntos de prueba, los cuales son dispuestos por el diseñador de acuerdo a la naturaleza de su diseño. Se debe seguir rigurosamente los pasos sugeridos en cada prueba para poder ejecutarla correctamente y determinar el funcionamiento de la tarjeta sin averiarla.
            
            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-10.col-10
                figure
                  img(src='@/assets/curso/temas/tema1/tema1-09.png', alt='Medidas a tomar')
              .col-md-10.col-10.mb-2.mb-md-0
                h4.mt-3 Medidas a tomar
                p Tomando en cuenta la naturaleza del diseño como tal, será necesario, en cada caso, tomar medidas de voltaje y de corriente, de acuerdo con las especificaciones dadas dentro de la documentación técnica; sin embargo, no son las únicas variables eléctricas para medir en casos especiales, se pueden llegar a tomar medidas de frecuencia, potencia y temperatura.

    .row.mt-5.mb-5(data-aos="zoom-in")
      .col-12
        p En el momento de ejecutar el mantenimiento a un equipo electrónico no se puede dejar de lado los criterios de aceptabilidad electrónica demarcados en las normas internacionales de calidad y en las políticas de calidad de cada empresa, por ejemplo, la limpieza de las tarjetas luego de la ejecución del mantenimiento, así como los parámetros que deban ser ajustados o calibrados en cada equipo, dependiendo de sus características y su naturaleza propia.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-12(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='Mantenimiento a un equipo electrónico')
      .col-lg-7.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0(data-aos="fade-up")
            .cajon.color-primario
              .row.justify-content-center.align-items-center.py-0.mt-1
                .col-12.mt-4.mb-4.px-5
                  p.mb-lg-0.lg-mb-5 Cuando una empresa desarrolla y produce un producto electrónico, dependiendo de su diseño característico, determina una serie de parámetros que debe cumplir el producto para cumplir con la calidad deseada; estos son en parte los criterios de aceptación de producto. 
          .col-12.mt-3(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-sm-2.col-md-2.col-6.px-3
                img(src='@/assets/curso/temas/tema1/tema1-11.svg', alt='Ahora bien, cuando hay un reclamo de calidad por parte de un consumidor')
              .col-sm-10.col-md-10.col-12.py-0
                p.mb-0 Ahora bien, cuando hay un reclamo de calidad por parte de un consumidor, es necesario ejecutar algún tipo de mantenimiento al equipo aplicando los mismos criterios de calidad.
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Codificación
    p.mb-5(data-aos="zoom-in") La codificación tiene por su parte dos aspectos principales a tratar.
   
    .row.justify-content-center
      .col-lg-10
        .row 
          .col-lg-6.mb-4.px-2.mx-0.nav-holder.nav-holder-1.div1(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema1/tema1-12.png", alt="Sistema autodiagnóstico")
            .text.p-lg-5.p-5.p-sm-3
              h4 #[em Sistema autodiagnóstico:]
              p Esta codificación corresponde a los sistemas que tienen dentro de sí algún tipo de procesador que gestiona un sistema de autodiagnóstico.
              p Es común  verlos en los sistemas de control de los electrodomésticos modernos, donde el aparato se autogestiona y autodiagnóstica, brindando al usuario, a través de teléfonos inteligentes o interfaces gráficas, información del estado del sistema; y si hay algún error, también indica en qué subsistema se encuentra, el cual, generalmente, es codificado de tal manera que dependiendo del código se puede hacer un prediagnóstico, que es información valiosa para los centros de servicio técnico.
          .col-lg-6.mb-4.px-2.mx-0.nav-holder.nav-holder-2(data-aos="fade-left")(@mouseover="mostrarIndicador = false")
            .indicador--click(v-if="mostrarIndicador")
            img(src="@/assets/curso/temas/tema1/tema1-13.png", alt="Sistema de numeración")
            .text.p-lg-5.p-5.p-sm-3
              h4 #[em Sistema de numeración:] 
              p Se tiene la codificación referente a los números de partes de las tarjetas, que componen los sistemas, o de los componentes dentro de las tarjetas. 
              p Cuando se trata de una tarjeta completa estos números de parte brindan una información certera y muy útil para que en el momento de hacer una reparación, o un cambio de parte, se tenga la certeza de estar teniendo el repuesto correspondiente.
              p Este control de los repuestos a través de los números de parte es fundamental para la gestión de mantenimiento y operación de una empresa, ya que permite un control preciso de sus inventarios, ya sea que estas sean cambiadas en un mantenimiento preventivo o en un mantenimiento correctivo. 
    
    
    .cajon.color-primario.mt-4.mb-4(data-aos="zoom-out-down")
      .row.justify-content-center.align-items-center.py-0.mt-1
        .col-12.mt-4.mb-4.px-5(data-aos="zoom-in-down")
          p.mb-lg-0.lg-mb-4 Este control de partes permite predecir y mantener al día los repuestos requeridos en cada momento para los sistemas. De tal forma que no se tengan paradas en plantas.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Relación causa - efecto
    p(data-aos="zoom-in") Al ejecutar cualquier proceso de mantenimiento es necesario llevar una trazabilidad del proceso que permita determinar las causas de las fallas más comunes de los sistemas a analizar para así prevenirlas en el futuro. Una de las más utilizadas a nivel industrial es el diagrama de causa-efecto, que hace referencia a una técnica japonesa, también conocida como espina de pescado, por la forma particular de su diseño.
    p.mb-5(data-aos="zoom-in") Este esquema parte de un problema (efecto) y se buscan, desde diferentes ámbitos interdisciplinarios, las posibles causas.

    .row.justify-content-center.align-items-center
      .col-lg-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 2.</b> <i>Estructura del diagrama causa y efecto</i>
      .col-lg-10.col-12(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-16.svg', alt='Estructura del diagrama causa y efecto')
      .col-12.mt-4
        p(data-aos="fade-left") En cada una de sus ramas, se colocan seis áreas que generalmente son: hombre, máquina, entorno, material, método y medida. Dentro de cada una de estas, se pueden introducir subcategorías, dependiendo de la profundidad del análisis del problema, aunque se recomienda no sobrepasar de tres.

      .col-lg-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 3.</b> <i>Diagrama causa efecto con sus áreas</i>
      .col-lg-10.col-12(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-15.svg', alt='Diagrama Causa efecto con sus áreas')
      .col-12.mt-4(data-aos="zoom-in")
        p A la hora de desarrollar este esquema, es muy productivo que se esté acompañado de un equipo interdisciplinario que colabore en la construcción del diagrama aportando lluvias de ideas y analizando, en cada caso, las causas del porqué estas aportan al problema.

      .col-lg-10.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-0
          p.titulo.pb-0.mb-0 <b>Figura 4.</b> <i>Causa principal y subcategorías</i>
      .col-lg-10.col-12(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-14.svg', alt='Causa principal y subcategorías')
      .col-12.mt-4
        p(data-aos="zoom-in") Finalmente, cuando se considere que el diagrama está completo, este se convierte en insumo para futura mejoras en procesos de diseño, producción y mantenimiento.
        p(data-aos="zoom-in") Aunque no está relacionado directamente con el diagrama de causa efecto, es recomendable establecer un protocolo, en general en el proceso de mantenimiento para llevar así una trazabilidad. De tal manera que, a la hora de aplicar este tipo de diagramas, estos tengan mayor efectividad, Asimismo el protocolo se alimenta de los resultados de la aplicación de estos diagramas, ya que estos orientan al personal técnico para buscar las fallas, entendiendo las causas más comunes.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Localización de fallas y diagnóstico
    p.mb-5(data-aos="zoom-in") La localización de fallas es un proceso esencial dentro del mantenimiento, la cual debe realizarse de manera minuciosa para no dejar escapar ningún detalle, ni tampoco provocar más fallas. En la localización de fallas intervienen varios factores para tener en cuenta: el primero y más importante un dominio amplio de la instrumentación e interpretación de medidas de variables eléctricas dentro de circuitos electrónicos, el segundo un conocimiento específico del diseño al cual se le está haciendo el mantenimiento, así como sus funcionalidades. Esta información parte de la documentación proporcionada por el fabricante, en algunos casos se puede tener un protocolo de mantenimiento, en otros se puede tener incluso un manual de ensamble y mantenimiento, el cual debe ser respetado y de conocimiento para el personal técnico.

    .row.justify-content-center.align-items-center
      .col-lg-7.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0(data-aos="fade-up")
            .cajon.color-primario
              .row.justify-content-center.align-items-center.py-0.mt-1
                .col-12.mt-4.mb-4.px-5
                  p.mb-lg-0.lg-mb-5 La inspección inicial es una gran aliada a la hora de localizar fallas, permite detectar fallas que a simple vista son perceptibles, detectando síntomas tales como componentes carbonizados cables deteriorados o derretidos, contaminación o suciedad que puede generar problemas de conexión o cortocircuitos bajo condiciones climáticas extremas.
          .col-12.mt-3(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-sm-2.col-md-2.col-6.px-3
                img(src='@/assets/curso/temas/tema1/tema1-03.svg', alt='')
              .col-sm-10.col-md-10.col-12.py-0
                p.mb-0 Una de las técnicas más eficientes en la localización de fallas es la famosa técnica de las curvas V-I, la cual se explica en la siguiente figura 5.
      .col-lg-5.col-12(data-aos="zoom-out-left")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='Técnicas más eficientes en la localización de fallas')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.col-12.mb-4
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-left")
          p.titulo.pb-0.mb-0 <b>Figura 5.</b> <i>Técnica de las curvas V-I</i>
      .col-lg-10.col-12.mb-5(data-aos="zoom-out-down")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-18.svg', alt='Técnica de las curvas V-I')

      .col-12.mb-5
        p(data-aos="zoom-in") Dentro de los procedimientos de diagnóstico, el más importante es el establecido por el mismo fabricante, pues fue quien diseñó, produjo y ensambló la tarjeta o producto electrónico. Generalmente, establece los parámetros para su correspondiente inspección y mantenimiento. Por lo tanto, este protocolo no es genérico y tiende a ser una información reservada de la misma empresa que sólo se maneja dentro de los centros de servicio de mantenimiento o a sus propios técnicos, quienes trabajan en las áreas de mantenimiento, calidad o servicio post venta y garantía.
        p(data-aos="zoom-in") Un pequeño ejemplo del procedimiento de diagnóstico aplicando la técnica de las curvas V-I puede observarse a continuación con un circuito sencillo.

    .row.justify-content-center.align-items-center.mt-2
      .col-12.mb-5(data-aos="zoom-out-down")
        div(style="position: relative")
          template
            figure
              img(src='@/assets/curso/temas/tema1/tema1-info.svg', alt='')

          a.boton.color-acento-botones.indicador__container(@click="modal1 = true; mostrarSlider1 = false")
            .indicador--click(v-if="mostrarIndicador3")
            span #[strong Entrar]


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Instructivos o diagramas
    p.mb-5(data-aos="fade-left") Dependiendo de las políticas de cada compañía, es posible que se genere para cada diseño o cada producto un instructivo con procedimientos detallados tanto para el diagnóstico como para el mantenimiento. Esta documentación generalmente va acompañada de esquemas de diseño, diagramas de disposición de componentes e incluso dibujos pictóricos indicando la correcta conexión de los equipos de medida. Estos instructivos también contienen, dada cierto tipo de falla, la recomendación para su corrección y solución. 
    
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-10(data-aos="zoom-out-right")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-19.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Dentro de la documentación y los diagramas es clave ubicar los puntos de prueba o #[i test point], dispuestos por el diseñador. Para esta clase de procedimientos, los cuales casi siempre están identificados por las siglas TP, los #[i test point], se pueden tener varias formas. Están diseñados específicamente, para tomar medidas de variables eléctricas, algunos típicamente presentan una forma a manera de gancho, con el único propósito, de conectar sondas de equipos como en los osciloscopios.

    .row.justify-content-center.align-items-center.mt-5
      .col-12
        p(data-aos="fade-left") Eso suele encontrarse en los manuales de mantenimiento proporcionados por los fabricantes a través de flujogramas, los cuales brindan una ruta para el procedimiento. Estos esquemas sirven como una especie de algoritmo para indicar la ruta a seguir dentro del procedimiento, ya que dependiendo del tipo de fallo se implementará una solución particular, dada como tal por el procedimiento.
        
    .cajon.color-primario.mt-4(data-aos="zoom-out-down")
      .row.justify-content-center.align-items-center.py-0.mt-1
        .col-12.mt-4.mb-4.px-5(data-aos="fade-left")
          p.mb-lg-0.lg-mb-5 Existen equipos electrónicos tan complejos, que estos manuales de mantenimiento suelen ser en su mayoría gráficos, presentando los despieces completos del equipo dando un procedimiento minucioso de su desensamble y posterior ensamble dentro del proceso de revisión y mantenimiento al cual está siendo sometido.

    ModalA(:abrir-modal.sync="modal1")
      .row.m-0
        .col-12.p-0
          img(src="@/assets/curso/temas/tema1/tema1-info-1.svg")
      .row.m-0(v-if="!mostrarSlider1")
        .col-md-3.d-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-info-2.svg')
        .col-md-9.col-12
          .row(style="position:relative")
            .col-12.mb-2.mb-md-0.dialogo-v1.mt-2
              div.text-center.mt-2.ms-4.me-4 
                p.mb-0 Un pequeño ejemplo del procedimiento de diagnóstico aplicando la técnica de las curvas V-I puede observarse a continuación con un circuito sencillo, el cual consiste en un amplificador muy simple en emisor común. En la imagen se puede observar este equipo con funcionamiento normal.
                p Haga clic en el botón y compare el mismo equipo con un mal funcionamiento.
            .col-11.mt-4.mb-4
              .row.align-items-center
                .col-md-1.col-12
                  a.boton.color-secundario.px-2.py-md-5.py-2.width-div(@mouseover="mostrarIndicador4 = false" @click="hacerVisible(1)")
                    .indicador--click(v-if="mostrarIndicador4")
                    strong.text-orientation #[i Buen funcionamiento]
                .col-lg-10.col-md-9.col-12(v-if="mostrar1")
                  figure(data-aos="fade-left")
                    img(src='@/assets/curso/temas/tema1/tema1-info-4.svg')
                .col-md-1.col-12
                  a.boton.color-acento-contenido.px-2.py-md-5.py-2.width-div(@click="hacerVisible(2)")
                    strong.text-orientation #[i Mal funcionamiento]
                .col-lg-10.col-md-9.col-12(v-if="mostrar2")
                  figure(data-aos="fade-left")
                    img(src='@/assets/curso/temas/tema1/tema1-info-5.svg')
            .col-1
              a.color-custom.px-2.py-md-5.py-2(@click="MostrarSlider(1)")
                img(src='@/assets/curso/temas/tema1/tema1-info-6.svg')
                


      .tarjeta.p-4.mb-5(data-aos="zoom-out-up" v-if="mostrarSlider1")
        SlyderA(tipo="b")
          .row.m-0
            .col-md-3.d-none.d-md-block
              figure
                img(src='@/assets/curso/temas/tema1/tema1-info-2.svg' style="width:70%")
            .col-md-9.col-12
              .row(style="position:relative")
                .col-12.mb-2.mb-md-0.dialogo-v1.mt-2
                  div.text-center.mt-2.ms-4.me-4 
                    p.mb-0 Ahora bien, a continuación se aplicará la técnica V-I a este circuito, la cual tiene como característica principal, que es un procedimiento con el circuito de energizado; generalmente, se aplica una señal AC de muy bajo voltaje, a través de una resistencia de referencia. Luego, se toma como referencia la forma XY, resultante en el osciloscopio, del circuito en perfectas condiciones, y se compara con el circuito al cual se quiere diagnosticar. Al hacer esta medida en varios puntos del circuito, se puede obtener lo que se conoce como una firma digital del mismo. En el momento que se observa una figura que no concuerde con las de referencia del circuito, al funcionar adecuadamente, se puede tener una guía de dónde se encuentra la falla. 
                
          .row.m-0
            .col-md-3.d-none.d-md-block
              figure
                img(src='@/assets/curso/temas/tema1/tema1-info-2.svg' style="width:70%")
            .col-md-9.col-12
              .row(style="position:relative")
                .col-12.mb-2.mb-md-0.dialogo-v1.mt-2
                  div.text-center.mt-2.ms-4.me-4 
                    p.mb-0 En las siguiente figura se observa la referencia obtenida del circuito funcionando correctamente al cual se le ha inyectado una pequeña señal a través de una resistencia, y como esta referencia cambia en la luego al tener un componente averiado. 
                  .text-center.mt-4.mb-4
                    a.boton.color-acento-botones.px-2.py-2(@click="modal2 = true")
                      strong Ver Prueba 

          .row.m-0
            .col-md-3.d-none.d-md-block
              figure
                img(src='@/assets/curso/temas/tema1/tema1-info-2.svg' style="width:70%")
            .col-md-9.col-12
              .row(style="position:relative")
                .col-12.mb-2.mb-md-0.dialogo-v1.mt-2
                  div.text-center.mt-2.ms-4.me-4 
                    p.mb-0 Hoy en día varias empresas, se han dedicado a producir equipos de medida especializados para hacer este tipo de pruebas. Algunos equipos, de los más sofisticados, permiten generar estas firmas digitales sobre los circuitos como un compendio de varias señales respecto a un punto común, que generalmente es tierra en el circuito, pudiendo probar varios puntos a la vez y haciendo más ágil el diagnóstico; por supuesto, estos equipos son de alto costo y sólo industrias de muy alto presupuesto los operan. 
              .row.justify-content-center.align-items-center.mt-4
                .col-md-6.col-12
                  figure
                    img(src="@/assets/curso/temas/tema1/tema1-info-9.png")
                .col-md-6.col-12
                  .caja-naranja.p-3
                    p.mb-0 En la imagen se aprecia cómo a través del conector, se captura la firma digital de todas las señales provenientes de un integrado, la cual es guardada en un archivo y así poderla comparar con una tarjeta bajo evaluación, la cual requiere ser diagnosticada. Comúnmente se le conoce como equipos de diagnóstico avanzado.

    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center.align-items-center.m-0(style="background-color: #8A008D")
        .col-md-6.col-12.p-4
          p(style="color:#FFFFFF") Como se puede observar en el primer circuito se ha inyectado una señal de apenas 1 voltio a 1 kHz de frecuencia, esta es nuestra señal de referencia a la cual es una señal de muy baja potencia, incapaz de generar algún tipo de avería en el objeto. 
          p(style="color:#FFFFFF") Esta técnica es común dentro de las compañías cuando no se cuenta con documentación suficiente por parte del fabricante y adicionalmente el circuito pues llegar a ser sensible al energizarse sin tener la certeza de cuáles son sus fallas. 
        .col-md-6.col-12.p-4
          figure
            img(src="@/assets/curso/temas/tema1/tema1-info-7.svg")
      .row.justify-content-center.align-items-center.m-0(style="background-color: rgb(138, 0, 141, 0.8)")
        .col-md-6.col-12.p-4
          p(style="color:#FFFFFF") En la segunda imagen se puede observar la misma conexión pero esta vez con un fallo localizado en el transistor. Se observa cómo la curva XY en el osciloscopio cambio de forma. Esta curva es resultante de tomar voltaje de la fuente con respecto al voltaje del punto del circuito que queremos evaluar; el fallo simulador en el transistor es una fuga ubicada entre los pines de emisor y base, la cual provoca que el amplificador presente un incorrecto funcionamiento.
        .col-md-6.col-12.p-4
          figure
            img(src="@/assets/curso/temas/tema1/tema1-info-8.svg")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    mostrarIndicador1: true,
    mostrarIndicador3: true,
    mostrarIndicador4: true,
    mostrarIndicador: true,
    mostrar1: true,
    mostrar2: false,
    mostrarSlider1: false,
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
  methods: {
    hacerVisible(item) {
      if (item == 1) this.mostrar1 = this.mostrar1 ? false : true
      else this.mostrar2 = this.mostrar2 ? false : true
      if (item == 1) this.mostrar2 = false
      else this.mostrar1 = false
      console.info([this.mostrar1, this.mostrar2])
    },
    MostrarSlider(item) {
      if (item == 1) this.mostrarSlider1 = true
      else this.mostrarSlider1 = false
    },
  },
}
</script>

<style lang="sass" scoped>

.nav-holder-1:after
  border-right: 2px solid $color-secundario
  position: absolute
  content: ''
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 998
.nav-holder-2:after
  border-right: 2px solid $color-secundario
  position: absolute
  content: ''
  top: 0
  bottom: 0
  left: 0
  right: 100%
  z-index: 998
.nav-holder
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)
//.nav-holder-1
//  border-right: 10px solid $color-primario
//.nav-holder-2
//  border-left: 20px solid $color-primario

.nav-holder *, .nav-holder *:before
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  position: absolute
  content: ''
  top: 0
  bottom: 0
  left: 0
  background-color: #00CCA7
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease
.nav-holder-1:before
  right: 20px
  top: 83px
  height: 63px
  border-radius: 10px
.nav-holder-2:before
  right: 95.5%
  top: 23px
  height: 63px
  left: 0
  z-index: 998
  border-radius: 0px 10px 10px 0px

.nav-holder-1:before
  -webkit-transform: translateX(100%)
  -moz-transform: translateX(100%)
  transform: translateX(100%)
.nav-holder-2:before
  -webkit-transform: translateX(0%)
  -moz-transform: translateX(0%)
  transform: translateX(0%)

.nav-holder:hover:before
  -webkit-transform: translateX(0)
  -moz-transform: translateX(0)
  transform: translateX(0%)
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  right: 0
  top: 0
  left: 0
  height: 100%

.nav-holder
  .text
    position: absolute
    top: 100%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0

.nav-holder .h4
  margin: 0
  opacity: 1

.nav-holder:hover
  .text
    top: 0%
  h4, p
    opacity: 1
    -webkit-transition-delay: 0.2s
    -moz-transition-delay: 0.2s
    transition-delay: 0.2s

@media (max-width: $bp-max-lg)
  .nav-holder p
    font-size: 15px
</style>
