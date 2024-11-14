import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import supabase from '../supabaseClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col bg-[#16423C] px-6 py-8 gap-12 pt-28" ref={projectRef}>
      {projects.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: 'spring',
            stiffness: 30,
            damping: 15,
          }}
        >
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
        </motion.div>
      ) : (
        <p className="text-[#E9EFEC]">No projects available.</p>
      )}
    </div>
  );
};

export default Project;
