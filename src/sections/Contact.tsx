import styles from '../styles/Home.module.css';
import Image from 'next/image';
import githubIcon from '../../public/images/github.png';
import linkedinIcon from '../../public/images/linkedin.png';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="mb-[100px]">
      <h1 className="text-3xl text-slate-300 mb-10">
        What's <span className="text-cyan-300">Next</span>
      </h1>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl text-slate-300">Get In Touch</h2>
        <p className="text-center">
          Are you in search of a skilled developer to work on your project? Or
          perhaps you have a proposal that you'd like to discuss with me? Either
          way, I'd love to hear from you! Please don't hesitate to reach out and
          let's talk about how I can help bring your ideas to life. Contact me
          now and let's get started!
        </p>
        <div className="flex gap-8 py-2">
          <Link
            href={'https://github.com/matveisch'}
            target="_blank"
            as="image">
            <Image
              src={githubIcon}
              alt="github-icon"
              width={25}
              className={styles.filterGrey}
            />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/matvei-voinich/'}
            target="_blank"
            as="image">
            <Image
              src={linkedinIcon}
              alt="linkedin-icon"
              width={25}
              className={styles.filterGrey}
            />
          </Link>
        </div>
        <a
          href="mailto:matveivoinich@gmail.com"
          className="border border-cyan-300 rounded-md px-2 py-2 text-cyan-300 hover:bg-cyan-300 hover:text-dark-blue">
          Reach Out
        </a>
      </div>
    </section>
  );
}
