import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function Practice() {
  const [buttonName, setbuttonName] = useState('1번');
  const onChange = () => {
    if (buttonName === '1번') {
      setbuttonName('2번');
    } else {
      setbuttonName('1번');
    }
  };

  return (
    <>
      {buttonName === '1번' ? (
        <PracticeTwo text={buttonName} />
      ) : (
        <PracticeOne text={buttonName} />
      )}
      {/* {buttonName === '1번' && <PracticeTwo />}
      {buttonName === '2번' && <PracticeOne />} */}
      <button onClick={onChange}>{buttonName}</button>
    </>
  );
}
