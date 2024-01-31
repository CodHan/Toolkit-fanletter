import CardBox from 'components/commons/CardBox';
import React from 'react';

function ParkJaeHoon({ data }) {
  const filterData = data.filter((item) => item.writedTo === '박재훈');
  return (
    <CardBox>
      <div>ParkJaeHoon</div>
    </CardBox>
  );
}

export default ParkJaeHoon;
