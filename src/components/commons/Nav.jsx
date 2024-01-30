import NavButton from 'components/commons/NavButton';
import styled from 'styled-components';

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

function Nav() {
  return (
    <NavParents>
      <NavUl>
        <Navli>
          <NavButton>김강민</NavButton>
        </Navli>
        <Navli>
          <NavButton>김건우</NavButton>
        </Navli>
        <Navli>
          <NavButton>박재훈</NavButton>
        </Navli>
        <Navli>
          <NavButton>장성엽</NavButton>
        </Navli>
      </NavUl>
    </NavParents>
  );
}

export default Nav;
