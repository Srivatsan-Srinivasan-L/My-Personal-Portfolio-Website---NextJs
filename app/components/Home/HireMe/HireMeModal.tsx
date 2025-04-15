"use client";
import { IoClose } from "react-icons/io5";
import { FaLinkedin, FaGithub  } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const HireMeModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          <IoClose />
        </button>

        {/* Title */}
        <h2 className="text-2xl  font-bold text-center mb-4">
          Let’s Work Together 🤝
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
        
          Interested in collaborating or hiring me? Feel free to reach out via any platform below! ❤️😊
        </p>

        {/* Buttons Grid */}
        <div className="grid text-sm grid-cols-2 gap-4">
          <a
            href="mailto:srivatsan042@gmail.com"
            className="px-4 py-3 text-base text-center bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded"
          >
            Email Me
          </a>
          <a
            href="images/Srivatsan-S-Resume.pdf"
            target="_blank"
            className="px-4 py-3 text-center text-sm bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded"
          >
            View Resume
          </a>
          <a
            href="https://linkedin.com/in/srivatsan-s1501"
            target="_blank"
            className="px-4 py-3 text-center bg-[#0077B5] hover:opacity-80 transition text-white font-semibold rounded flex items-center justify-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
  href="https://github.com/Srivatsan-Srinivasan-L"
  target="_blank"
  className="px-4 py-3 text-center bg-gray-800 hover:bg-gray-900 transition text-white font-semibold rounded flex items-center justify-center gap-2"
>
  <FaGithub /> GitHub
</a>
        </div>
      </div>
    </div>
  );
};

export default HireMeModal;
