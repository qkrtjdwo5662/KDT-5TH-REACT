import React from 'react';
import dog from '../images/dog.png';

export default function ImgComponent() {
  return (
    <>
      <h1>이미지 테스트</h1>
      <div>public 폴더 접근</div>
      <img src="./images/dog.png" alt="개" />
      <hr />
      <div>src 폴더 접근</div>
      <img src={dog} alt="개" />
    </>
  );
}
