import { motion } from 'framer-motion';
import Card from '../components/Card';
import SkillfulSection from '../components/SkillfulSection';
import { useState } from 'react';

const About = () => {
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);

  return (
    <div className="flex flex-col pt-28 h-svh sm:h-full bg-[#E9EFEC] p-6 md:p-10 gap-8 ">
      <motion.h1
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-7xl sm:text-5xl font-bold mb-4w text-[#16423C] text-shadow-md"
        onAnimationComplete={() => setFirstVisible(true)}
      >
        About Me
      </motion.h1>

      {/* 나머지 카드들 */}
      {firstVisible && (
        <div className="flex flex-row sm:flex-col sm:gap-6 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            onAnimationComplete={() => setSecondVisible(true)}
          >
            <Card
              title="어떤 사람일까요?"
              content="서경대학교 아동학과를 졸업하고 어린이집에서 아이들과 함께했던 경험을 가진 예비 개발자입니다. 새로운 도전을 두려워하지 않고, 특히 프론트엔드 개발의 매력에 빠져 현재 다양한 기술들을 익히고 있습니다."
              secondContent="사용자 경험을 고려한 UI를 만들어내는 과정에 큰 보람을 느끼며, 더 나은 서비스를 제공하기 위해 끊임없이 배우고 성장하려는 열정을 가지고 있습니다."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card
              title="무엇을 좋아하나요?"
              content="다양한 디자인과 색상으로 꾸미는 것을 좋아합니다 :) 예전부터 사소한 물건부터 방 인테리어까지, 작은 요소들을 꾸미고 변화시키는 데 관심이 많았습니다."
              secondContent="이런 취향은 개발에서도 반영되어, 눈에 보기 좋고 사용하기 편한 인터페이스를 만드는 데 큰 동기부여가 됩니다. 창의적인 작업을 통해 사용자들에게 좋은 경험을 주고 싶은 마음이 큽니다!"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              title="앞으로의 목표는 무엇인가요?"
              content="기술적으로는 JavaScript와 React, Next.Js를 깊이 있게 이해하고, TypeScript와 같은 다양한 기술 스택을 익히는 것이 목표입니다."
              secondContent="또한, UI/UX 디자인에 대한 이해도를 높여 사용자의 니즈를 반영한 더 나은 웹 경험을 제공하는 것이 꿈입니다. 앞으로도 다양한 프로젝트에 참여하며 실력을 쌓아가고 싶습니다!"
            />
          </motion.div>
        </div>
      )}

      {/* SkillfulSection은 첫 번째 애니메이션이 완료된 후에만 표시 */}
      {secondVisible && <SkillfulSection />}
    </div>
  );
};

export default About;
