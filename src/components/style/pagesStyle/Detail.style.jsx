import styled from 'styled-components';

export const ToHome = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: #0c6fcd;
  box-shadow: 10px 5px 5px black;
  border: 1px solid #0c6fcd;
  border-radius: 3px;
  color: pink;
  width: 100px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background: red;
    transition: 0.2s;
  }
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
  border-radius: 5px;
  border: 1px solid #0c6fcd;
  background-color: #0c6fcd;
  box-shadow: 10px 5px 5px pink;
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
  font-size: 25px;
  margin-top: 5px;
`;

export const StyleSpan = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: pink;
`;

export const WriteTo = styled.p`
  padding-top: 12px;
  font-size: 24px;
  font-weight: 500;
  color: pink;
`;

export const ContentText = styled.p`
  background-color: #0c6fcd;
  padding: 16px;
  font-size: 15px;
  line-height: 48px;
  border: 3px solid pink;
  border-radius: 10px;
  margin: 24px 0;
  height: 275px;
  color: pink;
`;
export const EditingTextArea = styled.textarea`
  background-color: #0c6fcd;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border: 3px solid pink;
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
