import axios from 'axios';

const userList = axios.create({
  baseURL: 'http://localhost:8080/users',
});
export default userList;
