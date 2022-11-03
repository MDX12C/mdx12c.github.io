<template>
  <div class="home">
    <div class="wrap">
      <h1>Welcome to <span>MDX12C</span></h1>
      <input type="username" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
.home {
  width: 100vw;
  height: 100vh;
  background: rgb(179, 0, 47);
  background: linear-gradient(
    -45deg,
    rgba(179, 0, 47, 1) 0%,
    rgba(121, 9, 118, 1) 45%,
    rgba(0, 149, 255, 1) 100%
  );

  background-size: 400% 400%;
  animation: gradient 5s ease infinite;

  display: flex;
  align-items: center;
  justify-content: center;
  .wrap {
    background-color: rgba(255, 255, 255, 0.397);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    border-radius: 10px;

    h1 {
      margin-bottom: 30px;
      font-weight: 200;
      span {
        color: rgb(179, 0, 47);
        font-weight: 300;
      }
    }

    input {
      background-color: rgba($color: #fff, $alpha: 0.1);
      border: 1px solid #fff;
      border-radius: 4px;
      margin-bottom: 20px;
      font-size: 1rem;
      padding: 4px 6px;
      outline: none;
      color: #fff;
      transition: 0.3s;
      font-weight: 200;
      &::placeholder {
        color: rgba(255, 255, 255, 0.767);
        font-weight: 200;
      }
      &:focus {
        transform: scale(110%);
      }
    }

    button {
      background-color: rgba($color: #fff, $alpha: 0.1);
      border: 1px solid #fff;
      border-radius: 4px;
      margin: 20px auto;
      font-size: 1rem;
      padding: 4px 25px;
      outline: none;
      color: #fff;
      font-weight: 400;
      text-transform: uppercase;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #fff;
        color: rgb(179, 0, 47);
      }
    }
  }
}
</style>
