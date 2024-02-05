import Form from 'components/commons/Form';
import Header from 'components/commons/Header';
import React, { useState } from 'react';
import Letter from '../commons/Letter';
import Nav from 'components/commons/Nav';

function MainPage() {
  const [selctName, setSelectName] = useState('김강민');
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
