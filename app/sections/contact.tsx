import ContactForm from "@/components/contactForm";
import ContactInfo from "@/components/contactInfo";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 pb-20 max-w-7xl mx-auto px-8 min-h-screen"
      id="contact"
    >
      <div className="z-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-secondary-light text-center">
          Ready to <span className="text-primary-light">Collaborate?</span> I'd
          Love to Hear From <span className="text-primary-light">You</span>
        </h2>
        <div className="container flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex flex-col flex-1 items-center md:items-start gap-8 ">
            <div className="flex flex-col flex-1 items-center md:items-start md:gap-8">
              <h2 className="text-2xl md:text-3xl mb-4 font-bold text-secondary-light">
                Contact Information
              </h2>
              <ContactInfo />

              <div className="flex flex-col items-center md:items-start mb-8">
                <h2 className="text-xl md:text-2xl font-light text-secondary-light pt-6">
                  Connect with Me
                </h2>
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/rayhanardhinar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-3 rounded-full text-xl hover:bg-primary-light">
                      <FaLinkedin />
                    </button>
                  </a>
                  <a
                    href="https://github.com/rayhanardhinar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-3 rounded-full text-xl hover:bg-primary-light">
                      <FaGithub />
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/rayhanardhinarr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="p-3 rounded-full text-xl hover:bg-primary-light">
                      <FaInstagram />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center bg-primary-light rounded-3xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-dark">
              Send me a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
