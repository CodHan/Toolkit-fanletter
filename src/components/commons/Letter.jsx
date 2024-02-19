import * as S from '../style/pagesStyle/Letter.style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Letter({ selctName }) {
  const data = useSelector((state) => state.letters);
  const navigate = useNavigate();
  const filterdData = data.filter((item) => item.writedTo === selctName);
  return (
    <>
      {filterdData.map((item) => {
        return (
          <S.BoxStyle key={item.id}>
            <div>
              {/*  cardbox굳이 써야하나 */}
              {/* 17번줄 안나옴 */}
              {item === null ? (
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
          </S.BoxStyle>
        );
      })}
    </>
  );
}

export default Letter;
