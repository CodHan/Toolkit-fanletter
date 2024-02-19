import Loding from 'components/commons/Loding';
import Detail from 'components/pages/Detail';
import LoginPage from 'components/pages/LoginPage';
import MainPage from 'components/pages/MainPage';
import Mypage from 'components/pages/Mypage';
import SignUpPage from 'components/pages/SignUpPage';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import api from './axios/api';
import { useDispatch } from 'react-redux';
import { init } from './redux/modules/letters';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const response = await api.get('/letters');
        dispatch(init(response.data));
      } catch (error) {
        console.error('에러가 발생하였습니다.', error);
      }
    };
    fetchLetters();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="..." element={<Loding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
