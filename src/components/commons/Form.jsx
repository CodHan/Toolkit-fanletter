import NavButton from 'components/commons/NavButton';
import React from 'react';
import styled from 'styled-components';

function Form() {
  return (
    <>
      <FormParent>
        <Formdiv>
          닉네임:
          <input
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
          />
        </Formdiv>
        <Formdiv>
          내용 :
          <ContentInputStyle
            type="text"
            placeholder="최대 100글자까지 작성할 수 있습니다."
          />
        </Formdiv>
        <Formdiv>
          <label>누구에게 보낼까요</label>
          <select>
            <option>김강민</option>
            <option>김건우</option>
            <option>박재훈</option>
            <option>장성엽</option>
          </select>
        </Formdiv>
        <FormStyledButton>팬레터 등록</FormStyledButton>
      </FormParent>
    </>
  );
}

export default Form;

const FormParent = styled.form`
  width: 350px;
  height: 150px;
  margin: 5px auto 0 auto;
  text-align: center;
  background-color: aquamarine;
  border-radius: 10px;
  padding: 5px;
`;
const Formdiv = styled.div`
  width: 300px;
  height: 100px
  display: flex;
  color: #0c6fcd;
  font-size: 15px;
  margin: 5px auto 0 auto;
`;
const FormStyledButton = styled.button`
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
const ContentInputStyle = styled.input`
  width: 250px;
  height: 50px;
`;
