import Logo from '@/components/Logo';

export default function Navbar() {
  return (
    <nav className="flex justify-between my-5 items-center">
      <Logo />
      <div className="md:flex gap-4 hidden">
        <button className="hover:text-cyan-300 text-slate-300">About</button>
        <button className="hover:text-cyan-300 text-slate-300">Experience</button>
        <button className="hover:text-cyan-300 text-slate-300">Work</button>
        <button className="hover:text-cyan-300 text-slate-300">Contact</button>
        <button className="border border-cyan-300 rounded-md px-1 py-2 text-cyan-300 hover:bg-cyan-300 hover:text-dark-blue">
          Resume
        </button>
      </div>
      <button className="md:hidden space-y-2">
        <div className="w-8 h-0.5 bg-cyan-300"></div>
        <div className="w-8 h-0.5 bg-cyan-300"></div>
        <div className="w-8 h-0.5 bg-cyan-300"></div>
      </button>
    </nav>
  );
}
