<script lang="ts" setup>
import headerVue from '@/components/header.vue';
import userPanelVue from '@/components/posts/userPanel.vue';
import postsVue from '@/components/posts/posts.vue';
</script>

<template>
  <div class="postPage">
    <headerVue></headerVue>
    <div class="content">
      <userPanelVue></userPanelVue>
      <postsVue></postsVue>
    </div>
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

  .content {
    width: 95vw;
    margin: 50px auto;
    display: flex;
    align-items: flex-start;
  }
}
</style>
