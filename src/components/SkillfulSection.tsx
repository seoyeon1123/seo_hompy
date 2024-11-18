import { useState } from 'react';

import images from '../assets/skill/skills';

const SkillfulSection = () => {
  const [activeTab, setActiveTab] = useState<'Front-End' | 'Back-End' | 'Tools'>('Front-End');

  const skills: {
    'Front-End': { src: string }[];
    'Back-End': { src: string }[];
    Tools: { src: string }[];
  } = {
    'Front-End': [
      { src: images.Html },
      { src: images.Css },
      { src: images.Js },
      { src: images.ReactImg },
      { src: images.NextJS },
      { src: images.TypeScript },
      { src: images.TailwindCSS },
      { src: images.Styledcomponents },
    ],
    'Back-End': [{ src: images.NodeJS }, { src: images.Prisma }, { src: images.Supabase }, { src: images.Firebase }],
    Tools: [
      { src: images.Figma },
      { src: images.Github },
      { src: images.Postman },
      { src: images.VSCode },
      { src: images.Vite },
      { src: images.Vercel },
    ],
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between gap-6">
      <h2 className="text-6xl sm:text-5xl font-bold mb-8 text-[#16423C] text-shadow-md">
        Skill &<br /> Tools
      </h2>

      <div className="flex flex-col">
        <div className="flex justify-center gap-6 mb-6">
          <button
            className={`text-4xl sm:text-2xl font-semibold ${
              activeTab === 'Front-End' ? 'text-[#16423C]' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('Front-End')}
          >
            Front-End
          </button>
          <button
            className={`text-4xl sm:text-2xl font-semibold ${
              activeTab === 'Back-End' ? 'text-[#16423C]' : 'text-gray-400'
            }`}
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
        </div>

        <div>
          <div className="mb-6">
            <div className="flex lg:w-[600px] flex-wrap gap-4 justify-center transition-transform">
              {skills[activeTab]?.map((skill, index) => (
                <img key={index} src={skill.src} alt={`Skill ${index}`} width={48} height={48} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillfulSection;
