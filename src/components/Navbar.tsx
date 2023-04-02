import Logo from '@/components/Logo';
import { PropsWithChildren } from 'react';

export default function Navbar({ children }: PropsWithChildren) {
  return (
    <nav className="flex justify-between py-5 px-10 items-center fixed w-[100vw] left-0 bg-dark-blue-blur backdrop-blur">
      <Logo />
      <div className="md:flex gap-4 hidden">
        {children}
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
