import { useState } from 'react';
import images from '../assets/skill/skills';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillfulSection = () => {
  const [activeTab, setActiveTab] = useState<'Front-End' | 'Back-End' | 'Tools'>('Front-End');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const allSkills = [
    { category: 'Front-End', src: images.Html },
    { category: 'Front-End', src: images.Css },
    { category: 'Front-End', src: images.Js },
    { category: 'Front-End', src: images.ReactImg },
    { category: 'Front-End', src: images.NextJS },
    { category: 'Front-End', src: images.TypeScript },
    { category: 'Front-End', src: images.TailwindCSS },
    { category: 'Front-End', src: images.Styledcomponents },
    { category: 'Front-End', src: images.zustand },
    { category: 'Front-End', src: images.socketIo },
    { category: 'Back-End', src: images.NodeJS },
    { category: 'Back-End', src: images.Prisma },
    { category: 'Back-End', src: images.Supabase },
    { category: 'Back-End', src: images.Firebase },
    { category: 'Tools', src: images.Figma },
    { category: 'Tools', src: images.Github },
    { category: 'Tools', src: images.Postman },
    { category: 'Tools', src: images.VSCode },
    { category: 'Tools', src: images.Vite },
    { category: 'Tools', src: images.Vercel },
  ];

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      className="flex flex-col  gap-10 sm:items-center px-6 pt-56 pb-36"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-lg font-bold text-[#fbe797] leading-tight">Skill & Tools</h1>
        <p className="text-3xl font-semibold">제가 사용할 수 있는 기술스텍이에요.</p>
      </div>

      <div className="flex flex-col items-center sm:items-start ">
        <div className="flex justify-center sm:justify-start gap-8 mb-8 border-b bg-white border-solid rounded-full px-3 py-1">
          <button
            className={`text-2xl sm:text-xl font-bold transition-all duration-300 ${
              activeTab === 'Front-End' ? 'text-[#16423C] ' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('Front-End')}
          >
            Front-End
          </button>
          <button
            className={`text-2xl sm:text-xl font-bold transition-all duration-300 ${
              activeTab === 'Back-End' ? 'text-[#16423C]' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('Back-End')}
          >
            Back-End
          </button>
          <button
            className={`text-2xl sm:text-xl font-bold transition-all duration-300 ${
              activeTab === 'Tools' ? 'text-[#16423C] ' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('Tools')}
          >
            Tools
          </button>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 lg:gap-6 sm:gap-2 md: gap-2 justify-center">
          {allSkills.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={`Skill ${index}`}
              className={`w-16 h-16 sm:w-20 sm:h-20 object-contain transition-all duration-300 ${
                activeTab === skill.category ? 'opacity-100' : 'opacity-30'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillfulSection;
