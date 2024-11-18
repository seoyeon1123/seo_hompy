import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

interface EducationSectionProps {
  date: string;
  title: string;
  description: string;
  images?: { src: string; alt: string }[];
  delay?: number;
  isLast?: boolean;
}

const EducationSection = ({ date, title, description, images, delay = 0, isLast = false }: EducationSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 1, delay }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      className="relative flex flex-row items-start gap-8 sm:flex-col sm:items-center sm:gap-4 sm:px-4 mb-10"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-[#16423C]"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: delay }}
        />

        {!isLast && (
          <motion.div
            className="absolute mt-12 top-0 bottom-0 w-[2px] bg-[#16423C] sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
          />
        )}
      </div>

      <div className="flex-shrink-0 flex flex-col items-center gap-2 w-1/4 sm:w-full">
        <p className="text-neutral-500 text-sm sm:text-center">{date}</p>
      </div>

      {images ? (
        <div className="flex-grow flex flex-row sm:flex-col md:flex-col gap-4">
          <div className="flex-grow flex flex-col gap-4">
            <h1 className="text-xl font-semibold text-[#16423C] sm:text-center">{title}</h1>
            <p className="leading-relaxed text-gray-700 w-full">{description}</p>
          </div>
          <div className="flex justify-center">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Pagination, Autoplay]}
              className="max-w-xs pb-0" // 기존 클래스에 패딩 바텀을 설정
              style={{ paddingBottom: '0' }} // 패딩 바텀을 추가로 설정
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <img src={image.src} alt={image.alt} className="rounded-lg shadow-xl" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-[#16423C] sm:text-center">{title}</h1>
          <p className="leading-relaxed text-gray-700">{description}</p>
        </div>
      )}
    </motion.div>
  );
};

export default EducationSection;
