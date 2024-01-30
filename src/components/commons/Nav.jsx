import NavButton from 'components/commons/NavButton';
import styled from 'styled-components';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import KimKangMin from 'components/page/KimKangMin';
import KimGunWu from 'components/page/KimGunWu';
import ParkJaeHoon from 'components/page/ParkJaeHoon';
import JangSungYup from 'components/page/JangSungYup';
import Form from './Form';

function Nav() {
  return (
    <div>
      <BrowserRouter>
        <NavParents>
          <NavUl>
            <Navli>
              <Link to="/KimKangMin">
                <NavButton>김강민</NavButton>
              </Link>
            </Navli>

            <Navli>
              <Link to="/KimGunWu">
                <NavButton>김건우</NavButton>
              </Link>
            </Navli>

            <Navli>
              <Link to="/ParkJaeHoon">
                <NavButton>박재훈</NavButton>
              </Link>
            </Navli>

            <Navli>
              <Link to="/JangSungYup">
                <NavButton>장성엽</NavButton>
              </Link>
            </Navli>
          </NavUl>
        </NavParents>
        <Form />

        <Routes>
          <Route path="/KimKangMin" element={<KimKangMin />} />
          <Route path="/KimGunWu" element={<KimGunWu />} />
          <Route path="/ParkJaeHoon" element={<ParkJaeHoon />} />
          <Route path="/JangSungYup" element={<JangSungYup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;

const NavParents = styled.div`
  display: flex;
  background-color: aquamarine;
  height: 40px;
  width: 350px;
  border: 2px solid aquamarine;
  margin: 5px auto 0 auto;
  border-radius: 10px;
  justify-content: center;
`;
const NavUl = styled.ul`
  display: flex;
`;
const Navli = styled.li`
  padding: 7px;
`;
