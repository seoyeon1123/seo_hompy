import { motion } from 'framer-motion';
import Card from '../components/Card';
import SkillfulSection from '../components/SkillfulSection';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div ref={ref} className="flex flex-row pt-28 sm:h-full p-6 md:p-10 gap-8 lg:px-[200px] w-full" id="about">
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
              secondContent="이런 취향은 개발에서도 반영되어, 팀프로젝트에서는 Lighthouse 성능 최적화나 UI/UX 개선 작업에서 발생한 문제들을 체계적으로 분석하고 해결책을 제시한 경험이 있습니다."
            />
            <Card
              subTitle="Plan"
              title="Q) 앞으로의 목표는 무엇인가요?"
              content="이번 프로젝트에서는 사용해보지 못했던 Socket.IO와 Zustand 등을 활용하여 기획 및 개발을 진행 중입니다. 이를 통해 새로운 기술을 적용하고, 한층 더 완성도 높은 프로젝트를 만들고자 합니다."
              secondContent="팀 프로젝트를 통해 현업의 경험을 미리 체험하며, 새로운 기능들을 적극적으로 도입하여 개발자로서 한 단계 성장하는 것이 올해의 목표입니다."
            />

            <Card
              subTitle="Reflection"
              title="Q ) 지금까지의 회고"
              content="팀 프로젝트를 마친 후, 개인 프로젝트인 '댕냥살롱'을 통해 그동안 배운 기능들을 적용하고, 새로운 기능들도 더해가며 개발의 시작과 끝을 잘 마무리 지었습니다."
              secondContent="개인 프로젝트를 진행한 뒤, 비전공자로서 개발자로서의 역량을 더욱 높이기 위해 정보처리기사 공부를 시작했고, 결국 필기 합격이라는 성과를 이뤄냈습니다. 그 후, 팀 프로젝트를 진행하며 한 걸음씩 성장해가고 있는 제 모습을 되돌아보며, 앞으로도 계속해서 발전하는 개발자가 되기 위해 노력하고 있습니다."
            />
          </div>

          <div className="flex lg:flex-row flex-col gap-2 justify-center items-center my-10">
            <p className="text-[30px] font-bold"> : 저는 </p>
            <div className="relative">
              <div className="flex items-center text-[#16423C] bg-[#f5f5f5] border-2 border-gray-300 rounded-full px-4 py-2 shadow-md ">
                <ReactTyped
                  strings={[
                    '피드백 환영합니다.',
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
