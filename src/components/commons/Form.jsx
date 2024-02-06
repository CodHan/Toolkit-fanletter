import React, { useState } from 'react';
import uuid from 'react-uuid';
import * as S from '../style/commonsStyle/Form.style';
import { useDispatch } from 'react-redux';
import { addLetter } from '../../redux/modules/letters';

function Form() {
  // const { data, setData } = useContext(DataContext);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [member, setMember] = useState('김강민');

  const nameValue = (e) => {
    setName(e.target.value);
  };
  const contentValue = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newData = {
      createdAt: date.toLocaleString(),
      nickname: name,
      avatar:
        'https://e7.pngegg.com/pngimages/1010/196/png-clipart-social-networking-site-default-profile-forehead-silhouette-face-monochrome-contacts-face-monochrome.png',
      content: content,
      writedTo: member,
      id: uuid(),
    };
    dispatch(addLetter(newData));
    // setData([...data, newData]);

    setName('');
    setContent('');
  };
  const selectMember = (e) => {
    setMember(e.target.value);
  };

  return (
    <>
      <S.FormParent onSubmit={onSubmit}>
        <S.Formdiv>
          닉네임:
          <input
            value={name}
            type="text"
            placeholder="최대 20글자까지 작성할 수 있습니다."
            onChange={nameValue}
          />
        </S.Formdiv>
        <S.Formdiv>
          내용 :
          <S.ContentInputStyle
            value={content}
            type="text"
            placeholder="최대 100글자까지 작성할 수 있습니다."
            onChange={contentValue}
          />
        </S.Formdiv>
        <S.Formdiv>
          <label>누구에게 보낼까요</label>
          <select onChange={selectMember}>
            <option value={'김강민'}>김강민</option>
            <option value={'김건우'}>김건우</option>
            <option value={'박재훈'}>박재훈</option>
            <option value={'장성엽'}>장성엽</option>
          </select>
        </S.Formdiv>
        <S.FormStyledButton type="submit">팬레터 등록</S.FormStyledButton>
      </S.FormParent>
    </>
  );
}

export default Form;
