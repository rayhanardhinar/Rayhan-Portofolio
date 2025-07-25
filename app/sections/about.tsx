import WorkTimeline from "@/components/workTimeline";
import EduTimeline from "@/components/eduTimeline";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-32 max-w-7xl mx-auto px-8">
      <div className="tracking-wide">
        <h1 className="text-3xl md:text-5xl md:text-left font-bold mb-4 text-center">
          Adaptive <span className="text-primary-light">Web Developer</span>{" "}
          with a <span className="text-primary-light">Growth Mindset</span>
        </h1>
        <div className="flex flex-col gap-4 text-sm md:text-lg">
          <p>
            With a background in Informatics Engineering, I am an enthusiastic
            web developer driven by a deep curiosity and a commitment to
            continuous improvement.
          </p>
          <p>
            I excel in fast-paced environments, where I can quickly adapt to new
            technologies and challenges. My passion lies in creating impactful
            digital experiences, working collaboratively with diverse teams, and
            continuously sharpening my technical and creative skills.
          </p>
          <p>
            I'm always eager to take on opportunities that push me to grow—both
            as a developer and as a professional in the evolving tech landscape.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 pt-20">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 text-secondary-light">
              Work Experience
            </h1>
            <WorkTimeline />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 text-secondary-light">
              Education Background
            </h1>
            <EduTimeline />
            <div className="absolute border border-secondary-light rounded-full w-40 h-40 bg-primary-light shadow-2xl blur-[120px] top-[2000px] right-[120px] md:top-[1400px] md:right-[280px] z-0"></div>
          </div>
          <div className="absolute border border-secondary-light rounded-full w-40 h-40 bg-primary-light shadow-2xl blur-[120px] z-0"></div>
        </div>
      </div>
    </div>
  );
}
