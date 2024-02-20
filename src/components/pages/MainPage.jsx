import Form from 'components/commons/Form';
import Header from 'components/commons/Header';
import React, { useEffect, useState } from 'react';
import Letter from '../commons/Letter';
import Nav from 'components/commons/Nav';
import { useDispatch } from 'react-redux';
import jwt from '../../axios/jwt';
import { login } from '../../redux/modules/authSlice';

function MainPage() {
  const [selctName, setSelectName] = useState('김강민');
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userResponse = await jwt.get('user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
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
