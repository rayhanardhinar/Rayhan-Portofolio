import ContactForm from "@/components/contactForm";
import ContactInfo from "@/components/contactInfo";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 pb-20 max-w-7xl mx-auto px-6 md:px-8 min-h-screen scroll-mt-20"
      id="contact"
    >
      <div className="z-20">
        <h2
          className="text-3xl md:text-5xl font-bold mb-12 text-secondary-light text-center"
          data-aos="zoom-in-up"
          data-aos-delay="0"
        >
          Ready to <span className="text-primary-light">Collaborate?</span> I'd
          Love to Hear From <span className="text-primary-light">You</span>
        </h2>

        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8">
          {/* Left Info */}
          <div
            className="flex flex-col flex-1 justify-between items-center md:items-start gap-8"
            data-aos="zoom-in-right"
            data-aos-delay="100"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-light mb-4">
                Contact Information
              </h3>
              <ContactInfo />
            </div>

            <div>
              <h4 className="text-xl md:text-2xl font-light text-secondary-light mb-2">
                Connect with Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/rayhanardhinar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary-light text-xl text-primary-light hover:bg-primary-light hover:text-primary-dark transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/rayhanardhinar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary-light text-xl text-primary-light hover:bg-primary-light hover:text-primary-dark transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/rayhanardhinarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary-light text-xl text-primary-light hover:bg-primary-light hover:text-primary-dark transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="flex-1 rounded-3xl bg-primary-light/80 backdrop-blur-sm shadow-inner p-8 md:p-10"
            data-aos="zoom-in-left"
            data-aos-delay="100"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-dark text-center">
              Send me a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
