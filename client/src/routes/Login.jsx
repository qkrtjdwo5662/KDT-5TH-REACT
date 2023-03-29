import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const inputId = useRef();
  const inputPassword = useRef();

  const movePage = useNavigate();

  const userCheck = () => {
    const user = props.USER.find((arr) => {
      return arr.ID === inputId.current.value;
    });
    if (!user) return movePage('/fail');
    if (user.PASSWORD === inputPassword.current.value) {
      return movePage('/success');
    } else console.log('fail');
  };

  return (
    <div className="container-lg d-flex flex-column align-items-center bg-light w-25 mt-5 p-5 rounded-3">
      <h2>로그인</h2>
      <div className="w-75">
        <div className="mt-3 id">
          <label className="mb-2" for="input-email">
            아이디
          </label>
          <input
            ref={inputId}
            type="text"
            name="id"
            className="form-control"
            id="input-email"
            placeholder="아이디를 입력하세요"
            required
          />
        </div>
        <div className="mt-3 password">
          <label className="mb-2" for="input-pw">
            비밀번호
          </label>
          <input
            ref={inputPassword}
            type="password"
            name="password"
            className="form-control"
            id="input=pw"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <div className="d-flex justify-content-center mt-4 password">
          <button className="btn btn-primary" onClick={userCheck}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
