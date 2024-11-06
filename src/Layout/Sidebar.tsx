import profile from '../assets/profile.jpg';
import PageViewCounter from '../components/PageViewCount';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import TodayIs from '../components/TodayIs';

const links = [
  {
    href: 'https://velog.io/@leeeee/posts',
    icon: faBook,
    color: 'text-green-600',
    label: 'Velog',
  },
  {
    href: 'https://github.com/seoyeon1123',
    icon: faGithub,
    color: 'text-gray-600',
    label: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/s___yexn',
    icon: faInstagram,
    color: 'text-pink-600',
    label: 'Instagram',
  },
];

const Sidebar = () => {
  return (
    <div className="bg-neutral-100 flex flex-col text-center p-7 gap-4 rounded-lg">
      <div>
        TODAY: <PageViewCounter />
      </div>
      <div className="bg-white h-full rounded-lg flex flex-col justify-around">
        <div className="bg-white p-3 rounded-lg">
          <div className="flex flex-col gap-3">
            <img
              src={profile}
              alt="프로필 이미지"
              className="w-60 h-60 rounded-lg mx-auto border-2 border-neutral-200 border-dashed"
            />

            <div className="flex justify-center items-center gap-4 border-2 border-neutral-300 p-2 rounded-md">
              <TodayIs />
            </div>

            <p className="text-md p-2 rounded-md pb-2 text-shadow-sm shadow-yellow-200">
              안녕하세요 <br /> 예비 프론트엔드 개발자 이서연의 <br />
              블로그에 놀러오신 <br />
              여러분 환영합니다!
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg flex flex-col gap-2">
          <h2 className="text-start">연락처 및 SNS 링크</h2>
          <div className="border-t border-gray-300 my-2 border-dashed" />
          <div className="flex flex-row gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline flex items-center"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} className={`${link.color} size-8`} />
              </a>
            ))}
          </div>
          <div className="text-start *:text-neutral-400 *:text-sm">
            <p className=""> ・ 이메일 : lsy_0906@naver.com</p>
            <p> ・ 전화번호 : 문의주세요 :) </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
