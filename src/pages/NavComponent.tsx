import { useState, useEffect, useRef } from 'react';
import main from '../assets/main/profile.png';

const NavComponent = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null); // 현재 활성화된 섹션
  const navRef = useRef<HTMLDivElement>(null);
  const originalNavPosition = useRef<number | null>(null); // 네비게이션의 원래 위치를 추적

  const sections = ['main', 'about', 'project', 'education', 'connect'];

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();

        // 네비게이션의 원래 위치를 추적
        if (originalNavPosition.current === null) {
          originalNavPosition.current = rect.top;
        }

        const currentScrollY = window.scrollY;

        // 네비게이션이 최상단에 도달했을 때 고정
        if (rect.top <= 0 && !fixedNav) {
          setFixedNav(true); // 최상단에 도달하면 고정
        }

        // 네비게이션이 원래 위치로 돌아오면 고정 풀기
        if (originalNavPosition.current !== null && currentScrollY <= originalNavPosition.current && fixedNav) {
          setFixedNav(false); // 원래 위치에 도달하면 고정 해제
        }

        // 활성화된 섹션 감지
        const windowHeight = window.innerHeight;
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const sectionRect = element.getBoundingClientRect();
            if (sectionRect.top >= 0 && sectionRect.top <= windowHeight / 2) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, fixedNav]);

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
      <div className="flex flex-row justify-center items-center gap-8 py-4 bg-opacity-5 backdrop-blur-md rounded-full *:text-white font-bold w-[400px] mx-auto shadow-md">
        <div className={`text-base cursor-pointer `} onClick={() => scrollToSection('main')}>
          <img src={main} alt="메인사진" className="size-8" />
        </div>

        <div
          className={`lg:text-base text-sm cursor-pointer ${
            activeSection === 'about'
              ? 'text-white bg-[#FFA726] rounded-full px-2 py-1 border border-[#fbe797]'
              : 'text-black'
          }`}
          onClick={() => scrollToSection('about')}
        >
          About
        </div>

        <div
          className={`lg:text-base text-sm cursor-pointer ${
            activeSection === 'project'
              ? 'text-white bg-[#FFA726] rounded-full px-2 py-1 border border-[#fbe797]'
              : 'text-black'
          }`}
          onClick={() => scrollToSection('project')}
        >
          Project
        </div>

        <div
          className={`lg:text-base text-sm cursor-pointer ${
            activeSection === 'education'
              ? 'text-white  bg-[#FFA726] rounded-full px-2 py-1 border border-[#fbe797]'
              : 'text-black'
          }`}
          onClick={() => scrollToSection('education')}
        >
          Education
        </div>

        <div
          className={`lg:text-base text-sm cursor-pointer ${
            activeSection === 'connect'
              ? 'text-white   bg-[#FFA726] rounded-full px-2 py-1 border border-[#fbe797]'
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
