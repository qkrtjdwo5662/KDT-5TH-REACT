const LoginForm = () => {
  return(
    <div className="container-lg d-flex flex-column align-items-center bg-light w-25 mt-5 p-5 rounded-3">
      <form action="/login" method="POST" class="w-75">
        <div className="mt-3 id">
          <label className="mb-2" for="input-email">아이디</label>
          <input type="text" name="id" class="form-control" id="input-email" placeholder="아이디를 입력하세요" required />
        </div>
        <div className="mt-3 password">
          <label className="mb-2" for="input-pw">비밀번호</label>
          <input type="password" name="password" className="form-control" id="input=pw" placeholder="비밀번호를 입력하세요" required />
        </div>
        <div className="d-flex justify-content-center mt-4 password">
          <button type="submit" className="btn btn-primary">로그인</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm