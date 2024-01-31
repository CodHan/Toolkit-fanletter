import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

function Form({ data, setData }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [member, setMember] = useState(null);

  const nameValue = (e) => {
    setName(e.target.value);
  };
  const contentValue = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      createdAt: new Date(),
      nickname: name,
      avatar:
        'https://e7.pngegg.com/pngimages/1010/196/png-clipart-social-networking-site-default-profile-forehead-silhouette-face-monochrome-contacts-face-monochrome.png',
      content: content,
      writedTo: member,
      id: uuid(),
    };
    setData([...data, newData]);
    setName('');
    setContent('');
    setMember('김강민'); //다시 김강민으로 돌리는게 안됨
  };
  const selectMember = (e) => {
    setMember(e.target.value);
  };

  return (
    <>
      <FormParent onSubmit={onSubmit}>
        <Formdiv>
          닉네임:
          <input
            value={name}
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            onChange={nameValue}
          />
        </Formdiv>
        <Formdiv>
          내용 :
          <ContentInputStyle
            value={content}
            type="text"
            placeholder="최대 100글자까지 작성할 수 있습니다."
            onChange={contentValue}
          />
        </Formdiv>
        <Formdiv>
          <label>누구에게 보낼까요</label>
          <select onChange={selectMember}>
            <option value={'김강민'}>김강민</option>
            <option value={'김건우'}>김건우</option>
            <option value={'박재훈'}>박재훈</option>
            <option value={'장성엽'}>장성엽</option>
          </select>
        </Formdiv>
        <FormStyledButton type="submit">팬레터 등록</FormStyledButton>
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
