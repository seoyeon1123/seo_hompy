import { useState, useEffect, useRef } from 'react';
import main from '../assets/main/profile.png';

const NavComponent = () => {
  const [fixedNav, setFixedNav] = useState(false); // 네비게이션 고정 여부
  const [activeSection, setActiveSection] = useState<string | null>(null); // 현재 활성화된 섹션
  const navRef = useRef<HTMLDivElement>(null); // 네비게이션 바의 ref
  const originalOffset = useRef(0); // 네비게이션 바의 초기 위치 저장

  const sections = ['main', 'project', 'education', 'connect'];

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;

        if (originalOffset.current === 0) {
          originalOffset.current = rect.top + scrollTop;
        }

        if (scrollTop >= originalOffset.current) {
          setFixedNav(true);
        } else {
          setFixedNav(false);
        }

        const windowHeight = window.innerHeight;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= windowHeight / 4) {
              setActiveSection(sectionId);
              break;
            }
          }
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
      className={`transition-all ${fixedNav ? 'fixed top-0 left-0 w-full z-50' : 'absolute bg-transparent'}`}
    >
      <div className="flex flex-row justify-center items-center gap-8 py-4  bg-opacity-5 backdrop-blur-md rounded-full *:text-white font-bold w-[400px] mx-auto shadow-md">
        <div className={`text-base cursor-pointer `} onClick={() => scrollToSection('main')}>
          <img src={main} alt="메인사진" className="size-8" />
        </div>

        <div
          className={`text-base cursor-pointer ${
            activeSection === 'project'
              ? 'text-white bg-[#fbe797] rounded-full px-2 py-1 border border-[#fbe797]'
              : 'text-black'
          }`}
          onClick={() => scrollToSection('project')}
        >
          Project
        </div>

        <div
          className={`text-base cursor-pointer ${
            activeSection === 'education'
              ? 'text-white bg-[#fbe797] rounded-full px-2 py-1 border border-[#fbe797]'
              : 'text-black'
          }`}
          onClick={() => scrollToSection('education')}
        >
          Education
        </div>

        <div
          className={`text-base cursor-pointer ${
            activeSection === 'connect'
              ? 'text-white  bg-[#fbe797] rounded-full px-2 py-1 border border-[#fbe797]'
              : 'text-black'
          }`}
          onClick={() => scrollToSection('connect')}
        >
          Connect
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
