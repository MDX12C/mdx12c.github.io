<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { PostData, GetPost } from '@/apis/getPost';
import { NewPost } from '@/apis/newPost';

const postList = ref<Array<PostData>>([]);
const newPostText = ref<string>('');
const postingButtonText = ref('Post');

onMounted(() => {
  const TOKEN = localStorage.getItem('TOKEN');
  GetPost(String(TOKEN)).then((res) => {
    console.log(res);
    postList.value = res;
  });
});

const NewPostButton = () => {
  if (newPostText.value == '') return;
  alert('Confirm Posting:\n Are you sure to post new post?');
  const data: PostData = {
    author: String(localStorage.getItem('username')),
    content: newPostText.value,
    title: '',
  };
  console.log(data);
  postingButtonText.value = `<i class='bx bxs-circle-quarter bx-spin' ></i>`;
  NewPost(data).then((res) => {
    postingButtonText.value = `Post`;
    location.reload();
  });
};
</script>

<template>
  <div class="posts">
    <div class="newPost glass">
      <textarea v-model="newPostText" placeholder="Say something..."></textarea>
      <button @click="NewPostButton" v-html="postingButtonText"></button>
    </div>
    <div class="postList">
      <div class="post glass" v-for="i in postList">
        <div class="title">
          <div class="avatar">{{ i.author.split('').at(0) }}</div>
          <div class="username">{{ i.author }}</div>
        </div>
        <div class="content">{{ i.content }}</div>
        <div class="functions">
          <div class="replies"><i class="bx bx-reply"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
.posts {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @include pad {
    width: 100%;
    padding: 0;
  }

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
    flex-direction: column-reverse;
    width: 100%;
    margin-top: 20px;
    .post {
      border-radius: 10px;
      padding: 15px 25px;
      margin-bottom: 20px;

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
        padding: 10px 4px;
        color: white;
      }

      .functions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        .replies {
          cursor: pointer;
          background-color: rgb(179, 0, 47);
          width: 35px;
          height: 35px;
          font-size: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #fff;
          font-weight: 600;
          border: solid 1px rgb(179, 0, 47);
          transition: 0.2s;

          &:hover {
            background-color: transparent;
            color: rgb(179, 0, 47);
          }
        }
      }
    }
  }
}
</style>
