import styled from 'styled-components';

export const ToHome = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: black;
  box-shadow: 10px 5px 5px black;
  color: white;
  width: 100px;
  height: 50px;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  background-color: gray;
  color: white;
  padding: 16px;
`;

export const LetterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Time = styled.time`
  font-size: 16px;
`;

export const NickName = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

export const WriteTo = styled.p`
  padding-top: 12px;
  font-size: 24px;
  font-weight: 500;
`;

export const ContentText = styled.p`
  background-color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0;
  height: 275px;
`;
export const EditingTextArea = styled.textarea`
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

export const Buttons = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
