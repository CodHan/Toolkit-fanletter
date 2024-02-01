import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Form from 'components/commons/Form';
import { useState } from 'react';
import Header from 'components/commons/Header';

function Main({ data, setData }) {
  const onClickHandler = (type) => {
    switch (type) {
      case 'KimKangMin':
        const filterData = data.filter((item) => item.writedTo === '김강민');
        setData(filterData);
        console.log(data);
    }
  };
  return (
    <div>
      <Header />
      <NavParents>
        <NavUl>
          <Navli>
            <Link to="/KimKangMin">
              <NavStyleButton onClick={() => onClickHandler('KimKangMin')}>
                김강민
              </NavStyleButton>
            </Link>
          </Navli>
          <Navli>
            <Link to="/KimGunWu">
              <NavStyleButton>김건우</NavStyleButton>
            </Link>
          </Navli>
          <Navli>
            <Link to="/ParkJaeHoon">
              <NavStyleButton>박재훈</NavStyleButton>
            </Link>
          </Navli>
          <Navli>
            <Link to="/JangSungYup">
              <NavStyleButton>장성엽</NavStyleButton>
            </Link>
          </Navli>
        </NavUl>
      </NavParents>
      {/* 제출 폼 영역 */}
      <Form data={data} setData={setData} />
    </div>
  );
}

export default Main;

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
const NavStyleButton = styled.button`
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
