import { useState } from 'react';
import { FaGithub, FaEnvelope, FaBloggerB, FaInstagram, FaBook } from 'react-icons/fa';
import supabase from '../supabaseClient';
import Guestbook from '../components/Guestbook';
import { motion } from 'framer-motion';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.message) {
      try {
        const { data, error } = await supabase
          .from('guestbook_entries')
          .insert([{ name: formData.name, email: formData.email, message: formData.message }])
          .single();

        if (error) {
          throw error;
        }

        setFormData({ name: '', email: '', message: '' });
        setError(null);
      } catch (error) {
        setError('메시지 저장에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#16423C] pt-28 p-8 shadow-lg min-h-screen flex flex-col justify-center items-center relative">
      <motion.div
        className="flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-[#E9EFEC] mb-6 text-center">Leave a Message!</h2>
        <p className="text-gray-400 text-center mb-10">
          프로젝트 제안이나 궁금한 점이 있다면 언제든 방명록에 남겨주세요. 함께 성장할 기회를 기다리고 있습니다!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="mailto:lsy_0906@naver.com"
            aria-label="Email"
            className="text-[#E9EFEC] text-2xl hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/seoyeon1123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#E9EFEC] text-2xl hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://velog.io/@your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Velog"
            className="text-[#E9EFEC] text-2xl hover:text-green-400 transition"
          >
            <FaBloggerB />
          </a>
          <a
            href="https://www.instagram.com/s___yexn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#E9EFEC] text-2xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="당신은 누구인가요?"
            required
            className="w-full p-3 border border-gray-600 bg-[#1B524C] rounded-lg text-[#E9EFEC] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E9EFEC]"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="당신의 연락처는? (선택사항 입니다 :)"
            className="w-full p-3 border border-gray-600 bg-[#1B524C] rounded-lg text-[#E9EFEC] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E9EFEC]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="보내줄 내용을 입력해주세요 🫶"
            rows={4}
            required
            className="w-full p-3 border border-gray-600 bg-[#1B524C] rounded-lg text-[#E9EFEC] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E9EFEC]"
          />
          <button
            type="submit"
            className="w-full hover:bg-[#0a312d] text-white py-3 rounded-lg bg-[#1B524C] transition"
          >
            Leave Message
          </button>
        </form>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Book Icon with Hover */}
        <h3
          onClick={toggleModal}
          className="absolute top-10 sm:top-0 right-6 cursor-pointer text-3xl font-bold mb-6 text-center mt-10 transition text-white px-6 py-3 rounded-lg hover:scale-110 transform duration-300"
          onMouseEnter={handleOpen} // 마우스 올리면 상태 변경
          onMouseLeave={handleClose} // 마우스를 떼면 상태 변경
        >
          <div className="flex flex-row items-end gap-2">
            {isOpen && (
              <motion.div
                className="flex flex-row items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <motion.span
                  className="text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 0.1, // 각 글자가 0.1초마다 나타나도록 설정
                  }}
                >
                  {['방', '명', '록', '을', ' ', '보', '러', ' ', '오', '셨', '나요', '?'].map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: index * 0.1, // 글자마다 조금씩 차이를 두고 등장
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span
                  className="text-lg text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.5,
                  }}
                >
                  ⇢
                </motion.span>
              </motion.div>
            )}
            <FaBook size={40} color="#E4E0E1" className="sm:size-8" />
          </div>
        </h3>

        {/* Guestbook Modal */}
        {isModalOpen && <Guestbook toggleModal={toggleModal} />}
      </motion.div>
    </div>
  );
};

export default Connect;
