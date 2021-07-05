<template>
  <div class="container pt-5">
    <ul>
      <li v-for="proyecto in proyectos.nodes" :key="proyecto.id">
        {{ proyecto.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import proyectos from "~/queries/proyectos.gql";
export default {
  apollo: {
    proyectos: {
      prefetch: true,
      query: proyectos
    }
  },
  head: {
    title: "Bogota Web Company"
  }
};
</script>

<style lang="scss" scoped></style>
