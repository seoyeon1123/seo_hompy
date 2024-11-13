import { useEffect, useState } from 'react';
import Connect from './Connect';
import Education from './Education';
import Project from './Project';
import Navigation from '../layout/Navigation';

const NavComponent = () => {
  const [activeSection, setActiveSection] = useState<'project' | 'education' | 'connect'>('project');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as 'project' | 'education' | 'connect';
          setActiveSection(sectionId);
        }
      });
    };

    const options = {
      root: null, // viewport를 root로 설정
      rootMargin: '0px',
      threshold: 0.6, // 요소가 60% 보일 때 활성화
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // 관찰할 섹션들을 가져와서 observer에 등록
    const sections = document.querySelectorAll('#project, #education, #connect');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // 컴포넌트 언마운트 시 observer 해제
    };
  }, []);

  const scrollToSection = (sectionId: 'project' | 'education' | 'connect') => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId); // 클릭된 섹션을 active로 설정
    }
  };

  return (
    <div>
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />

      <div id="project" className="h-screen">
        <Project />
      </div>
      <div id="education" className="h-screen">
        <Education />
      </div>
      <div id="connect" className="h-screen">
        <Connect />
      </div>
    </div>
  );
};

export default NavComponent;
