export default function Footer() {
  return (
    <div className="absolute flex flex-col items-center justify-center gap-4 py-4 w-full mx-auto px-8 bg-primary-light ">
      <div className="z-20">
        <p className="text-center md:text-left font-medium text-primary-dark">
          &copy; {new Date().getFullYear()} Rayhan Ardhinar. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
