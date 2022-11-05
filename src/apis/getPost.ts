import axios from 'axios';
import { server } from '.';

export interface PostData {
  author: string;
  title: string;
  content?: string;
}

export const GetPost = async (TOKEN?: string) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${server}/post/`,
      data: {
        TOKEN,
      },
    });
    return res.data.data;
  } catch (err) {
    alert('Something went wrong, try once later!');
    return null;
  }
};
