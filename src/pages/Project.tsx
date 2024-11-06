import { useState } from 'react';
import 운동감자 from '../assets/운동감자.png';
import { AnimatePresence, motion } from 'framer-motion';

const Project = () => {
  const [clickedProject, setClickedProject] = useState<number | null>(null);
  const projectDetails = [
    {
      id: 1,
      title: '첫번째 프로젝트',
      name: '운동 감자',
      image: 운동감자,
      description: '운동 감자 프로젝트에 대한 자세한 설명입니다.',
    },
    {
      id: 2,
      title: '두번째 프로젝트',
      name: '프로젝트 2',
      image: '프로젝트2_이미지', // 실제 이미지로 변경
      description: '두번째 프로젝트에 대한 설명입니다.',
    },
    {
      id: 3,
      title: '세번째 프로젝트',
      name: '프로젝트 3',
      image: '프로젝트3_이미지', // 실제 이미지로 변경
      description: '세번째 프로젝트에 대한 설명입니다.',
    },
    {
      id: 4,
      title: '네번째 프로젝트',
      name: '프로젝트 4',
      image: '프로젝트4_이미지', // 실제 이미지로 변경
      description: '네번째 프로젝트에 대한 설명입니다.',
    },
  ];

  const handleClick = (id: number) => {
    // 클릭한 프로젝트의 id에 맞는 상세 정보를 표시
    if (clickedProject === id) {
      setClickedProject(null); // 이미 클릭된 프로젝트를 다시 클릭하면 모달을 닫음
    } else {
      setClickedProject(id);
    }
  };

  return (
    <>
      <div className="bg-neutral-100 h-full rounded-lg w-full p-5">
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {projectDetails.map((project) => (
            <div
              key={project.id}
              className="w-full h-full bg-white p-5 flex flex-row justify-around items-center cursor-pointer"
              onClick={() => handleClick(project.id)}
            >
              <div className="flex flex-col gap-3 text-center">
                <h1 className="text-xl">{project.title}</h1>
                <p className="text-3xl">{project.name}</p>
              </div>
              <img src={project.image} alt={project.name} className="h-64" />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {clickedProject !== null && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-3/5 h-3/5 bg-white p-5 rounded-lg border border-b border-black">
                <h2 className="text-2xl font-bold">{projectDetails[clickedProject - 1].title}</h2>
                <p>{projectDetails[clickedProject - 1].description}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => setClickedProject(null)} // 닫기 버튼 클릭 시 모달 닫기
                >
                  닫기
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Project;
