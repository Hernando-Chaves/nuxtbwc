<template>
  <!-- NUEVO NAVBAR -->
  <div class="bg-blue-500 p-6 flex justify-around items-center">
    <!-- LOGO -->
    <div class="brand-logo text-white flex flex-shrink">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <span class="font-semibold text-xl tracking-tight"
        >Bogota Web Company</span
      >
    </div>
    <!-- LOGO -->

    <ul
      class="relative inline-block"
      @mouseover="isVisible = true"
      @mouseleave="isVisible = false"
      @keydown.enter="isVisible = !isVisible"
    >
      <button
        type="button"
        v-for="item in menuItems.edges"
        :key="item.id"
        class="inline-flex items-center justify-between px-2 py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline"
      >
        <nuxt-link
          :to="item['node'].path"
          class="flex-shrink-0 hover:text-white transition duration-400"
          >{{ item["node"].label }}</nuxt-link
        >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="flex-shrink-0 w-5 h-5 ml-1 "
          v-if="item.node.childItems.nodes.length > 0"
        >
          <path
            :class="{ 'rotate-180': isVisible }"
            class="transition duration-300 ease-in-out origin-center transform hover:bg-color-white"
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-class="-translate-y-3 scale-95 opacity-0"
        enter-to-class="translate-y-0 scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in transform"
        leave-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-3 opacity-0"
      >
        <div v-show="isVisible" class="absolute pt-2">
          <div
            class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl"
          >
            <div
              class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"
            ></div>
            <div
              class="relative"
              v-for="subItem in menuItems.edges.childItems.nodes"
              :key="subItem.id"
            >
              <a
                href="#"
                class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
              >
                {{ subItem.label }}</a
              >
            </div>
          </div>
        </div>
      </transition>
    </ul>
  </div>
  <!-- NUEVO NAVBAR -->
</template>

<script>
import menuItems from "~/queries/menus";
export default {
  data() {
    return {
      isVisible: false
    };
  },
  apollo: {
    menuItems: {
      prefetch: true,
      query: menuItems
    }
  }
};
</script>

<style lang="scss" scoped></style>
