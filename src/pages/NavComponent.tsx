import { useState, useEffect, useRef } from 'react';
import velog from '../assets/navigation/image.png';
import github from '../assets/skill/Github_Dark.svg';

const NavComponent = () => {
  const [fixedNav, setFixedNav] = useState(false); // 네비게이션 고정 여부
  const navRef = useRef<HTMLDivElement>(null); // 네비게이션 바의 ref

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        // 네비게이션 바의 위치 계산
        const rect = navRef.current.getBoundingClientRect();
        // 네비게이션 바가 화면의 최상단에 도달하면 fixedNav 상태를 true로 변경
        if (rect.top <= 0) {
          setFixedNav(true); // 고정되도록 설정
        } else {
          setFixedNav(false); // 원래 위치로 돌아감
        }
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      ref={navRef}
      className={`transition-all ${fixedNav ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <div className="flex justify-center items-center gap-8 py-4 bg-white rounded-full text-black font-bold bg-opacity-5 w-[500px] mx-auto">
        <div className="flex flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/seoyeon1123"
            className="text-white hover:text-[#6A9C89] hover:text-shadow-lg transition"
          >
            <img src={github} alt="github" className="size-12" />
          </a>
          <a
            href="https://velog.io/@leeeee/posts"
            className="text-white hover:text-[#6A9C89] hover:text-shadow-lg transition"
          >
            <img src={velog} alt="벨로그" className="size-10" />
          </a>
        </div>
        <div className="text-xl cursor-pointer" onClick={() => scrollToSection('project')}>
          Project
        </div>
        <div className="text-xl cursor-pointer" onClick={() => scrollToSection('education')}>
          Education
        </div>
        <div className="text-xl cursor-pointer" onClick={() => scrollToSection('connect')}>
          Connect
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
