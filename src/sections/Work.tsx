import { useState } from 'react';
import JobDescription from '@/components/JobDescription';

export default function Work() {
  const [activeTab, setActiveTab] = useState(0);
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

  return (
    <section className="pb-[200px]">
      <h1 className="text-3xl text-slate-300 mb-10">
        Where <span className="text-cyan-300">I've Worked</span>
      </h1>
      <div className="flex gap-10 flex-col sm:flex-row">
        <div className="flex flex-row sm:flex-col">
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2 w-100 border-b-2 sm:border-b-0 sm:border-l-2 hover:bg-blueGray-800 ${
                  activeTab === index ? 'border-cyan-300 text-cyan-300 bg-blueGray-800' : 'border-blueGray-700'
                }`}
                key={`${job.company}-tabs`}>
                {job.company}
              </button>
            );
          })}
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
