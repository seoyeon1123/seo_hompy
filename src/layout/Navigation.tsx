interface NavigationProps {
  scrollToSection: (sectionId: 'project' | 'education' | 'connect') => void;
  activeSection: 'project' | 'education' | 'connect' | 'about';
}

const Navigation = ({ scrollToSection, activeSection }: NavigationProps) => {
  return (
    <div className=" text-[#E9EFEC] p-5 sticky top-0  z-20 sm:transition-all sm:duration-300 flex flex-row justify-center items-center rounded-full bg-[#1e5f58]  w-96">
      <div className="flex gap-4 text-xl sm:text-xl">
        <button
          onClick={() => scrollToSection('project')}
          className={`${activeSection === 'project' ? 'text-[#E9EFEC]' : 'text-gray-500'} sm:text-lg`}
        >
          Project
        </button>
        <button
          onClick={() => scrollToSection('education')}
          className={`${activeSection === 'education' ? 'text-[#E9EFEC]' : 'text-gray-500'} sm:text-lg`}
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection('connect')}
          className={`${activeSection === 'connect' ? 'text-[#E9EFEC]' : 'text-gray-500'} sm:text-lg`}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navigation;
