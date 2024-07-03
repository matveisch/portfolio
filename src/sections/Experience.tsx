import { useEffect, useRef, useState } from 'react';
import JobDescription from '@/components/JobDescription';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [tabUnderlineTop, setTabUnderlineTop] = useState(0);
  const tabsRef = useRef<HTMLButtonElement[]>([]);
  const jobs = [
    {
      title: 'Full-stack Developer, Team Lead',
      company: 'Desight',
      link: 'https://desight.co/',
      date: 'Sep 2022 - May 2024',
      points: [
        'Led a team of 5 developers in building a new marketing platform, resulting in a 15% increase in conversion rates.',
        'Mentored junior developers, fostered a collaborative environment, and implemented agile methodologies to improve team efficiency.',
        'Streamlined communication channels and implemented project management tools, leading to a 20% reduction in project completion timelines.',
      ],
    },
    {
      title: 'Frontend Software Engineer',
      company: 'Noviopus',
      link: 'https://noviopus.com/',
      date: 'Sep 2022 - Apr 2023',
      points: [
        'Enhanced user experience for a high-traffic application by translating the entire user interface into several languages using i18next and React. This\n' +
          'project ensured a seamless experience for a global audience while adhering to strict deadlines.',
        'Developed responsive features for both mobile and desktop platforms using React, CSS, and Material-UI. Collaborated closely with designers to\n' +
          'translate mockups into functional UIs, resulting in a 20% decrease in user bounce rates.\n',
        'Improved the subscription experience on the platform by streamlining the sign-up process with React and Redux. Implemented clear and concise\n' +
          'information architecture, leading to a 15% increase in subscription conversions.',
      ],
    },
    {
      title: 'Frontend Software Engineer',
      company: 'PskovHack',
      link: 'https://pskovhack.ru/',
      date: 'Mar 2021 - Jun 2022',
      points: [
        'Developed responsive features for mobile and desktop platforms, ensuring a flawless user experience across devices. Achieved a consistent website\n' +
          'speed score of 90+ using performance optimization techniques and adhering to best practices for layout design.',
        'Increased development efficiency by 12% through code reusability strategies and by implementing a well-documented component library in React.\n' +
          'Demonstrated strong analytical skills to identify performance bottlenecks and implement effective solutions.',
        'Integrated and communicated effectively with REST APIs, collaborating seamlessly with the back-end team to ensure smooth data flow and\n' +
          'functionality within various projects.',
      ],
    },
  ];

  useEffect(() => {
    function handleScreenResize() {
      setScreenWidth(window.innerWidth);
    }
    handleScreenResize();

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  useEffect(() => {
    function setTabPosition() {
      const currentTab: HTMLButtonElement = tabsRef.current[activeTab];

      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineTop(currentTab?.offsetTop ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTab]);

  return (
    <section className="pb-[200px]">
      <h1 className="text-3xl text-slate-300 mb-10">
        Where <span className="text-cyan-300">I've Worked</span>
      </h1>
      <div className="flex gap-10 flex-col sm:flex-row">
        <div className="relative">
          <div className="flex flex-row sm:flex-col">
            {jobs.map((job, index) => {
              return (
                <button
                  ref={(el) => {
                    if (el !== null) tabsRef.current[index] = el;
                  }}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-2 w-100 border-b-2 sm:border-b-0 sm:border-l-2 hover:bg-blueGray-800 border-blueGray-700 ${
                    activeTab === index && 'text-cyan-300 bg-blueGray-800'
                  }`}
                  key={`${job.company}-tabs`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <span
            className="absolute sm:w-0.5 sm:left-0 bottom-0 block h-0.5 bg-cyan-300 transition-all duration-300"
            style={
              screenWidth < 480
                ? { left: tabUnderlineLeft, width: tabUnderlineWidth }
                : { top: tabUnderlineTop, height: '40px' }
            }
          />
        </div>
        <div className="pt-2">
          <JobDescription
            title={jobs[activeTab].title}
            company={jobs[activeTab].company}
            date={jobs[activeTab].date}
            link={jobs[activeTab].link}
            points={jobs[activeTab].points}
            key={`${jobs[activeTab].company}-description`}
          />
        </div>
      </div>
    </section>
  );
}
