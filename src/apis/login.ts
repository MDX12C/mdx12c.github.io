import axios from 'axios';
import { server } from '.';

export const Login = async (username: string, password: string) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${server}/auth/login`,
      data: {
        username,
        password,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    alert('Something went wrong, try once later!');
    return null;
  }
};
