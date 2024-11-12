// NavComponent.tsx
import { useEffect, useState } from 'react';
import Connect from './Connect';
import Education from './Education';
import Project from './Project';
import Navigation from '../layout/Navigation';

const NavComponent = () => {
  const [activeSection, setActiveSection] = useState<'project' | 'education' | 'connect'>('project');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['project', 'education', 'connect'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section as 'project' | 'education' | 'connect');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 섹션으로 강제로 스크롤하는 함수
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId as 'project' | 'education' | 'connect'); // 클릭된 섹션을 active로 설정
    }
  };

  return (
    <div>
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />

      <div id="project" className="h-screen">
        <Project />
      </div>
      <div id="education" className="h-screen ">
        <Education />
      </div>
      <div id="connect" className="h-screen">
        <Connect />
      </div>
    </div>
  );
};

export default NavComponent;
