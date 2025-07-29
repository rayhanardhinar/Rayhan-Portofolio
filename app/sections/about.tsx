import WorkTimeline from "@/components/workTimeline";
import EduTimeline from "@/components/eduTimeline";
import CertificationCardImage from "@/components/certificationCard";
import { certificationList } from "../data/certification-data";

export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 pb-32 max-w-7xl mx-auto px-8 min-h-screen"
      id="about"
    >
      <div className="tracking-wide z-20">
        <div>
          <h1
            className="text-3xl md:text-5xl md:text-left font-bold mb-8 text-center"
            data-aos="zoom-in-up"
            data-aos-delay="0"
          >
            Adaptive <span className="text-primary-light">Web Developer</span>{" "}
            with a <span className="text-primary-light">Growth Mindset</span>
          </h1>
          <div
            className="flex flex-col gap-4 text-sm md:text-base"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <p>
              With a background in Informatics Engineering, I am an enthusiastic
              web developer driven by a deep curiosity and a commitment to
              continuous improvement.
            </p>
            <p>
              I excel in fast-paced environments, where I can quickly adapt to
              new technologies and challenges. My passion lies in creating
              impactful digital experiences, working collaboratively with
              diverse teams, and continuously sharpening my technical and
              creative skills.
            </p>
            <p>
              I'm always eager to take on opportunities that push me to
              grow—both as a developer and as a professional in the evolving
              tech landscape.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:px-20 gap-10 md:gap-20 justify-center pt-20">
          <div
            className="flex flex-col flex-1"
            data-aos="zoom-in-right"
            data-aos-delay="100"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-light">
                <span className="text-primary-light">Work</span> Experience
              </h1>
              <WorkTimeline />
            </div>
          </div>

          <div
            className="flex flex-col flex-1"
            data-aos="zoom-in-left"
            data-aos-delay="100"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-light">
                <span className="text-primary-light">Educational</span>{" "}
                Background
              </h1>
              <EduTimeline />
            </div>
            <div className="absolute border border-secondary-light rounded-full w-40 h-40 bg-primary-light shadow-2xl blur-[120px] top-[2300px] right-[80px] md:top-[1800px] md:right-[280px] z-0"></div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center pt-20">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Each <span className="text-primary-light">Certification</span> Marks
            a <span className="text-primary-light">Step Forward</span> in My{" "}
            <span className="text-primary-light">Web Development Journey</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lazy">
            {certificationList.map((certification) => (
              <CertificationCardImage
                key={certification.id}
                title={certification.title}
                image={certification.image}
                issuer={certification.issuer}
                link={certification.link}
              />
            ))}
          </div>
          <div className="absolute border border-secondary-light rounded-full w-40 h-40 bg-primary-light shadow-2xl blur-[120px] z-0"></div>
        </div>
      </div>
      <div className="absolute border border-secondary-light rounded-full w-40 h-40 bg-primary-light shadow-2xl top-[1500px] right-[240px] md:top-[1200px] md:right-[1200px] blur-[120px] z-0"></div>
    </div>
  );
}
