import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  return <div>Detail 페이지 입니다 ID:{id}</div>;
}

export default Detail;
