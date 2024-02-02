import styled from 'styled-components';
export const FormParent = styled.form`
  width: 350px;
  height: 150px;
  margin: 5px auto 0 auto;
  text-align: center;
  background-color: aquamarine;
  border-radius: 10px;
  padding: 5px;
`;
export const Formdiv = styled.div`
  width: 300px;
  height: 100px
  display: flex;
  color: #0c6fcd;
  font-size: 15px;
  margin: 5px auto 0 auto;
`;
export const FormStyledButton = styled.button`
  background-color: #0c6fcd;
  border: 1px solid #0c6fcd;
  border-radius: 3px;
  color: #cd0c22;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.2s;
  }
`;
export const ContentInputStyle = styled.input`
  width: 250px;
  height: 50px;
`;
