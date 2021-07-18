<template>
  <div class="container pb-8">
    <div class="grid grid-cols-2" v-for="page in pages.nodes" :key="page.id">
      <div class="">
        <h2 class="">
          {{
            page.HomeFields.configuracionSeccionNosotros.tituloSeccionNosotros
          }}
        </h2>
      </div>
      <div class="py-3 px-5">
        <p class="mb-8">
          {{
            page.HomeFields.configuracionSeccionNosotros.textoDelParrafoNosotros
          }}
        </p>
        <nuxt-link
          :to="
            separarTxt(
              page.HomeFields.configuracionSeccionNosotros.destinoBotonNosotros
            )
          "
          class="px-9 py-3 rounded-full transition duration-300   bg-primary-500 hover:bg-primary-600 text-white"
        >
          {{
            page.HomeFields.configuracionSeccionNosotros.textoDelBotonNosotros
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
