import Detail from 'components/pages/Detail';
import MainPage from 'components/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// 리스트 넘치는 문제
// 닉네임,내용 validation
// navigation active
