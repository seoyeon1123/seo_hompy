import { useState } from 'react';
import { FaGithub, FaEnvelope, FaBloggerB, FaInstagram } from 'react-icons/fa';
import supabase from '../supabaseClient';
import { motion } from 'framer-motion';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState(false);

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

        console.log(data);

        if (error) {
          throw error;
        }

        setFormData({ name: '', email: '', message: '' });

        setError(null);
        setSuccessMessage(true);

        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      } catch (error) {
        setError('메시지 저장에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  return (
    <div className="bg-[#16423C] pt-28 p-8 shadow-lg min-h-screen flex flex-col justify-center items-center relative lg:px-[200px]">
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

        {successMessage && (
          <motion.div
            className="text-white font-semibold text-xl pt-10 text-center absolute bottom-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            방명록을 남겨주셔서 감사합니다 . <br />더 멋진 개발자가 되도록 하겠습니다 💪🏻
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Connect;
