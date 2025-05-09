import axiosClient from './axios-client';
 
export const apis = {
  // 예시: 사용자 정보 가져오기
  getUser: (userId: string) => axiosClient.get(`/users/${userId}`),
}; 