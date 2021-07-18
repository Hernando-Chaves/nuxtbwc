<template>
  <div class="container ">
    <div class="justify-center py-9" v-for="page in pages.nodes" :key="page.id">
      <h2 class="text-center">{{ page.HomeFields.tituloSeccion3Reglas }}</h2>
      <p class="text-center my-4">
        {{ page.HomeFields.parrafoDeLaSeccion3Reglas }}
      </p>
      <div class="flex gap-4">
        <div
          class="w-1/3 flex flex-col"
          v-for="regla in page.HomeFields.repetidor3Reglas"
          :key="regla.id"
        >
          <div class="bg-secondary-500 pt-3 pb-6">
            <h3 class="text-center text-2xl text-white uppercase">
              {{ regla.tituloRegla }}
            </h3>
          </div>
          <div class="bg-gray-100 text-secondary-500 text-center px-5 py-4">
            {{ regla.descripcionDeLaReglaLinea1 }}
          </div>
          <div class=" px-8">
            <div class="bg-gray-300 h-px px-9"></div>
          </div>
          <div
            class="bg-gray-100 text-secondary-500 flex-1 text-center px-5 py-4"
          >
            {{ regla.descripcionDeLaReglaLinea2 }}
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
