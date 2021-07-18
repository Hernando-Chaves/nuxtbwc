<template>
  <div class=" bg-secondary-500 py-16">
    <div
      class="container grid grid-cols-2"
      v-for="page in pages.nodes"
      :key="page.id"
    >
      <div class="">
        <h2 class="text-white">
          {{
            page.HomeFields.configuracionSeccionPresupuesto
              .tituloDeLaSeccionPresupuesto
          }}
        </h2>
      </div>
      <div class="">
        <p class="mt-5 mb-9  text-white">
          {{
            page.HomeFields.configuracionSeccionPresupuesto
              .parrafoSeccionPresupuesto
          }}
        </p>
        <nuxt-link
          :to="
            separarTxt(
              page.HomeFields.configuracionSeccionPresupuesto
                .destinoBotonPresupuesto
            )
          "
          class="px-9 py-3 rounded-full transition duration-300   bg-primary-500 hover:bg-primary-600 text-white"
        >
          {{
            page.HomeFields.configuracionSeccionPresupuesto
              .textoBotonPresupuesto
          }}
        </nuxt-link>
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
