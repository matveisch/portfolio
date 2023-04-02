import Triangle from '@/components/Triangle';

interface Props {
  title: string;
  company: string;
  date: string;
  link: string;
  points: string[];
}

export default function JobDescription(props: Props) {
  const { title, company, points, date, link } = props;

  return (
    <div>
      <h3 className="text-xl text-slate-300">
        {title} <span className="text-cyan-300">@</span>{' '}
        <a className="group inline-block text-cyan-300 transition duration-300" href={link} target="_blank">
          {company}
          <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
        </a>
      </h3>
      <p>{date}</p>
      <ul className="mt-5 flex flex-col gap-3">
        {points.map((point, index) => {
          return (
            <li className="flex gap-5 items-start" key={`${index}-point`}>
              <div className="pt-1.5">
                <Triangle />
              </div>
              <p>{point}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
