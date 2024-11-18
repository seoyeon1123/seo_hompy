import 발표 from '../assets/education/발표.jpeg';
import 우수수료생 from '../assets/education/우수수료생.jpeg';
import EducationSection from '../components/EducationSection';

const educationData = [
  {
    date: '2019.03.02 ~ 2023.02.16',
    title: '서경대학교 아동학과 졸업',
    description: `서경대학교 아동학과에 진학해 4년 동안 휴학 없이 성실히 학업을 마쳤고, 졸업 후에는 삼성 직장 어린이집에서
1년간 보육교사로 근무했습니다. 이 경험을 통해 책임감과 소통 능력을 키웠으며, 아이들과의 소중한 교감을 쌓을 수 있었습니다. 
현재는 새로운 도전을 위해 개발자로서의 커리어를 준비하며 기술 역량을 쌓고 있습니다.`,
    images: [],
    delay: 0,
  },
  {
    date: '2024.05.01 ~ ing',
    title: '독학 공부 시작',
    description: `인프런과 노마드코더에서 제공하는 다양한 강의를 통해 웹 개발을 체계적으로 학습했습니다. HTML과 CSS를 시작으로
JavaScript 강의를 수강하며 기초를 다졌고, 이후 React 강의를 통해 클론 코딩 프로젝트(S-FLEX)를 진행하며
React에 대한 심도 있는 이해를 쌓았습니다. 이를 바탕으로 Next.js 강의에 도전하였고, 캐럿마켓 클론 코딩
프로젝트를 수행하며 실무에 가까운 경험을 쌓았습니다.`,
    images: [],
    delay: 0.5,
  },
  {
    date: '2024.09.20 ~ 2024.11.01',
    title: '프로젝트 캠프: Next.js 3기',
    description: `2주간의 사전 직무 교육을 거쳐 본격적인 프로젝트를 진행하였으며, 팀장으로서 KT 요금제 프로젝트를 성공적으로
이끌었습니다. 저희 팀은 3기 중 우수팀으로 선정되어 최종 발표회를 진행하였고, 저 또한 우수 수료생으로
인정받았습니다. 이번 프로젝트는 리더로서의 성장과 팀워크의 중요성을 다시금 느낄 수 있었던 소중한
경험이었습니다.`,
    images: [
      { src: 발표, alt: '발표 이미지' },
      { src: 우수수료생, alt: '우수 수료생 상장' },
    ],
    delay: 1,
  },
  {
    date: '2024.12.12 ~ 2025.02.13',
    title: '[코드잇 스프린트] 프론트엔드 단기심화 6기',
    description: `12월부터 시작되는 이 교육 과정은 다양한 CSS 모듈과 Jest를 활용한 테스트 코드 작성, 그리고 CI/CD와 같은 심화
기술을 배우기 위해 지원을 했습니다. 이를 통해 개발자로서의 역량을 더욱 강화하고, 실무에 바로 적용할 수 있는
기술을 익히고자 합니다. 또한, Next.js 3기처럼 우수한 성적으로 교육을 마무리하며 자신감을 쌓고, 더 나아가
전문적인 개발자로 성장하는 것이 목표입니다.`,
    images: [],
    delay: 1.5,
  },
];

const Education = () => {
  return (
    <div className="bg-[#E9EFEC] py-28 flex flex-col justify-center sm:gap-4 min-h-screen lg:px-[200px]">
      {educationData.map((item, index) => (
        <div key={index}>
          <EducationSection
            date={item.date}
            title={item.title}
            description={item.description}
            images={item.images}
            delay={item.delay}
            isLast={index === educationData.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default Education;
