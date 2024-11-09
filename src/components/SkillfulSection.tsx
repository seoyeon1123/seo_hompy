import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillfulSection() {
  const [activeTab, setActiveTab] = useState('Front-End');

  return (
    <div className="flex flex-col gap-6">
      <motion.h2
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl sm:text-5xl font-bold mb-8 text-[#16423C] text-shadow-md"
      >
        SKILLFUL
      </motion.h2>

      <motion.div
        className="flex justify-center gap-6 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button
          className={`text-4xl sm:text-2xl font-semibold ${activeTab === 'Front-End' ? 'text-[#16423C]' : 'text-gray-400'}`}
          onClick={() => setActiveTab('Front-End')}
        >
          Front-End
        </button>
        <button
          className={`text-4xl sm:text-2xl font-semibold ${activeTab === 'Back-End' ? 'text-[#16423C]' : 'text-gray-400'}`}
          onClick={() => setActiveTab('Back-End')}
        >
          Back-End
        </button>
        <button
          className={`text-4xl sm:text-2xl font-semibold ${activeTab === 'Tools' ? 'text-[#16423C]' : 'text-gray-400'}`}
          onClick={() => setActiveTab('Tools')}
        >
          Tools
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        {activeTab === 'Front-End' && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"
                alt="JavaScript"
              />
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
              />
              <img
                src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS"
              />
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                alt="React Router"
              />
              <img
                src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                alt="Next.js"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
                alt="Styled Components"
              />
              <img
                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="Tailwind CSS"
              />
            </div>
          </div>
        )}

        {activeTab === 'Back-End' && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"
                alt="Firebase"
              />
              <img
                src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
                alt="Supabase"
              />
            </div>
          </div>
        )}

        {activeTab === 'Tools' && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <img
                src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
              <img
                src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"
                alt="Slack"
              />
              <img
                src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                alt="Visual Studio Code"
              />
              <img
                src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                alt="Figma"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
