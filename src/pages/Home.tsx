import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/main/IMG_6067.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import NavComponent from './NavComponent';
import Project from './Project';
import Education from './Education';
import Connect from './Connect';

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
      setScrollable(true);
    }
  }, [thirdTextVisible]);

  return (
    <>
      <div className={`relative ${scrollable ? 'overflow-y-auto' : 'overflow-hidden'}`} id="main">
        <div className="flex flex-col items-center justify-center gap-5 h-screen relative">
          {firstTextVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center absolute top-[140px] 
             "
              onAnimationComplete={() => setSecondTextVisible(true)}
            >
              <h1 className="text-9xl sm:text-7xl font-bold text-[#6A9C89] relative z-0 text-shadow-lg sm:-top-6 md:-top-6 ">
                Front - End
              </h1>
              <h2 className="text-4xl sm:text-2xl font-medium mb-4 text-neutral-200 absolute top-[90px] sm:top-6 left-1/2 w-full transform -translate-x-1/2 z-10">
                "예비" 프론트엔드 개발자 <br className="hidden sm:block" />
                <span className="text-4xl font-bold sm:text-3xl">이서연</span> 입니다.
              </h2>
            </motion.div>
          )}

          <motion.img
            src={profile}
            alt="프로필"
            width={300}
            className="rounded-full shadow-xl border-4 border-[#387478] mb-6 sm:size-72 "
            initial={{ x: -800, opacity: 0, rotate: -360 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 3, bounce: 0.5 }}
            style={{ position: 'absolute' }}
            onAnimationComplete={() => setFirstTextVisible(true)}
          />

          {secondTextVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center absolute bottom-[150px] sm:bottom-[150px] "
              onAnimationComplete={() => setThirdTextVisible(true)}
            >
              <p className="text-lg sm:text-sm text-center px-4 text-[#E9EFEC] py-10 ">
                호기심이 많고 새로운 도전을 좋아하는 <br className="hidden sm:block" />
                <span className="text-[#6A9C89] font-semibold">프론트엔드 개발자</span> 입니다.
                <br /> 좋은 사용자 경험을 제공하기 위해 열심히 노력하고 있어요!
              </p>

              <div className="flex flex-row justify-center items-center mt-5 mb-10">
                <NavComponent />
              </div>
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
                duration: 1,
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
          <Project />
          <Education />
          <Connect />
        </div>
      </div>
    </>
  );
};

export default Home;
