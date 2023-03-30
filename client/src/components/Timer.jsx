import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Timer 실행 중</div>;
}
