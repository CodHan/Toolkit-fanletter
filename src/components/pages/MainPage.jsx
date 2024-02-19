import Form from 'components/commons/Form';
import Header from 'components/commons/Header';
import React, { useEffect, useState } from 'react';
import Letter from '../commons/Letter';
import Nav from 'components/commons/Nav';
import api from '../../axios/api';
import { useDispatch } from 'react-redux';
import { init } from '../../redux/modules/letters';
import jwt from '../../axios/jwt';
import { login } from '../../redux/modules/authSlice';

function MainPage() {
  const [selctName, setSelectName] = useState('김강민');
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        //병렬로 db데이터와user데이터 처리
        const [lettersResponse, userResponse] = await Promise.all([
          api.get('/letters'),
          jwt.get('user', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);
        //각각 응답 처리
        dispatch(init(lettersResponse.data));
        dispatch(login(userResponse.data));
      } catch (error) {
        console.error('에러가 발생했습니다', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Nav setSelectName={setSelectName} />
      <Form />
      <Letter selctName={selctName} />
    </div>
  );
}

export default MainPage;
