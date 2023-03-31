import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:8001/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return 'fail';

    const data = await resFetch.json();
    console.log(data);
    setDataArr((cur) => data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ProfileComponent
        name={dataArr[0].name}
        age={dataArr[0].age}
        nickName={dataArr[0].nickName}
      />
    </>
  );
}
