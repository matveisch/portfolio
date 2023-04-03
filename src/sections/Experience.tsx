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
      title: 'Front-End Developer',
      company: 'Noviopus',
      link: 'https://noviopus.com/',
      date: 'Sep 2022 - Present',
      points: [
        'Worked cooperatively with client services, sales and design team in deadline-driven environment.',
        'Coded using React, Redux, CSS, MUI and TypeScript to develop features for both mobile and desktop platforms.',
        'Designed and updated layouts to meet usability and performance requirements.',
      ],
    },
    {
      title: 'Front-End Developer',
      company: 'PskovHack',
      link: 'https://pskovhack.ru/',
      date: 'Mar 2021 - Jun 2022',
      points: [
        '1+ year of solid experience with React JS framework a n d strong knowledge in Redux.',
        '1+ year of experience with JavaScript (ES6+), HTML5, and CSS3.',
        '1+ year of experience with implementing/connecting REST APIs.',
        'Strong analytical and problem-solving skills',
        'Was a part of a full-stack team as a front-end developer',
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
      <div className="flex gap-10 flex-col sm:flex-row min-h-[250px]">
        <div className="relative">
          <div className="flex flex-row sm:flex-col">
            {jobs.map((job, index) => {
              return (
                <button
                  ref={el => {
                    if (el !== null) tabsRef.current[index] = el;
                  }}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-2 w-100 border-b-2 sm:border-b-0 sm:border-l-2 hover:bg-blueGray-800 border-blueGray-700 ${
                    activeTab === index && 'text-cyan-300 bg-blueGray-800'
                  }`}
                  key={`${job.company}-tabs`}>
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
