import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from '../page/page_style/Detail.style';
import * as A from '../page/page_style/Page.style';
import * as B from '../page/page_style/Nav.style';
import { useNavigate } from 'react-router-dom';

function Detail({ data, setData }) {
  const [retouch, setRetouch] = useState(false);
  const [update, setUpdate] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const filterData = data.filter((item) => item.id === id);
  //뒤로가기
  const backBtnHendler = () => {
    navigate(-1);
  };
  // 삭제버튼
  const deleteHendler = () => {
    const deleateData = data.filter((item) => item.id !== id);
    setData(deleateData);
    navigate(-1);
  };
  //수정버튼
  const retouchHendler = () => {
    setRetouch(true);
  };
  //수정완료버튼
  const submitMessage = () => {
    window.confirm('이대로 수정 하시겠습니까?');
    retouchSubmit();
  };
  const retouchSubmit = () => {
    if (!update) {
      return alert('수정 된 부분이 없습니다.'), setRetouch(false);
    }

    // if (update) {
    //   return submitMessage;
    // }
    else if (update) {
      setData((prevData) => {
        return prevData.map((item) => {
          item.content = update;
          return item;
        });
      });
      window.confirm('수정되었습니다');
      navigate(-1);
    }
    // if (!submitMessage) {
    //   return alert('수정 된 부분이 없습니다.');
    // }
  };

  return filterData.map((item) => {
    return (
      <S.Container>
        <S.ToHome onClick={backBtnHendler}>뒤로가기</S.ToHome>
        <S.DetailWrapper>
          <div>
            <S.LetterHeader>
              <S.UserWrapper>
                <A.Img src={item.avatar} alt="유저이미지" />
                <S.StyleSpan>{item.nickname}</S.StyleSpan>
              </S.UserWrapper>
              <S.Time>
                <S.StyleSpan>{item.createdAt}</S.StyleSpan>
              </S.Time>
            </S.LetterHeader>
            <S.WriteTo>To:{item.writedTo}</S.WriteTo>
            {retouch === true ? (
              <>
                <S.EditingTextArea
                  defaultValue={item.content}
                  onChange={(e) => setUpdate(e.target.value)}
                />
              </>
            ) : (
              <S.ContentText>{item.content}</S.ContentText>
            )}
          </div>
          <S.Buttons>
            {retouch === true ? (
              <B.NavStyleButton onClick={submitMessage}>
                수정완료
              </B.NavStyleButton>
            ) : (
              <>
                <B.NavStyleButton onClick={retouchHendler}>
                  수정
                </B.NavStyleButton>
                <B.NavStyleButton onClick={deleteHendler}>
                  삭제
                </B.NavStyleButton>
              </>
            )}
          </S.Buttons>
        </S.DetailWrapper>
      </S.Container>
    );
  });
}

export default Detail;
