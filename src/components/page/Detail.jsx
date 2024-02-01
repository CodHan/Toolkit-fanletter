import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail({ data, setData }) {
  const { id } = useParams();

  return (
    <Container>
      <ToHome>{/* 홈버튼 */}</ToHome>
      <DetailWrapper>
        <div>
          <LetterHeader>
            <UserWrapper>
              {/* 아바타 */}
              <NickName>{/* 닉네임 */}</NickName>
            </UserWrapper>
            <Time>{/* 시간 */}</Time>
          </LetterHeader>
          <WriteTo>To:{/* writedTo */}</WriteTo>
          {/* 수정버튼 true일때 textArea로직 */}
          <ContentText>{/* Content */}</ContentText>
        </div>
        <Buttons>{/* true=수정완료,false=수정 + 삭제버튼 */}</Buttons>
      </DetailWrapper>
    </Container>
  );
}

export default Detail;

const ToHome = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: black;
  box-shadow: 10px 5px 5px black;
  color: white;
  width: 100px;
  height: 50px;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  background-color: gray;
  color: white;
  padding: 16px;
`;

const LetterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Time = styled.time`
  font-size: 16px;
`;

const NickName = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const WriteTo = styled.p`
  padding-top: 12px;
  font-size: 24px;
  font-weight: 500;
`;

const ContentText = styled.p`
  background-color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0;
  height: 275px;
`;
const EditingTextArea = styled.textarea`
  background-color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0;
  color: white;
  width: 100%;
  height: 275px;
`;

const Buttons = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
