import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import supabase from '../supabaseClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../styles/swiper.css';

interface Project {
  id: number;
  title: string;
  period: string;
  images: { src: string; alt: string }[];
  description: string[];
  github_url: string;
  features: string[];
  vercel_url: string | null;
}

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjectsFromSupabase = async () => {
    const { data: projects, error } = await supabase.from('projects').select('*').order('id', { ascending: true });
    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(projects as Project[]);
    }
  };

  useEffect(() => {
    fetchProjectsFromSupabase();
  }, []);

  return (
    <>
      <div className="flex flex-col px-6 py-10 gap-12" id="project">
        {projects.length > 0 ? (
          <>
            <div className="flex flex-col justify-center items-center gap-2 my-10 ">
              <h1 className="text-lg font-bold text-[#fbe797] leading-tight">Projects</h1>
              <p className="text-3xl font-semibold text-center">
                다양한 프로젝트로 기술과 <br /> 경험을 쌓아가고 있어요.
              </p>
            </div>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={false}
              navigation={true}
              modules={[Navigation]}
              className="w-full"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <p className="text-[#E9EFEC]">No projects available.</p>
        )}
      </div>
    </>
  );
};

export default Project;
