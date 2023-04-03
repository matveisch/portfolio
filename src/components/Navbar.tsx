import Logo from '@/components/Logo';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

interface Props extends PropsWithChildren {
  navbarMobile: boolean;
  setNavbarMobile: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({
  children,
  navbarMobile,
  setNavbarMobile,
}: Props) {
  return (
    <nav className="flex justify-between py-5 px-10 items-center fixed w-[100vw] top-0 left-0 bg-dark-blue-blur backdrop-blur z-50">
      <Logo />
      <div className="md:block hidden">{children}</div>
      <button
        className="md:hidden space-y-2"
        onClick={() => setNavbarMobile(!navbarMobile)}>
        <div className="w-8 h-0.5 bg-cyan-300"></div>
        <div className="w-8 h-0.5 bg-cyan-300"></div>
        <div className="w-8 h-0.5 bg-cyan-300"></div>
      </button>
    </nav>
  );
}
