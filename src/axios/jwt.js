import axios from 'axios';

const instance = axios.create({
  baseURL: ' https://moneyfulpublicpolicy.co.kr',
});

instance.interceptors.request.use(
  //요청을 보내기 전
  function (config) {
    console.log('인터셉트 요청 성공 !');
    return config;
  },
  //오류 요청을 보내기 전
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log('인터셉트 응답 받았어요!');
    // 정상 응답
    return response;
  },

  function (error) {
    console.log('인터셉트 응답 못받았어요...ㅠㅠ');
    return Promise.reject(error);
  }
);

export default instance;
