import Image, { StaticImageData } from 'next/image';
import githubIcon from '../../public/images/github.png';
import linkIcon from '../../public/images/external-link.png';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from '@/interface/useIsVisible';

interface Props {
  title: string;
  cover: StaticImageData;
  description: string;
  stack: string[];
  linkGithub: string;
  linkWebsite: string;
  rtl: boolean;
}

export default function FeaturedProject(props: Props) {
  const { title, cover, description, stack, linkGithub, linkWebsite, rtl } =
    props;
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const [visibleOnce, setVisibleOnce] = useState(false);

  useEffect(() => {
    if (isVisible) setVisibleOnce(true);
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-[33.3%_33.3%_33.3%] items-center relative grid-rows-1 min-h-[300px] ${
        rtl && 'grid-rows-1'
      }`}
    >
      <div
        className={`max-w-[500px] rounded-md row-start-1 col-end-3 absolute transition-all duration-1000 delay-700 ${
          rtl
            ? `col-start-4 place-self-end ${
                visibleOnce ? 'right-0' : 'right-[-300px]'
              }`
            : `col-start-1 place-self-start ${
                visibleOnce ? 'left-0' : 'left-[-300px]'
              }`
        } bg-cyan-300`}
      >
        <Link href={linkWebsite} target="_blank" as="image">
          <Image
            priority
            src={cover}
            alt="project-cover"
            className={`max-w-[500px] rounded-md grayscale contrast-100 mix-blend-multiply hover:filter-none hover:mix-blend-normal`}
          />
        </Link>
      </div>
      <div
        className={`row-start-1 flex flex-col z-10 absolute transition-all duration-1000 delay-700
          ${
            rtl
              ? `col-start-1 col-end-3 items-start ${
                  visibleOnce ? 'left-0' : 'left-[-300px]'
                }`
              : `col-start-2 col-end-4 items-end ${
                  visibleOnce ? 'right-0' : 'right-[-300px]'
                }`
          }
        `}
      >
        <h4 className="mb-1 text-cyan-300">Featured Project</h4>
        <h2 className="mb-4 text-2xl text-slate-300">{title}</h2>
        <div className="bg-[#112240] p-2 rounded-md mb-4">
          <p className={`w-[500px] ${!rtl && 'text-end'}`}>{description}</p>
        </div>
        <div className="flex gap-3">
          {stack.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
        <div className="flex gap-4 items-center mt-3">
          {linkGithub.length > 1 && (
            <Link href={linkGithub} target="_blank">
              <Image
                src={githubIcon}
                alt="github-icon"
                width={20}
                className={`${styles.filter}`}
              />
            </Link>
          )}
          {linkWebsite.length > 1 && (
            <Link href={linkWebsite} target="_blank">
              <Image
                src={linkIcon}
                alt="link-icon"
                width={20}
                className={`${styles.filter}`}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
