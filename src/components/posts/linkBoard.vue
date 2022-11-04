<template>
  <div class="linkBoard glass">
    <h1>Links Board</h1>
    <div class="list">
      <a href="https://www3.mingdao.edu.tw/">Mingdao Website</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.linkBoard {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  h1 {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 20px;
  }
  .list {
    a {
      color: rgb(179, 0, 47);
      background-color: transparent;
      text-decoration: none;
    }
  }
}
</style>
