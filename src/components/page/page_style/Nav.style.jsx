import styled from 'styled-components';

export const NavParents = styled.div`
  display: flex;
  background-color: aquamarine;
  height: 40px;
  width: 350px;
  border: 2px solid aquamarine;
  margin: 5px auto 0 auto;
  border-radius: 10px;
  justify-content: center;
`;
export const NavUl = styled.ul`
  display: flex;
`;
export const Navli = styled.li`
  padding: 7px;
`;
export const NavStyleButton = styled.button`
  background-color: #0c6fcd;
  border: 1px solid #0c6fcd;
  border-radius: 3px;
  color: #cd0c22;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.2s;
  }
`;
