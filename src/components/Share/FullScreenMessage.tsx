import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

interface IFullScreenMessageProps {
  type: 'loading' | 'error';
}

const FullScreenMessage = ({ type }: IFullScreenMessageProps) => {
  return (
    <>
      {type === 'loading' ? (
        <div className="flex justify-center items-center h-screen">
          <FontAwesomeIcon icon={faGratipay} className="text-pink-400 w-12 h-12 animate-pulse" />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center h-screen gap-4">
          <FontAwesomeIcon icon={faFaceFrown} className="text-black w-10 h-10" />
          <p>에러가 발생했어요. 잠시후 다시 시도해주세요.</p>
        </div>
      )}
    </>
  );
};

export default FullScreenMessage;
