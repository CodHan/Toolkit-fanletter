import CardBox from 'components/commons/CardBox';
import React from 'react';

function JangSungYup({ data }) {
  const filterData = data.filter((item) => item.writedTo === '장성엽');
  return (
    <CardBox>
      <div>JangSungYup</div>
    </CardBox>
  );
}

export default JangSungYup;
