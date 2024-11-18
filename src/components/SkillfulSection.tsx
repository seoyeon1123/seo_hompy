import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNode,
  faGit,
  faGithub,
  faSlack,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';

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
        Skill & Tools
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
            <div className="flex flex-wrap gap-4 justify-center transition-transform">
              <FontAwesomeIcon icon={faJs} size="3x" />
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <FontAwesomeIcon icon={faCss3Alt} size="3x" />
              <FontAwesomeIcon icon={faReact} size="3x" />
              <FontAwesomeIcon icon={faNode} size="3x" />
            </div>
          </div>
        )}

        {activeTab === 'Back-End' && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-4 justify-center transition-transform"></div>
          </div>
        )}

        {activeTab === 'Tools' && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-4 justify-center transition-transform">
              <FontAwesomeIcon icon={faGit} size="3x" />
              <FontAwesomeIcon icon={faGithub} size="3x" />
              <FontAwesomeIcon icon={faSlack} size="3x" />
              <FontAwesomeIcon icon={faFigma} size="3x" />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
