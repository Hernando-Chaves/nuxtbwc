<template>
  <div class=" mt-7 bg-gray-100 py-16">
    <div class="grid" v-for="page in pages.nodes" :key="page.id">
      <h2 class="text-center">
        {{ page.HomeFields.configuracionSeccionCta.tituloDeLaSeccionCta }}
      </h2>
      <p class="px-64 mt-5 mb-7 text-center">
        {{ page.HomeFields.configuracionSeccionCta.parrafoSeccionCta }}
      </p>
      <nuxt-link
        :to="
          separarTxt(page.HomeFields.configuracionSeccionCta.destinoBotonCta)
        "
        class="px-9 py-3 rounded-full transition duration-300 justify-self-center   bg-primary-500 hover:bg-primary-600 text-white"
      >
        {{ page.HomeFields.configuracionSeccionCta.textoDelBotonCta }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import pages from "~/queries/paginas/inicio";
export default {
  apollo: {
    pages: {
      query: pages,
      prefeth: true
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
