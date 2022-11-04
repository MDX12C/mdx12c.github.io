<script lang="ts" setup>
import headerVue from '@/components/header.vue';
</script>

<template>
  <div class="postPage">
    <headerVue></headerVue>
  </div>
</template>

<style lang="scss" scoped>
.postPage {
  background: linear-gradient(
    -45deg,
    rgba(179, 0, 47, 1) 0%,
    rgba(121, 9, 118, 1) 45%,
    rgba(0, 149, 255, 1) 100%
  );
  min-height: 100vh;
  transition: 0.3s ease-in-out;
}
</style>
