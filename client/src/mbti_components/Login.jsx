import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {
  const registerIdInput = useRef();
  const registerPwInput = useRef();

  const dispatch = useDispatch();
  const registerUser = async () => {
    if (!registerIdInput.current.value || !registerPwInput.current.value)
      return alert('필수 값 입력 바람');

    const resRegister = await fetch('http://localhost:8001/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      }),
    });
    if (resRegister.status !== 200) return alert(await resRegister.json());
  };
  return (
    <>
      <h1>로그인 파트 입니다.</h1>
      아이디 <input type="text" ref={registerIdInput} />
      <br />
      <br />
      비밀번호 : <input type="password" ref={registerPwInput} />
      <br />
      <br />
      <button onClick={registerUser}>로그인</button>{' '}
      <Link to="">카카오 로그인</Link>
      <br />
      <br />
      <h1>회원가입 파트 입니다.</h1>
      아이디 <input type="text" />
      <br />
      <br />
      비밀번호 : <input type="password" />
      <br />
      <br />
      <button>회원가입</button> <Link to="">카카오 회원가입</Link>
    </>
  );
}
