import CardBox from 'components/commons/CardBox';
import React from 'react';

function KimKangMin({ data }) {
  const filterData = data.filter((item) => item.writedTo === '김강민');
  return (
    <CardBox>
      <div>KimKangMin</div>
    </CardBox>
  );
}

export default KimKangMin;
