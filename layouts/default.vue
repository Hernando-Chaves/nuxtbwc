<template>
  <div>
    <LayoutNavbar />
    <transition name="toast">
      <Nuxt />
    </transition>
  </div>
</template>
<style>
/* .toast-enter-from {
  opacity: 0;
  transform: translateY(400px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 0.6s ease;
}
.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(400px);
}
.toast-leave-active {
  transition: all 0.5s ease;
} */
.toast-enter,
.toast-leave-to {
  opacity: 0;
  transform: translateY(80px);
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.8s ease;
}
</style>
