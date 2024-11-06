import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

const techBadges = [
  'https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
  'https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white',
  'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
  'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
  'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
  'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white',
  'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
  'https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white',
  'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black',
  'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
  'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white',
  'https://img.shields.io/badge/Jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white',
];

const Home = () => {
  const [badges, setBadges] = useState(techBadges);

  const handleDragEnd = ({ destination, source }: DropResult) => {
    // destination이 없으면 종료
    if (!destination) return;

    setBadges((oldBadges) => {
      const badges = Array.from(oldBadges);
      const [removed] = badges.splice(source.index, 1);
      badges.splice(destination.index, 0, removed);

      return badges;
    });
  };

  return (
    <>
      <div className="bg-neutral-100 h-full rounded-lg p-5">
        <div>
          <h1 className="text-2xl font-semibold mb-2">서연이의 미니홈피</h1>
          <div className="flex flex-row gap-3 bg-white p-3 rounded-lg justify-around">
            <div className="w-2/5">
              <h2 className="text-blue-500 text-2xl">Introduction</h2>
              <div className="border-t border-gray-300 my-2 border-dashed" />
              <div className="flex flex-col gap-2">
                <p className="text-sm">
                  안녕하세요. 보육교사에서 개발자로 전향 중인 <br />
                  멋쟁이 이서연 입니다.
                </p>
                <p>・ 취미 : 운동</p>
                <p>・ 특기 : 만들기</p>
              </div>
            </div>
            <div className="w-3/5">
              <h2 className="text-blue-500 text-2xl">기술 스택</h2>
              <div className="border-t border-gray-300 my-2 border-dashed" />
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="badges" direction="horizontal">
                  {(provided) => (
                    <div className="flex flex-wrap gap-3" ref={provided.innerRef} {...provided.droppableProps}>
                      {badges.map((badge, index) => (
                        <Draggable key={`draggable-${index}`} draggableId={`badge-${index}`} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="transition-transform duration-200 ease-in-out"
                            >
                              <img src={badge} alt={`badge-${index}`} className="cursor-pointer" />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
