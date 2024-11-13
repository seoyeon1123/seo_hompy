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
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // 요소가 10%만 보이더라도 활성화
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll('#project, #education, #connect');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: 'project' | 'education' | 'connect') => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div>
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />

      <div id="project" className="h-full">
        <Project />
      </div>
      <div id="education" className="h-full">
        <Education />
      </div>
      <div id="connect" className="h-full">
        <Connect />
      </div>
    </div>
  );
};

export default NavComponent;
