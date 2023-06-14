<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del Componente Formativo CF17 Ejecución del mantenimiento de productos electrónicos, con los aspectos relativos a la ejecución del mantenimiento de productos electrónicos, donde se exponen desde los tipos de fallas típicas en un circuito electrónico hasta las generalidades del mantenimiento preventivo de un equipo nuevo que se pone en funcionamiento y la utilización de las pruebas  y su análisis para lograr determinar el estado real de los componentes. Además de establecer el mantenimiento preventivo como plan de contingencia para evitar problemas a corto, mediano y largo plazo.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
