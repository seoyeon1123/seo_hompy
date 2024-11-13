import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import supabase from '../supabaseClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // 네비게이션 모듈 추가

interface Project {
  id: number;
  title: string;
  period: string;
  images: { src: string; alt: string }[]; // images 필드 타입 정의
  description: string[];
  github_url: string;
  features: string[];
  vercel_url: string | null;
}

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjectsFromSupabase = async () => {
    const { data: projects, error } = await supabase.from('projects').select('*').order('id', { ascending: true }); // 'id' 순서대로 정렬;

    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(projects as Project[]);
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져옵니다.
  useEffect(() => {
    fetchProjectsFromSupabase();
  }, []);

  return (
    <div className="flex flex-col  bg-[#16423C] px-6 py-8 gap-12 pt-28 ">
      {projects.length > 0 ? (
        <Swiper
          spaceBetween={20} // 슬라이드 간의 간격
          slidesPerView={1} // 한 번에 보여줄 슬라이드 수
          loop={false} // 루프 없이
          navigation={true} // 네비게이션 버튼 활성화
          modules={[Navigation]} // 네비게이션 모듈 추가
          className="w-full" // Swiper에 전체 너비 설정
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard {...project} /> {/* 각 프로젝트 카드 렌더링 */}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-[#E9EFEC]">No projects available.</p>
      )}
    </div>
  );
};

export default Project;
