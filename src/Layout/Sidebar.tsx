// Sidebar.jsx
import profile from '../../public/profile.jpg';
import PageViewCounter from '../components/PageViewCount';

const Sidebar = () => {
  return (
    <div className="bg-neutral-300 h-3/4 w-1/5 fixed top-0 left-0 flex flex-col text-center p-3 gap-4">
      <div>
        TODAY: <PageViewCounter />
      </div>
      <div className="bg-white p-3 rounded-lg">
        <div>
          <img src={profile} alt="프로필 이미지" className="size-60 rounded-full mx-auto" />
          <h1 className="text-lg font-bold mt-3 text-purple-600">이서연</h1>
          <p className="text-sm mt-2 bg-neutral-200 p-2 rounded-md">
            안녕하세요. <br /> 예비 프론트엔드 개발자 이서연 입니다.
          </p>
        </div>
      </div>
      <div className="bg-white p-3 rounded-lg">
        <h2 className="text-start">공부 흔적</h2>
        <div className="border-t border-gray-300 my-2 border-dashed" />
        <p className="flex flex-row gap-1">
          Velog :
          <a
            href="https://velog.io/@leeeee/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:underline"
          >
            https://velog.io/@leeeee/posts
          </a>
        </p>
        <p className="flex flex-row gap-1">
          Github :
          <a
            href="https://github.com/seoyeon1123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:underline"
          >
            https://github.com/seoyeon1123
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
