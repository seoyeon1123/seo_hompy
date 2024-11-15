import { Swiper, SwiperSlide } from 'swiper/react';
import 발표 from '../assets/education/발표.jpeg';
import 우수수료생 from '../assets/education/우수수료생.jpeg';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref: sectionRef1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: sectionRef2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: sectionRef3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: sectionRef4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="bg-[#E9EFEC] py-28 flex flex-col justify-center sm:gap-4 min-h-screen">
      <motion.div
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        className="flex flex-row px-10 justify-center sm:flex-col sm:items-center sm:gap-2 sm:w-full"
        ref={sectionRef1}
      >
        <div className="flex flex-col justify-center items-center gap-2 w-96 pb-10">
          <h1 className="text-4xl sm:text-center">
            서경대학교 <br />
            아동학과 졸업
          </h1>
          <p className="text-neutral-500">기간 : 2019.03.02 ~ 2023.02.16</p>
        </div>
        <div className="border border-r border-solid border-neutral-400 mr-8" />
        <div className="w-3/4 flex justify-center items-center">
          <p className="leading-relaxed text-[#16423C] pb-10 ">
            서경대학교 아동학과에 진학해 4년 동안 휴학 없이 성실히 학업을 마쳤고, 졸업 후에는 삼성 직장 어린이집에서
            1년간 보육교사로 근무했습니다. 이 경험을 통해 책임감과 소통 능력을 키웠으며, <br />
            아이들과의 소중한 교감을 쌓을 수 있었습니다. 현재는 새로운 도전을 위해 개발자로서의 커리어를 준비하며 기술
            역량을 쌓고 있습니다.
          </p>
        </div>
      </motion.div>
      <motion.div
        transition={{ duration: 1, delay: 0.5 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView2 ? 0 : 50 }}
        className="flex flex-row px-10 justify-center sm:flex-col sm:items-center sm:gap-2 sm:w-full "
        ref={sectionRef2}
      >
        <div className="flex flex-col justify-center items-center gap-2 w-96">
          <h1 className="text-4xl sm:text-center">
            독학 공부 시작 <br />
          </h1>
          <p className="text-neutral-500">기간 : 2024.05.01 ~ ing</p>
        </div>
        <div className="border border-r border-solid border-neutral-400 mr-8" />
        <div className="w-3/4 flex justify-center items-center">
          <p className="leading-relaxed text-[#16423C] ">
            인프런과 노마드코더에서 제공하는 다양한 강의를 통해 웹 개발을 체계적으로 학습했습니다. HTML과 CSS를 시작으로
            JavaScript 강의를 수강하며 기초를 다졌고, 이후 React 강의를 통해 클론 코딩 프로젝트(S-FLEX)를 진행하며
            React에 대한 심도 있는 이해를 쌓았습니다. 이를 바탕으로 Next.js 강의에 도전하였고, 캐럿마켓 클론 코딩
            프로젝트를 수행하며 실무에 가까운 경험을 쌓았습니다. 이 과정에서 개인적인 아이디어인 '운동감자'라는 웹
            서비스를 기획하고, Next.js를 활용해 직접 개발하며 Next.js의 다양한 기능과 실용성을 깊이 체득하는 소중한
            시간을 가졌습니다. 이를 통해 프로젝트의 기획부터 구현까지 전 과정을 경험하며, 개발자로서의 역량을 한층 더
            강화할 수 있었습니다.
          </p>
        </div>
      </motion.div>

      <motion.div
        transition={{ duration: 1, delay: 1 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView2 ? 1 : 0, y: inView3 ? 0 : 50 }}
        className="flex flex-row px-10 justify-center sm:flex-col sm:items-center sm:gap-2"
        ref={sectionRef3}
      >
        <div className="flex flex-col justify-center items-center gap-2 w-96 ">
          <h1 className="text-4xl">
            프로젝트 캠프 <br /> : Next.js 3기
          </h1>
          <p className="text-neutral-500">기간 : 2024.09.20 ~ 2024.11.01</p>
        </div>
        <div className="border border-r border-solid border-neutral-400 mr-8" />
        <div className="w-3/4 flex flex-row justify-center items-center sm:flex-col">
          <p className="leading-relaxed text-[#16423C]">
            2주간의 사전 직무 교육을 거쳐 본격적인 프로젝트를 진행하였으며, 팀장으로서 KT 요금제 프로젝트를 성공적으로
            이끌었습니다. 저희 팀은 3기 중 우수팀으로 선정되어 최종 발표회를 진행하였고, 저 또한 우수 수료생으로
            인정받았습니다. 이번 프로젝트는 리더로서의 성장과 팀워크의 중요성을 다시금 느낄 수 있었던 소중한
            경험이었습니다.
          </p>
          <div className="mt-6 flex justify-center flex-row sm:flex-col gap-6 sm:gap-4 w-full ">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={false}
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Pagination, Autoplay]}
              className="w-full max-w-lg sm:max-w-sm flex justify-center items-center"
            >
              <SwiperSlide className="flex justify-center">
                <img src={발표} alt="발표 이미지" className="rounded-lg shadow-xl w-96 " />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center">
                <img src={우수수료생} alt="우수 수료생 상장" className="rounded-lg shadow-xl w-96" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>

      <motion.div
        transition={{ duration: 1, delay: 1.5 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView3 ? 1 : 0, y: inView4 ? 0 : 50 }}
        className="flex flex-row px-10 justify-center sm:flex-col sm:items-center sm:gap-2"
        ref={sectionRef4}
      >
        <div className="flex flex-col justify-center items-center gap-2 w-96">
          <h1 className="text-4xl sm:text-center ">
            [코드잇 스프린트]
            <br /> 프론트엔드 <br />
            단기심화 6기
          </h1>
          <p className="text-neutral-500">기간 : 2024. 12. 12 ~ 2025.02.13</p>
        </div>
        <div className="border border-r border-solid border-neutral-400 mr-8" />
        <div className="w-3/4 flex justify-center items-center">
          <p className="leading-relaxed text-[#16423C]">
            12월부터 시작되는 이 교육 과정은 다양한 CSS 모듈과 Jest를 활용한 테스트 코드 작성, 그리고 CI/CD와 같은 심화
            기술을 배우기 위해 지원을 했습니다. 이를 통해 개발자로서의 역량을 더욱 강화하고, 실무에 바로 적용할 수 있는
            기술을 익히고자 합니다. 또한, Next.js 3기처럼 우수한 성적으로 교육을 마무리하며 자신감을 쌓고, 더 나아가
            전문적인 개발자로 성장하는 것이 목표입니다.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
