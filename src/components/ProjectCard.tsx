import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface Image {
  src: string;
  alt: string;
}

interface IProjectCard {
  title: string;
  period: string;
  images: Image[];
  description: string[];
  github_url: string;
  features: string[];
  vercel_url: string | null;
}

const ProjectCard = ({ title, period, images, description, github_url, features, vercel_url }: IProjectCard) => {
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  useEffect(() => {
    // 첫 번째 이미지만 확인하여 세로 이미지 여부를 체크
    if (images.length > 0) {
      const img = new Image();
      img.src = images[0].src;
      img.onload = () => {
        const isPortraitImage = img.height > img.width;
        setIsPortrait(isPortraitImage); // 세로 이미지일 경우 true
      };
    }
  }, [images]);

  return (
    <div className="flex flex-col items-center bg-[#E9EFEC] rounded-lg shadow-lg p-10 gap-6 max-w-7xl mx-auto sm:w-full sm:p-5">
      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-[#16423C] text-6xl sm:text-4xl font-bold">{title}</h2>
        <p>{period}</p>
      </div>

      <div className="mt-6 flex justify-center flex-row sm:flex-col gap-6 sm:gap-4 w-full max-w-7xl">
        <Swiper
          spaceBetween={20}
          slidesPerView={isPortrait ? 2 : 1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full max-w-2xl  sm:max-w-sm h-1/2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} className="rounded-lg shadow-xl w-full h-1/2 max-h-[500px]" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="sm:px-5 w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold">프로젝트 소개</h2>
          <div className="flex flex-col gap-4 font-semibold text-base">
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <div className="border-t border-neutral-400 border-solid my-6" />
          <div className="flex flex-col gap-4">
            <p className="flex justify-between w-full text-base">
              <span>Github</span>
              <span className="text-green-500 sm:text-xs">{github_url}</span>
            </p>
            {vercel_url && (
              <p className="flex justify-between w-full text-base">
                <span>Vercel</span>
                <span className="text-blue-500 sm:text-xs">{vercel_url}</span>
              </p>
            )}
            <p className="flex justify-between w-full text-base">
              <span>주요 기능</span>
              <div className="flex flex-wrap gap-1 items-center">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="border border-black border-solid px-2 rounded-xl text-center text-sm sm:text-xs grid-cols-4"
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
  );
};

export default ProjectCard;
