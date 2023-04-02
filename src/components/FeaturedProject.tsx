import Image, { StaticImageData } from 'next/image';

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
      <Image
        src={cover}
        alt="project-cover"
        className={`max-w-[500px] rounded-md ${rtl && 'flex col-start-4 col-end-3 place-self-end'}`}
      />
      <div
        className={
          rtl
            ? 'flex flex-col col-start-1 col-end-3 items-start row-start-1'
            : 'flex flex-col col-start-2 col-end-4 items-end'
        }>
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
      </div>
    </div>
  );
}
