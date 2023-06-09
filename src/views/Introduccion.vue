<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.py-0
      .col-10(data-aos="fade-left")
        .cajon.color-primario
          .row.justify-content-center.align-items-center.py-0
            .col-12.mt-4.mb-4.px-5
              p.mb-lg-0.mb-5 El mantenimiento es uno de los procesos fundamentales que se debe realizar en un equipo, cualquiera que sea, pues permite prolongar la vida útil del mismo y su correcto funcionamiento. En el siguiente video se expone cómo dicho ejercicio surge desde que se diseña un producto.
      .col-lg-10.col-12.mt-5(data-aos="fade-right")
        figure.mt-0
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
