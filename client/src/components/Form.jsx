const Form = () => {
  return(
    <form action="/mongoLogin" method="POST" class="w-75">
      <div class="mt-3 id">
        <label class="mb-2" for="input-email">아이디</label>
        <input type="text" name="id" class="form-control" id="input-email" placeholder="아이디를 입력하세요" required />
      </div>
      <div class="mt-3 password">
        <label class="mb-2" for="input-pw">비밀번호</label>
        <input type="password" name="password" class="form-control" id="input=pw" placeholder="비밀번호를 입력하세요" required />
      </div>
      <div class="d-flex justify-content-center mt-4 password">
        <button type="submit" class="btn btn-primary">로그인</button>
      </div>
    </form>
  )
}

export default Form