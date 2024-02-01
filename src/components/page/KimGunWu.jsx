import CardBox from 'components/page/CardBox';
import React from 'react';
import * as S from './Page.style';
import { Link } from 'react-router-dom';
import Header from 'components/commons/Header';
import Form from 'components/commons/Form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function KimGunWu({ data, setData }) {
  const filterData = data.filter((item) => item.writedTo === '김건우');
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <NavParents>
        <NavUl>
          <Navli>
            <Link to="/KimKangMin">
              <NavStyleButton>김강민</NavStyleButton>
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
      <Form data={data} setData={setData} />
      <CardBox>
        <ul>
          {filterData.length === 0 ? (
            <p>아무도 안씀</p>
          ) : (
            data
              .filter((item) => item.writedTo === '김건우')
              .map((item) => {
                return (
                  <S.Letter
                    id={item.id}
                    onClick={() => navigate(`/detail/${item.id}`)}
                    data={data}
                  >
                    <S.Writer>
                      <div>
                        <S.Img src={item.avatar} alt="유저이미지" />
                      </div>
                      <S.NameAndTime>
                        <div>{item.nickname}</div>
                        <div>{item.createdAt}</div>
                      </S.NameAndTime>
                    </S.Writer>

                    <S.BodyText>{item.content}</S.BodyText>
                  </S.Letter>
                );
              })
          )}
        </ul>
      </CardBox>
    </div>
  );
}

export default KimGunWu;
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
