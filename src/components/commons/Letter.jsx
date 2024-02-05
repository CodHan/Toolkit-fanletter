import { DataContext } from 'components/context/DataContext';
import React, { useContext } from 'react';
import * as S from '../style/pagesStyle/Letter.style';
import { useNavigate } from 'react-router-dom';

function Letter({ selctName }) {
  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  const findData = data.filter((item) => item.writedTo === selctName);
  return (
    <S.BoxStyle>
      {findData.map((item) => {
        return (
          <div key={item.id}>
            {/*  cardbox굳이 써야하나 */}
            {item.length === 0 ? (
              <p>💪🏻빨리써라 덤벨들고 찾아 간다💪🏻</p>
            ) : (
              <S.Letter onClick={() => navigate(`/detail/${item.id}`)}>
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
            )}
          </div>
        );
      })}
    </S.BoxStyle>
  );
}

export default Letter;
