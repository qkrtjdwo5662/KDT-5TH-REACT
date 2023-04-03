import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="App">
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <Link to="/">link to 홈 페이지 이동</Link>
          </li>
          <li>
            <a href="/profile">a 태그 프로필 페이지 이동</a>
            <br />
            <Link to="/profile">link to 프로필 페이지 이동</Link>
          </li>
          <li>
            <a href="/board">a 태그 게시판 페이지 이동</a>
            <br />
            <Link to="/board">link to 게시판 페이지 이동</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
