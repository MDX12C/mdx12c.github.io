<template>
  <div class="posts">
    <div class="newPost glass">
      <textarea placeholder="Say something..."></textarea>
      <button>Post</button>
    </div>
    <div class="postList">
      <div class="post glass">
        <div class="title">
          <div class="avatar">B</div>
          <div class="username">Banahaker</div>
        </div>
        <div class="content">HAHA</div>
      </div>
    </div>
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

  .postList {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    .post {
      border-radius: 10px;
      padding: 10px 25px;

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;

        .avatar {
          background-color: rgb(179, 0, 47);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .username {
          margin-left: 10px;
          text-align: center;
          color: rgb(179, 0, 47);
        }
      }

      .content {
        margin: 10px 4px;
        color: white;
      }
    }
  }
}
</style>
