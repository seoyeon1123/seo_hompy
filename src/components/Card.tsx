import { useState } from 'react';

interface CardProps {
  subTitle?: string;
  title: string;
  content: string;
  secondContent: string;
}

const Card = ({ subTitle, title, content, secondContent }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-80 min-h-80 gap-2 perspective-1000 hover:scale-105 transition-transform"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`absolute w-full min-h-80 bg-[#21625a]  bg-opacity-80 text-[#E9EFEC] rounded-2xl shadow-lg p-5 flex justify-center items-center transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        <h2 className="text-5xl font-bold text-center">{subTitle}</h2>
      </div>

      <div
        className={`absolute w-full min-h-80 bg-[#21625a]  text-[#E9EFEC] rounded-2xl shadow-lg p-5 flex flex-col gap-4 justify-start items-center transition-transform duration-700 ${
          isFlipped ? '' : 'rotate-y-180'
        }`}
        style={{
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        <h2 className="text-2xl md:text-2xl font-semibold">{title}</h2>
        <p className="text-sm md:text-lg leading-relaxed">{content}</p>
        <p className="text-sm md:text-lg leading-relaxed">{secondContent}</p>
      </div>
    </div>
  );
};

export default Card;
