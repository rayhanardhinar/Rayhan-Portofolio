import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 pb-20 max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-secondary-light text-center">
          Ready to <span className="text-primary-light">Collaborate?</span> I'd
          Love to Hear From <span className="text-primary-light">You</span>
        </h2>
        <div className="container flex flex-col md:flex-row items-center justify-center gap-4 border">
          <div className="flex flex-col flex-1 items-center">
            <div className="flex flex-col flex-1 items-center">
              <h2>Contact Information</h2>
              <MdEmail />
            </div>
            <div className="flex flex-col flex-1 items-center"></div>
          </div>
          <div className="flex flex-col flex-1 items-center">
            <h2>Send A Message</h2>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/rayhanardhinar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 rounded-full text-xl hover:bg-primary-light">
            <FaLinkedin />
          </button>
        </a>
        <a
          href="https://github.com/rayhanardhinar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 rounded-full text-xl hover:bg-primary-light">
            <FaGithub />
          </button>
        </a>
        <a
          href="https://instagram.com/rayhanardhinarr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="p-4 rounded-full text-xl hover:bg-primary-light">
            <FaInstagram />
          </button>
        </a>
      </div>
    </>
  );
}
