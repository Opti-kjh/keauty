import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://your-api-base-url.com', // 실제 API 주소로 변경 필요
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient; 