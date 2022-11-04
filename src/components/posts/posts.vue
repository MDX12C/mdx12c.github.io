<template>
  <div class="posts">
    <div class="newPost glass">
      <textarea placeholder="Say something..."></textarea>
      <button>Post</button>
    </div>
    <div class="postList"></div>
  </div>
</template>

<style lang="scss" scoped>
.posts {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  .newPost {
    width: 100%;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    textarea {
      background-color: rgba($color: #fff, $alpha: 0.1);
      border: 1px solid #fff;
      border-radius: 4px;
      width: 100%;
      padding: 10px;
      height: 4rem;
      resize: none;
      font-size: 1rem;
      outline: none;
      transition: 0.2s ease-in;
      &::placeholder {
        color: rgba(255, 255, 255, 0.767);
        font-weight: 200;
      }
      &:focus {
        background-color: rgba($color: #fff, $alpha: 0.5);
      }
    }

    button {
      margin-top: 10px;
      width: 100%;
      background-color: rgba($color: #fff, $alpha: 0.1);
      border: 1px solid #fff;
      border-radius: 4px;
      font-size: 1rem;
      padding: 3px 25px;
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
