<template>
  <div class="container mb-16">
    <div v-for="page in pages.nodes" :key="page.id">
      <h2 class="text-center">{{ page.HomeFields.tituloSeccionServicios }}</h2>
      <div class="mt-5 grid grid-cols-3 gap-4">
        <div
          class="mt-3"
          v-for="(servicio, index) in page.HomeFields.agregaLosServicios"
          :key="servicio.index"
        >
          <nuxt-link :to="setUrl(servicio.destinoBotonServicio)">
            <div
              class="p-3 bg-cover bg-center h-72 rounded-md flex "
              :style="{
                backgroundImage: `url(${servicio.imagenDelServicio.sourceUrl})`
              }"
            >
              <p class="text-white font-semibold text-lgm ">
                {{ servicio.nombreDelServicio }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pages from "~/queries/paginas/inicio";
export default {
  apollo: {
    pages: {
      query: pages,
      prefetch: true
    }
  },
  methods: {
    setUrl(url) {
      let url1 = url.split(":", 1);
      return url1[0];
    }
  }
};
</script>

<style lang="scss" scoped></style>
