import { Link } from 'react-router-dom';
import '../index.css'; // 스타일을 불러옵니다.

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center justify-center gap-2">
        <li className="nav-item flex items-center justify-center">
          <Link to="/">홈</Link>
        </li>
        <li className="nav-item flex items-center justify-center">
          <Link to="/project">프로젝트</Link>
        </li>
        <li className="nav-item flex items-center justify-center">
          <Link to="/guestbook">방명록</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
