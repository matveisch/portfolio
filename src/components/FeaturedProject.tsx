import Image, { StaticImageData } from 'next/image';
import githubIcon from '../../public/images/github.png';
import linkIcon from '../../public/images/external-link.png';
import styles from '../styles/Home.module.css';

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
  const { title, cover, description, stack, linkGithub, linkWebsite, rtl } = props;

  return (
    <div className={rtl ? 'grid grid-cols-3 items-center grid-rows-1' : 'grid grid-cols-3 items-center'}>
      <div
        className={`max-w-[500px] rounded-md row-start-1 ${
          rtl ? 'col-start-4 col-end-3 place-self-end' : 'col-start-1 col-end-3 place-self-start'
        } bg-cyan-300`}>
        <a href={linkWebsite}>
          <Image
            src={cover}
            alt="project-cover"
            className={`max-w-[500px] rounded-md grayscale contrast-100 mix-blend-multiply hover:filter-none hover:mix-blend-normal`}
          />
        </a>
      </div>
      <div
        className={`row-start-1 flex flex-col z-10
          ${rtl ? 'col-start-1 col-end-3 items-start' : 'col-start-2 col-end-4 items-end'}
        `}>
        <h4 className="mb-1 text-cyan-300">Featured Project</h4>
        <h2 className="mb-4 text-2xl text-slate-300">{title}</h2>
        <div className="bg-[#112240] p-2 rounded-md mb-4">
          <p className={`${!rtl && 'text-end'}`}>{description}</p>
        </div>
        <div className="flex gap-3">
          {stack.map(item => {
            return <p key={item}>{item}</p>;
          })}
        </div>
        <div className="flex gap-4 items-center mt-3">
          <a href={linkGithub}>
            <Image src={githubIcon} alt="github-icon" width={20} className={`${styles.filter}`} />
          </a>
          <a href={linkWebsite}>
            <Image src={linkIcon} alt="link-icon" width={20} className={`${styles.filter}`} />
          </a>
        </div>
      </div>
    </div>
  );
}
