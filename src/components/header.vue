<script lang="ts" setup>
import logo from '@/assets/Logo.svg';
const LogoutButton = () => {
  localStorage.clear();
  location.assign('/');
};
</script>

<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="logo" />
      <h1>MDX<span>12</span>C</h1>
    </div>
    <button @click="LogoutButton">
      <i class="bx bx-log-out-circle bx-rotate-180"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
.header {
  background-color: rgba(255, 255, 255, 0.397);
  backdrop-filter: blur(5px);
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  border-radius: 10px;
  width: 95vw;
  margin: auto;
  position: relative;
  top: 15px;
  @include phone {
    padding: 15px 35px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 35px;
      margin-right: 20px;
      @include phone {
        height: 30px;
        margin-right: 10px;
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: 300;
      line-height: 40px;
      position: relative;
      top: -3px;
      span {
        color: rgba(179, 0, 47, 1);
      }

      @include phone {
        font-size: 1.6rem;
      }
    }
  }

  button {
    background-color: rgb(167, 19, 58);
    border: solid 1px rgba(179, 0, 47, 1);
    color: white;
    padding: 5px 15px;
    text-transform: uppercase;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    transition: 0.2s;
    user-select: none;

    &:hover {
      background-color: transparent;
      color: rgba(179, 0, 47, 1);
    }
  }
}
</style>
