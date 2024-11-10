import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/main/IMG_6067.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import Project from './Project';

const Home = () => {
  const [firstTextVisible, setFirstTextVisible] = useState(false);
  const [secondTextVisible, setSecondTextVisible] = useState(false);
  const [thirdTextVisible, setThirdTextVisible] = useState(false);
  const [scrollable, setScrollable] = useState(false); // 스크롤 가능 여부 상태 추가

  const aboutRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (thirdTextVisible && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (thirdTextVisible) {
      setScrollable(true); // 애니메이션이 다 끝나면 스크롤 가능하도록 설정
    }
  }, [thirdTextVisible]);

  return (
    <div className={`h-screen ${scrollable ? 'overflow-y-auto' : 'overflow-hidden'}`}>
      <div className="flex flex-col items-center justify-center gap-5 h-screen bg-[#16423C] text-white relative">
        {firstTextVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-center absolute top-[140px] sm:top-32"
            onAnimationComplete={() => setSecondTextVisible(true)}
          >
            <h1 className="text-9xl sm:text-7xl font-bold text-[#6A9C89] relative z-0 text-shadow-lg">Front - End</h1>
            <h2 className="text-4xl sm:text-2xl font-medium mb-4 text-neutral-200 absolute top-[90px] sm:top-10 left-1/2 w-full transform -translate-x-1/2 z-10">
              "예비" 프론트엔드 개발자 <br className="hidden sm:block" />
              <span className="text-4xl font-bold sm:text-3xl">이서연</span> 입니다.
            </h2>
          </motion.div>
        )}

        <motion.img
          src={profile}
          alt="프로필"
          width={300}
          className="rounded-full shadow-xl border-4 border-[#387478] mb-6"
          initial={{ x: -800, opacity: 0, rotate: -360 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 4, bounce: 0.5 }}
          style={{ position: 'absolute' }}
          onAnimationComplete={() => setFirstTextVisible(true)}
        />

        {secondTextVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center absolute bottom-[250px] sm:bottom-[200px]"
            onAnimationComplete={() => setThirdTextVisible(true)}
          >
            <p className="text-lg sm:text-base text-center px-4 text-[#E9EFEC]">
              호기심이 많고 새로운 도전을 좋아하는 <br className="hidden sm:block" />
              <span className="text-[#6A9C89] font-semibold">프론트엔드 개발자</span> 입니다.
              <br /> 좋은 사용자 경험을 제공하기 위해 열심히 노력하고 있어요!
            </p>
          </motion.div>
        )}

        {thirdTextVisible && (
          <motion.div
            className="bottom-20 absolute mb-3"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              color: ['#6A9C89', '#E9EFEC'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <FontAwesomeIcon icon={faAnglesDown} className="text-4xl" onClick={handleClick} />
          </motion.div>
        )}
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <Project />
    </div>
  );
};

export default Home;
