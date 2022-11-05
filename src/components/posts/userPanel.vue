<script lang="ts" setup>
const username = localStorage.getItem('username');
</script>

<template>
  <div class="userPanel glass">
    <div class="avatar">{{ username?.split('').at(0)?.toUpperCase() }}</div>
    <div class="username">{{ username }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
.userPanel {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;

  .avatar {
    background-color: rgba(179, 0, 47, 1);
    padding: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 10px;
  }

  .username {
    color: rgba(179, 0, 47, 1);
    text-transform: capitalize;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
  }

  @include pad {
    display: none;
  }
}
</style>
