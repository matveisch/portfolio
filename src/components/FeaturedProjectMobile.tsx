import Image from 'next/image';
import githubIcon from '../../public/images/github.png';
import linkIcon from '../../public/images/external-link.png';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useIsVisible } from '@/interface/useIsVisible';

interface Props {
  title: string;
  description: string;
  stack: string[];
  linkGithub: string;
  linkWebsite: string;
}

export default function FeaturedProjectMobile(props: Props) {
  const { title, description, stack, linkGithub, linkWebsite } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const [visibleOnce, setVisibleOnce] = useState(false);

  useEffect(() => {
    if (isVisible) setVisibleOnce(true);
  }, [isVisible]);

  return (
    <div
      className={`flex flex-col z-20 p-8 bg-[#112240] rounded-md ${
        visibleOnce && styles.fadeInSlow
      }`}
      ref={ref}>
      <h4 className="mb-1 text-cyan-300">Featured Project</h4>
      <h2 className="mb-4 text-2xl text-slate-300">{title}</h2>
      <div className="mb-4">
        <p>{description}</p>
      </div>
      <div className="flex gap-3 flex-wrap">
        {stack.map(item => {
          return <p key={item}>{item}</p>;
        })}
      </div>
      <div className="flex gap-4 items-center mt-3">
        <Link href={linkGithub} target="_blank" as="image">
          <Image
            src={githubIcon}
            alt="github-icon"
            width={20}
            className={`${styles.filter}`}
          />
        </Link>
        <Link href={linkWebsite} target="_blank" as="image">
          <Image
            src={linkIcon}
            alt="link-icon"
            width={20}
            className={`${styles.filter}`}
          />
        </Link>
      </div>
    </div>
  );
}
