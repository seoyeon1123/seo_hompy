import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MyComponentProps {
  title1: string;
  title2?: string;
  title3?: string;
  period: string;
  description: string;
  children?: React.ReactNode;
  delay: number;
}

const Section = ({ title1, title2, title3, period, description, children, delay }: MyComponentProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      transition={{ duration: 1, delay }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      className="flex flex-row px-10 justify-center sm:flex-col sm:items-center sm:gap-2 sm:w-full"
      ref={ref}
    >
      <div className="flex flex-col justify-center items-center gap-2 w-96 text-end">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-center">{title1}</h1>
          <h1 className="text-4xl sm:text-center">{title2}</h1>
          <h1 className="text-4xl sm:text-center">{title3}</h1>
        </div>
        <p className="text-neutral-500">{period}</p>
      </div>
      <div className="border border-r border-solid border-neutral-400 mr-8" />
      <div className="w-3/4 flex justify-center items-center">
        <p className="leading-relaxed text-[#16423C]">{description}</p>
        {children}
      </div>
    </motion.div>
  );
};

export default Section;
