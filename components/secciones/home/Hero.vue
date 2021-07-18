<template>
  <div>
    <div v-for="page in pages.nodes" :key="page.id">
      <div class="mt-5 h-screen flex pt-28">
        <div
          class="container grid grid-cols-1 sm:grid-cols-3  bg-local bg-right bg-no-repeat bg-contain"
          :style="{
            backgroundImage: `url(${page.HomeFields.configuracionSeccionHero.imagenDeFondo.sourceUrl})`
          }"
        >
          <div class="text-hero">
            <h2 class="text-2xl font-semibold text-primary-500">
              {{ page.HomeFields.configuracionSeccionHero.subtituloHero }}
            </h2>
            <h1 class="">
              {{ page.HomeFields.configuracionSeccionHero.tituloHero }}
            </h1>
            <p class="text-1xl  mt-3 mb-9">
              {{ page.HomeFields.configuracionSeccionHero.parrafoHero }}
            </p>
            <nuxt-link
              :to="
                separarTxt(
                  page.HomeFields.configuracionSeccionHero.destinoBotonHero
                )
              "
              class="px-9 py-3 rounded-full transition duration-300  bg-primary-500 hover:bg-primary-600 text-white"
            >
              {{ page.HomeFields.configuracionSeccionHero.textoBotonHero }}
            </nuxt-link>
          </div>
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
    separarTxt(base) {
      let url = base.split(":", 1);
      return url[0];
    }
  }
};
</script>

<style lang="scss" scoped></style>
