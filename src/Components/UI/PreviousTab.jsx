import { Link } from "react-router-dom";

const PreviousTab = ({ link }) => {
  return (
    <Link
      to={link}
      className="w-fit flex items-center gap-2 my-6 bg-[#252525] border border-gray-600 text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back
    </Link>
  );
};

export default PreviousTab;
