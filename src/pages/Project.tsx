import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const features = ['React', 'TypeScript', 'Recoil', 'Node.js', 'MongoDB', 'Styled-Components'];

const Project = () => {
  return (
    <div className="flex flex-col pt-28 min-h-screen bg-[#16423C] px-6 py-8 gap-12">
      <h1 className="text-[#E9EFEC] text-6xl font-bold mb-6">Project</h1>

      <div className="flex flex-col items-center bg-[#E9EFEC] rounded-lg shadow-lg p-10 gap-6 max-w-7xl mx-auto sm:w-full sm:p-5">
        <div className="flex flex-col justify-center items-center mt-4">
          <h2 className="text-[#16423C] text-6xl sm:text-4xl font-bold">S-FLEX</h2>
          <p>2024.06 - 2022.07</p>
        </div>

        <div className="mt-6 flex justify-center flex-row sm:flex-col gap-6 sm:gap-4 w-full max-w-7xl">
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // 한 번에 한 슬라이드만 표시
            loop={true}
            navigation={true} // 네비게이션 버튼 활성화
            pagination={{ clickable: true }} // 페이지네이션 버튼 활성화
            autoplay={{ delay: 3000 }} // 3초마다 자동 슬라이드
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full max-w-2xl sm:max-w-sm sm:h-auto"
          >
            <SwiperSlide>
              <img
                src="https://github.com/user-attachments/assets/2785c4c2-7555-400d-bd1e-ae04ee12e6ec"
                alt="영화 페인 페이지"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://github.com/user-attachments/assets/b617e308-5916-4e9d-9266-bc229f957a9d"
                alt="영화 상세 정보"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://github.com/user-attachments/assets/84980932-dacf-4114-adaa-4cad017391bd"
                alt="영화 장르 선택"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://github.com/user-attachments/assets/d35053ec-1253-46b1-b862-5c2045fbfc2d"
                alt="검색 기능"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://github.com/user-attachments/assets/64abc8c9-8b8c-4c95-a76c-df36a4f2bd17"
                alt="나의 프로필 - 아이콘과 장르 선택 가능"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </SwiperSlide>
          </Swiper>

          <div className="sm:px-5 w-full">
            <div className="flex flex-col gap-4 font-semibold text-base">
              <p>넷플릭스 클론 프로젝트로, React와 Tailwind CSS를 사용하여 제작한 영화 스트리밍 페이지입니다.</p>
              <p>
                단순히 클론 코딩에 그치지 않고, 사용자의 입장에서 더 편리한 UI/UX를 분석하고 개선했습니다. 특히 해시태그
                선택 기능을 통해 장르별로 영화를 손쉽게 필터링할 수 있도록 사용자 중심적인 기능을 추가했습니다.
              </p>
              <p>
                또한, Node.js를 활용하여 로그인 및 회원가입 기능을 구현하여 실제 서비스처럼 작동할 수 있도록 하였습니다.
                이 프로젝트는 영화 스트리밍 플랫폼의 사용성과 기능성을 향상시키기 위해 다양한 실용적인 개선을 시도한
                결과물입니다.
              </p>
            </div>
            <div className="border-t border-neutral-400 border-solid my-6 " />
            <div className="flex flex-col gap-4">
              <p className="flex justify-between w-full text-base">
                <span>URL</span>
                <span className="text-blue-500 sm:text-xs">https://github.com/seoyeon1123/S-FLEX</span>
              </p>
              <p className="flex justify-between w-full text-base">
                <span>주요 기능</span>
                <div className="flex flex-wrap gap-1 items-center ">
                  {features.map((feature, index) => (
                    <span
                      key={index}
                      className="border border-black border-solid px-2 rounded-xl text-center text-sm sm:text-xs"
                    >
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
