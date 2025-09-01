import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import myLogo from "../assets/logo.png";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";

export default function MinimalNavBar({ githubLink }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-my-bg p-3 flex items-center justify-center">
      <div className="flex items-center flex-shrink-0 text-white">
        <img
          className="w-16 h-16 rounded-full mr-5"
          src={myLogo}
          alt="Michael Juma"
        />
        {location.pathname !== "/" && (
          <button
            onClick={handleGoBack}
            className="mr-5 flex items-center text-lg"
          >
            <IoArrowBackOutline className="mr-1" size={20} />
            <span style={{ textDecoration: "underline" }}>Back</span>
          </button>
        )}
      </div>
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-4 py-2 rounded text-white bg-gray-800 transition-colors duration-500 hover:bg-gray-600 flex items-center text-lg"
        >
          <FiGithub className="mr-2 text-white" size={20} /> GitHub
        </a>
      )}
    </nav>
  );
}

// Define propTypes
MinimalNavBar.propTypes = {
  githubLink: PropTypes.string,
};
