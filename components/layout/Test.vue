<template>
  <div class="bg-blue-500 py-5">
    <div class="container flex items-center justify-between">
      <div class="brand text-white flex items-center font-semibold">
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
        <span class="text-white">BWC</span>
      </div>
      <div class="navegacion">
        <ul class="flex text-white justify-end ">
          <li
            class="px-2 inline-flex items-center"
            v-for="item in menuItems.edges"
            :key="item.id"
            @mouseover="
              item.node.childItems.nodes.length > 0
                ? (esVisible = true)
                : (esVisible = false)
            "
          >
            <nuxt-link :to="item['node'].path">
              {{ item["node"].label }}
            </nuxt-link>
            <span v-if="item.node.childItems.nodes.length > 0">
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
            |
              <ul
                class="opacity-0 hover:opacity-100 transition-all duration-800 transform -translate-x-20 translate-y-20 hover:translate-y-12"
                v-if="item.node.childItems.nodes.length > 0"
                v-show="esVisible"
              >
                <li
                  v-for="subItem in item.node.childItems.nodes"
                  :key="subItem.id"
                >
                  <nuxt-link :to="subItem.path">
                    {{ subItem.label }}
                  </nuxt-link>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import menuItems from "~/queries/menus";
export default {
  apollo: {
    menuItems: {
      prefetch: true,
      query: menuItems
    }
  },
  data() {
    return {
      esVisible: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
