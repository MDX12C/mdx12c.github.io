<script lang="ts" setup>
import logo from '@/assets/Logo.svg';
</script>

<template>
  <div class="postPage">
    <div class="header">
      <div class="logo">
        <img :src="logo" alt="logo" />
        <h1>MDX<span>12</span>C</h1>
      </div>
      <button>Logout</button>
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

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 35px;
        margin-right: 20px;
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
}
</style>
