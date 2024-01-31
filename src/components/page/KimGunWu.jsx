import CardBox from 'components/commons/CardBox';
import React from 'react';

function KimGunWu({ data }) {
  const filterData = data.filter((item) => item.writedTo === '김건우');
  return (
    <CardBox>
      <div>KimGunWu</div>
    </CardBox>
  );
}

export default KimGunWu;
