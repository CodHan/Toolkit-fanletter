import Loding from 'components/commons/Loding';
import Detail from 'components/pages/Detail';
import LoginPage from 'components/pages/LoginPage';
import MainPage from 'components/pages/MainPage';
import SignUpPage from 'components/pages/SignUpPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="..." element={<Loding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// 리스트 넘치는 문제
// 닉네임,내용 validation
// navigation active
