export default function Header() {
  return (
    <div className="flex justify-center items-center relative top-4">
      <nav className="flex gap-3 border border-white/20 rounded-full px-1.5 py-1 bg-white/10 backdrop-blur">
        <a
          href=""
          className="nav-item bg-white !text-black hover:bg-white hover:text-black"
        >
          Home
        </a>
        <a href="" className="nav-item">
          About
        </a>
        <a href="" className="nav-item">
          Projects
        </a>
        <a href="" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
}
