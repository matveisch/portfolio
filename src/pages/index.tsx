import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Intro from '@/sections/Intro';
import About from '@/sections/About';
import { useEffect, useRef, useState } from 'react';
import Experience from '@/sections/Experience';
import Work from '@/sections/Work';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [navbarMobile, setNavbarMobile] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 768) setNavbarMobile(false);
  }, [screenWidth]);

  function handleClickOutside(e: { target: any }) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setNavbarMobile(false);
    }
  }

  function Buttons() {
    return (
      <div
        ref={wrapperRef}
        className={`
          flex flex-col fixed top-[80px] left-0 gap-4 w-[100vw] bg-dark-blue-blur backdrop-blur z-50 items-center pb-4
          md:left-[unset] md:w-[unset] md:flex-row md:relative md:top-0 md:pb-[unset]
        `}>
        <button
          className={`{hover:text-cyan-300 text-slate-300 ${styles.fadeIn}`}
          onClick={() => {
            aboutRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            setNavbarMobile(false);
          }}>
          About
        </button>
        <button
          className={`{hover:text-cyan-300 text-slate-300 ${styles.fadeIn}`}
          style={{ animationDuration: '2s' }}
          onClick={() => {
            experienceRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            setNavbarMobile(false);
          }}>
          Experience
        </button>
        <button
          className={`{hover:text-cyan-300 text-slate-300 ${styles.fadeIn}`}
          style={{ animationDuration: '3s' }}
          onClick={() => {
            workRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            setNavbarMobile(false);
          }}>
          Work
        </button>
        <button
          className={`{hover:text-cyan-300 text-slate-300 ${styles.fadeIn}`}
          style={{ animationDuration: '4s' }}
          onClick={() => {
            contactRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            setNavbarMobile(false);
          }}>
          Contact
        </button>
        <button
          className={`border border-cyan-300 rounded-md px-1 py-2 text-cyan-300 hover:bg-cyan-300 hover:text-dark-blue ${styles.fadeIn}`}
          style={{ animationDuration: '5s' }}>
          Resume
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Matvei Voinich</title>
        <meta name="description" content="Portfolio of Matvei Voinich" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="mx-[10vw]">
        <header className="relative">
          <Navbar navbarMobile={navbarMobile} setNavbarMobile={setNavbarMobile}>
            <Buttons />
          </Navbar>
          {navbarMobile && (
            <div
              className="fixed top-[218px] bottom-0 left-0 right-0 z-50"
              onClick={handleClickOutside}>
              <Buttons />
            </div>
          )}
        </header>
        <Intro />
        <div ref={aboutRef} className="scroll-mt-20">
          <About />
        </div>
        <div ref={experienceRef} className="scroll-mt-20">
          <Experience />
        </div>
        <div ref={workRef} className="scroll-mt-20">
          <Work />
        </div>
        <div ref={contactRef} className="scroll-mt-20">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
