<template>
  <div
    class="w-full text-gray-700 bg-blue-900 dark-mode:text-gray-200 dark-mode:bg-gray-800 py-3 "
  >
    <div
      class="flex flex-col max-w-screen-xl px-6 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
    >
      <div class="p-4 flex flex-row items-center justify-between text-white">
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
        <span class="font-semibold text-xl tracking-tight">BWC</span>
      </div>
      <nav
        :class="{ flex: open, hidden: !open }"
        class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"
      >
        <div class="relative" v-for="item in menuItems.edges" :key="item.id">
          <button
            @click="
              item.node.childItems.nodes.length > 0
                ? (open = !open)
                : (open = false)
            "
            @mousedown="
              item.node.childItems.nodes.length > 0
                ? (open = true)
                : (open = false)
            "
            @mouseenter="
              item.node.childItems.nodes.length > 0
                ? (open = true)
                : (open = false)
            "
            class="flex flex-row items-center w-full px-3 py-2 mt-2 text-white hover:text-primary-500 transition duration-500 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline"
          >
            <nuxt-link :to="item['node'].path"
              >{{ item["node"].label }}
            </nuxt-link>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              :class="{ 'rotate-180': open, 'rotate-0': !open }"
              class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
              v-if="item.node.childItems.nodes.length > 0"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            v-show="open"
            enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
            class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
          >
            <div
              class="px-2 py-1 bg-white rounded-md shadow dark-mode:bg-secondary-500 "
              v-for="subItem in item.node.childItems.nodes"
              :key="subItem.id"
            >
              <nuxt-link
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                :to="subItem.path"
                >{{ subItem.label }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import menuItems from "~/queries/menus";
export default {
  data() {
    return {
      open: false
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
