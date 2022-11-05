import axios from 'axios';
import { server } from '.';
import { PostData } from './getPost';

export const NewPost = async (data: PostData) => {
  try {
    const res = await axios({
      method: 'PUT',
      url: `${server}/post`,
      data: {
        TOKEN: localStorage.getItem('TOKEN'),
        data,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    alert('Something went wrong, try once later!');
    return null;
  }
};
