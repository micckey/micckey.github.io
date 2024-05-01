import { useState } from "react";
import { FaPaperPlane, FaPhone, FaRegCopyright } from "react-icons/fa";
import { FiInstagram, FiGithub, FiSlack } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    Message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/xkndyror", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (response.ok) {
        setAlertMessage("Thank you for your message 🎉");
        setShowAlert(true);
        setFormData({ Name: "", email: "", Message: "" });
        setTimeout(() => {
          setShowAlert(false);
        }, 3000); // Hide alert after 3 seconds
      } else {
        setAlertMessage("Error sending message ❌");
        setShowAlert(true);
      }
    })
    .catch((error) => {
      console.error("Error!", error.message);
      setAlertMessage("Error sending message ❌");
      setShowAlert(true);
    });
  };

  return (
    <div id="contact" className="mt-30 bg-my-bg text-white">
      <div className="container px-5 lg:ml-36">
        <h1 className="text-3xl font-bold text-center mb-5">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center mx-10">
            <p className="flex items-center mb-2 lg:text-xl">
              <FaPaperPlane className="text-base mr-2" />
              mykeowen254@gmail.com
            </p>
            <p className="flex items-center justify-center lg:justify-start mb-2 lg:text-xl">
              <FaPhone className="text-base mr-2" />
              0729751130
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="https://instagram.com/tuffgon.g"
                className="mr-4 hover:text-gray-300 transition-transform duration-500 transform hover:-translate-y-1"
              >
                <FiInstagram className="text-xl " />
              </a>
              <a
                href="https://github.com/micckey"
                className="mr-4 hover:text-gray-300 transition-transform duration-500 transform hover:-translate-y-1"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://slack.com/"
                className="mr-4 hover:text-gray-300 transition-transform duration-500 transform hover:-translate-y-1"
              >
                <FiSlack className="text-xl" />
              </a>
            </div>
            <a
              href="mikecv.pdf"
              download
              className="mt-8 border text-center border-blanchedalmond lg:mr-72 px-10 py-3 rounded text-antiquewhite bg-gray-800 transition-colors duration-500 hover:bg-gray-600"
            >
              Download CV
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <form
              name="submit-to-formspree"
              onSubmit={handleSubmit}
              className="w-full"
            >
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full bg-white text-black p-4 mb-4 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white text-black p-4 mb-4 rounded-lg"
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                value={formData.Message}
                onChange={handleChange}
                className="w-full bg-white text-black p-4 mb-4 rounded-lg"
              ></textarea>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="border border-blanchedalmond px-10 py-3 rounded text-antiquewhite bg-gray-800 transition-colors duration-500 hover:bg-gray-600"
                >
                  Submit
                </button>
              </div>
            </form>
            {showAlert && (
              <div className="alert success text-center">
                {alertMessage}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full text-center py-6 mt-8">
        <p>
          Copyright <FaRegCopyright className="inline-block align-middle" />{" "}
          Juma.
        </p>
      </div>
    </div>
  );
}
