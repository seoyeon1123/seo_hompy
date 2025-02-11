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
    delay: 0.3,
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
    delay: 0.6,
  },
  {
    date: '2024.11 ~ 2025.01',
    title: '개인 블로그 및 개인 프로젝트 "댕냥살롱" 마무리',
    description: `그동안 배운 지식과 사용해보고 싶었던 기술들을 익히기 위해 개인 포트폴리오 블로그 "seoHompy"와 개인 프로젝트 "댕냥살롱"을 기획하고 개발하였습니다. 특히, 주변 지인들로부터 "혼자 반려동물을 키우는데 비슷한 또래를 만나기 어렵다"는 이야기를 듣고 이를 해결하고자 "댕냥살롱"을 기획하게 되었으며, 이를 바탕으로 프로젝트를 완성하였습니다.`,
    images: [],
    delay: 0.9,
  },
  {
    date: '2025.01 ~ ',
    title: '정보처리기사 필기 합격 후 팀 프로젝트 진행',
    description: `비전공자였지만, 전공 지식을 쌓기 위해 정보처리기사 필기 공부를 시작했고, 2025년 2월 10일 필기 합격이라는 성과를 이루었습니다. 이후, 팀 프로젝트 '둘잇(커플 채팅앱)'을 기획하고 백엔드와 협업하여 프로젝트의 기획, 디자인, 개발까지 전반적으로 기획하고 담당하고 있습니다. 그동안 사용해보지 못했던 다양한 기술들을 프로젝트에 적용해가며, 개발자로서 계속해서 성장해 나갈 예정입니다. `,
    images: [],
    delay: 0.9,
  },
];

const Education = () => {
  return (
    <div className="pt-28 flex flex-col justify-center sm:gap-4 min-h-screen lg:px-[200px] md:px-[50px]" id="education">
      <div className="flex flex-col justify-center items-center gap-2 mb-20">
        <h1 className="text-lg font-bold text-[#fbe797] leading-tight">Education</h1>
        <p className="text-3xl font-semibold text-center">
          짧지만, 탄탄하게 <br /> 길을 만들어 가고 있어요.
        </p>
      </div>

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
