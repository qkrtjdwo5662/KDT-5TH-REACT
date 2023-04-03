import React, { useEffect } from 'react';
import Header from './Header';

export default function Board() {
  useEffect(() => {
    console.log('board 마운트 체크 ');
  });
  return (
    <>
      <Header />
      <h1>게시판 페이지 </h1>;
    </>
  );
}
