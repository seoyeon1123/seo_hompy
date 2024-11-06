import React from 'react';

type ProjectDetailsProps = {
  title: string;
  description: string;
  onClose: () => void;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ title, description, onClose }) => {
  return (
    <div className="w-4/5 md:w-3/5 h-4/5 md:h-3/5 bg-white p-6 rounded-lg border shadow-lg flex flex-col justify-between">
      <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
      <div className="flex flex-col gap-4 overflow-y-auto">
        <p className="text-lg text-gray-700">{description}</p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
