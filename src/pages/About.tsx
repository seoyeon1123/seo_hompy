import { motion } from 'framer-motion';
import Card from '../components/Card';
import SkillfulSection from '../components/SkillfulSection';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div ref={ref} className="flex flex-row pt-20 sm:h-full p-6 md:p-10 gap-8 lg:px-[200px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ position: 'relative' }}
        className="flex flex-row w-full"
      >
        <div className="flex flex-col sm:flex-col justify-between sm:justify-center md:justify-center md:items-center sm:items-center w-full">
          <div className="flex flex-col mb-20">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-lg font-bold text-[#fbe797] leading-tight">About Me</h1>
              <p className="text-3xl font-semibold">4가지 키워드로 저를 소개할게요.</p>
            </div>
          </div>

          <div className="gap-6 items-center mb-12 flex flex-row *:hover:cursor-pointer sm:flex-col md:grid md:grid-cols-2 sm:justify-center w-full md:items-center md:gap-20">
            <Card
              subTitle="Who"
              title="Q ) 어떤 사람일까요?"
              content="서경대학교 아동학과를 졸업하고 어린이집에서 아이들과 함께했던 경험을 가진 예비 개발자입니다. 새로운 도전을 두려워하지 않고, 특히 프론트엔드 개발의 매력에 빠져 현재 다양한 기술들을 익히고 있습니다."
              secondContent="사용자 경험을 고려한 UI를 만들어내는 과정에 큰 보람을 느끼며, 더 나은 서비스를 제공하기 위해 끊임없이 배우고 성장하려는 열정을 가지고 있습니다."
            />
            <Card
              subTitle="Like"
              title="Q ) 무엇을 좋아하나요?"
              content="다양한 디자인과 색상으로 꾸미는 것을 좋아합니다 :) 예전부터 사소한 물건부터 방 인테리어까지, 작은 요소들을 꾸미고 변화시키는 데 관심이 많았습니다."
              secondContent="이런 취향은 개발에서도 반영되어, 눈에 보기 좋고 사용하기 편한 인터페이스를 만드는 데 큰 동기부여가 됩니다. 창의적인 작업을 통해 사용자들에게 좋은 경험을 주고 싶은 마음이 큽니다!"
            />
            <Card
              subTitle="Plan"
              title="Q ) 앞으로의 목표는 무엇인가요?"
              content="기술적으로는 JavaScript와 React, Next.Js를 깊이 있게 이해하고, TypeScript와 같은 다양한 기술 스택을 익히는 것이 목표입니다."
              secondContent="또한, UI/UX 디자인에 대한 이해도를 높여 사용자의 니즈를 반영한 더 나은 웹 경험을 제공하는 것이 꿈입니다. 앞으로도 다양한 프로젝트에 참여하며 실력을 쌓아가고 싶습니다!"
            />
            <Card
              subTitle="Reflection"
              title="Q ) 지금까지의 회고"
              content="최근 팀 프로젝트를 경험하면서 혼자서 공부하는 것보다 누군가와 함께 하나의 목표를 향해 달려나가는 이점이 너무 매력적으로 다가왔습니다. "
              secondContent="그동안 우물 안의 개구리처럼 혼자만의 세계에서 벗어나, 잘하는 다른 사람의 도움을 받기도 하고, 제가 그들에게 도움을 주기도 하면서 팀 이라는 소중한 가치를 느꼈습니다. 그 경험은 너무나도 행복하고 즐거웠습니다.팀원과 함께 성장하는 개발자가 되고 싶습니다."
            />
          </div>

          <div className="flex lg:flex-row flex-col gap-2 justify-center items-center my-10">
            <p className="text-[30px] font-bold"> : 저는 </p>
            <div className="relative">
              <div className="flex items-center text-[#16423C] bg-[#f5f5f5] border-2 border-gray-300 rounded-full px-4 py-2 shadow-md ">
                <ReactTyped
                  strings={[
                    '피드백 받는걸 좋아하는 개발자 입니다.',
                    '저는 소통하는 개발자 입니다.',
                    '배우고 싶은 개발자 입니다.',
                    '성장하고 싶은 개발자 입니다. ',
                  ]}
                  typeSpeed={50}
                  backSpeed={40}
                  loop={true}
                  backDelay={2000}
                  startDelay={1000}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px', // 동적 fontSize
                    display: 'inline-block',
                    textAlign: 'left',
                    lineHeight: '1',
                  }}
                />
              </div>
            </div>
          </div>

          <SkillfulSection />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
