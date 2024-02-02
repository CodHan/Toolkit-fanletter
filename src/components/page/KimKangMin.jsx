import CardBox from 'components/commons/CardBox';
import React from 'react';
import * as S from './page_style/Page.style';
import * as NS from './page_style/Nav.style';
import { useNavigate } from 'react-router-dom';
import Header from 'components/commons/Header';
import Form from 'components/commons/Form';
import { Link } from 'react-router-dom';

function KimKangMin({ data, setData }) {
  const filterData = data.filter((item) => item.writedTo === '김강민');
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <NS.NavParents>
        <NS.NavUl>
          <NS.Navli>
            <Link to="/">
              <NS.NavStyleButton>김강민</NS.NavStyleButton>
            </Link>
          </NS.Navli>
          <NS.Navli>
            <Link to="/KimGunWu">
              <NS.NavStyleButton>김건우</NS.NavStyleButton>
            </Link>
          </NS.Navli>
          <NS.Navli>
            <Link to="/ParkJaeHoon">
              <NS.NavStyleButton>박재훈</NS.NavStyleButton>
            </Link>
          </NS.Navli>
          <NS.Navli>
            <Link to="/JangSungYup">
              <NS.NavStyleButton>장성엽</NS.NavStyleButton>
            </Link>
          </NS.Navli>
        </NS.NavUl>
      </NS.NavParents>
      <Form data={data} setData={setData} />
      <CardBox>
        <ul>
          {/*  cardbox굳이 써야하나 */}
          {filterData.length === 0 ? (
            <p>💪🏻빨리써라 덤벨들고 찾아 간다💪🏻</p>
          ) : (
            data
              .filter((item) => item.writedTo === '김강민')
              .map((item) => {
                return (
                  <S.Letter
                    onClick={() => navigate(`/detail/${item.id}`)}
                    data={item}
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

export default KimKangMin;
