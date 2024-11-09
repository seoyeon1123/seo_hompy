interface ICardProps {
  title: string;
  content: string;
  secondContent: string;
}

const Card = ({ title, content, secondContent }: ICardProps) => (
  <div
    className="bg-[#16423C] text-[#E9EFEC] p-8 h-72 rounded-2xl shadow-lg max-w-lg w-full flex flex-col gap-4 
  transition-transform hover:scale-105 hover:shadow-xl sm:h-[360px]"
  >
    <h2 className="text-2xl md:text-2xl font-semibold">{title}</h2>
    <p className="text-base md:text-lg leading-relaxed">{content}</p>
    <p className="text-base md:text-lg leading-relaxed">{secondContent}</p>
  </div>
);

export default Card;
