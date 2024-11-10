const features = ['React', 'TypeScript', 'Recoil', 'Node.js', 'MongoDB', 'Styled-Components'];

const Project = () => {
  return (
    <div className="flex flex-col pt-28 min-h-screen bg-[#16423C] px-6 md:px-10 py-8 gap-12">
      <h1 className="text-[#E9EFEC] text-6xl md:text-8xl font-bold mb-6">Project</h1>

      <div className="flex flex-col items-center bg-[#E9EFEC] rounded-lg shadow-lg p-10 md:p-12 gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center mt-4">
          <h2 className="text-[#16423C] text-6xl sm:text-4xl font-bold">S-FLEX</h2>
          <p>2024.06 - 2022.07 </p>
        </div>

        <div className="mt-6 flex justify-center flex-row gap-10">
          <img
            src="https://github.com/user-attachments/assets/2785c4c2-7555-400d-bd1e-ae04ee12e6ec"
            alt="영화 페인 페이지"
            className="rounded-lg shadow-xl w-1/2"
            width="500"
          />
          <div>
            <div className="flex flex-col gap-4 font-semibold text-base">
              <p className="">
                다음과 같이 추가적인 내용을 포함한 소개 문구를 작성할 수 있습니다: 넷플릭스 클론 프로젝트로, React와
                Tailwind CSS를 사용하여 제작한 영화 스트리밍 페이지입니다.
              </p>
              <p>
                단순히 클론 코딩에 그치지 않고, 사용자의 입장에서 더 편리한 UI/UX를 분석하고 개선했습니다. 특히 해시태그
                선택 기능을 통해 장르별로 영화를 손쉽게 필터링할 수 있도록 사용자 중심적인 기능을 추가했습니다.
              </p>
              <p>
                또한, Node.js를 활용하여 로그인 및 회원가입 기능을 구현하여 실제 서비스처럼 작동할 수 있도록 하였습니다.
                <p>
                  이 프로젝트는 영화 스트리밍 플랫폼의 사용성과 기능성을 향상시키기 위해 다양한 실용적인 개선을 시도한
                  결과물입니다.
                </p>
              </p>
            </div>
            <div className="border-t border-neutral-400  border-solid my-6" />
            <div className="flex flex-col gap-4 ">
              <p className="flex justify-between w-full text-base">
                <span>URL</span>
                <span className="text-blue-500">https://github.com/seoyeon1123/S-FLEX</span>
              </p>
              <p className="flex justify-between w-full text-base">
                <span>주요 기능</span>
                <div className="flex gap-1 items-center">
                  {features.map((feature, index) => (
                    <span key={index} className=" border border-black border-solid px-2 rounded-xl text-center text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
