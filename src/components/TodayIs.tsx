import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const TodayIs = () => {
  const options = ['즐거움', '행복함', '도전적', '기대됨'];

  const [savedOption, setSavedOption] = useState('즐거움');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchTodayMood = async () => {
      const { data, error } = await supabase
        .from('today_mood')
        .select('mood')
        .eq('created_at', new Date().toISOString().split('T')[0]) // 오늘 날짜에 해당하는 데이터 검색
        .single();

      if (data) {
        setSavedOption(data.mood);
        setIsSaved(true); // 이미 저장된 기분이 있을 경우 상태 변경
      } else if (error) {
        console.error('Error fetching mood:', error.message);
      }
    };

    fetchTodayMood();
  }, []);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleOptionSelect = async (option: string) => {
    if (isSaved) {
      // 오늘의 기분이 이미 저장되었다면 저장할 수 없음
      alert('오늘의 기분은 이미 저장되었습니다!');
      return;
    }

    const { error } = await supabase
      .from('today_mood')
      .insert([{ mood: option, created_at: new Date().toISOString().split('T')[0] }]);

    if (error) {
      console.error('Error saving mood:', error.message);
    } else {
      setSavedOption(option);
      setIsSaved(true);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 border-2 border-neutral-300 p-4 rounded-md">
      <div className="flex justify-center items-center gap-4">
        <span className="font-bold text-blue-400">TODAY IS ... </span>

        <span onClick={toggleModal} className="cursor-pointer font-bold text-black">
          {savedOption}
        </span>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md w-64">
            <h2 className="text-center font-bold mb-2">오늘의 기분 선택</h2>
            <ul className="flex flex-col gap-2">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className="p-2 cursor-pointer hover:bg-gray-200 rounded-md text-center"
                >
                  {option}
                </li>
              ))}
            </ul>
            <button onClick={toggleModal} className="mt-4 w-full bg-gray-300 p-2 rounded-md text-gray-700">
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayIs;
