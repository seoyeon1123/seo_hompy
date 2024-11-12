// Navigation.tsx
interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: 'project' | 'education' | 'connect';
}

const Navigation = ({ scrollToSection, activeSection }: NavigationProps) => {
  return (
    <div className="bg-[#16423C] text-[#E9EFEC] p-8 sticky top-0 z-20">
      <div className="flex gap-4 *:text-3xl">
        <button
          onClick={() => scrollToSection('project')}
          className={`${activeSection === 'project' ? 'text-[#E9EFEC]' : 'text-gray-500'}`}
        >
          Project
        </button>
        <button
          onClick={() => scrollToSection('education')}
          className={`${activeSection === 'education' ? 'text-[#E9EFEC]' : 'text-gray-500'}`}
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection('connect')}
          className={`${activeSection === 'connect' ? 'text-[#E9EFEC]' : 'text-gray-500'}`}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navigation;
