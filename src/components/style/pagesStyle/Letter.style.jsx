import styled from 'styled-components';

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const Letter = styled.li`
  display: flex;
  width: 350px;
  height: 150px;
  flex-direction: column;
  padding: 20px;
  border: 3px solid black;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;
export const Writer = styled.ul`
  display: flex;
`;
export const NameAndTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  gap: 10px;
`;
export const BodyText = styled.p`
  background-color: #0c6fcd;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BoxStyle = styled.ul`
  width: 400px;
  height: 300px;
  margin: 5px auto 0 auto;
  background-color: aquamarine;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
