import FeaturedProject from '@/components/FeaturedProject';
import FeaturedProjectMobile from '@/components/FeaturedProjectMobile';
import { useEffect, useState } from 'react';

import appCover from '../../public/images/app.png';
import promoteCover from '../../public/images/beetrade-promote.png';
import streamingCover from '../../public/images/beetrade-streaming.png';
import libiraCover from '../../public/images/libira.png';
import meyadCover from '../../public/images/meyadCover.png';
import radarCover from '../../public/images/radar.png';

export default function Work() {
  const [screenWidth, setScreenWidth] = useState(0);
  const projects = [
    {
      title: 'Educational App',
      cover: appCover,
      description:
        'WordEm is an innovative app designed to enhance vocabulary through personalized learning. Users earn points for correct answers and lose points for mistakes, promoting continuous improvement. Words are periodically reviewed to ensure long-term retention, making WordEm a valuable tool for personal and professional development.',
      stack: ['React Native', 'Expo', 'TypeScript', 'React Query', 'MobX'],
      linkGithub: 'https://github.com/matveisch/words-expo',
      linkWebsite: 'https://apps.apple.com/us/app/wordem/id6503954546',
    },
    {
      title: 'Website For Marketing Agency',
      cover: radarCover,
      description:
        "This marketing agency website is modern, fast, and visually pleasing with interactive sections and pages. It provides all necessary information about the company, including its services, team members, and portfolio. The website's animations and UI create a positive first impression and enhance the user experience. Overall, it is a powerful marketing tool for the agency to attract new clients.",
      stack: ['React', 'Next', 'TypeScript', 'Sass'],
      linkGithub: 'https://github.com/matveisch/radar-next',
      linkWebsite: 'https://radar-next-matveisch.vercel.app/',
    },
    {
      title: 'Streamlining Event Ordering for Libira',
      cover: libiraCover,
      description:
        "This project focused on simplifying event organization for Libira. With a user-friendly website, restaurants and their clients can easily order events, enjoying a seamless experience from start to finish. The sleek design and streamlined form enable clients to provide their event details effortlessly. Discover the efficiency and convenience of this platform designed to enhance Libira's event booking process. Welcome to the event ordering website for Libira.",
      stack: ['React', 'Next', 'TypeScript', 'Sass'],
      linkGithub: 'https://github.com/matveisch/libiro',
      linkWebsite: 'https://libiro.vercel.app/he',
    },
    {
      title: 'Website for helping people',
      cover: meyadCover,
      description:
        "This platform is a beacon of solidarity during challenging times of war in Israel. Designed with a user-friendly interface, individuals can easily find and offer help. Whether it's providing shelter, essential supplies, or emotional support, the website connects people seamlessly. ",
      stack: ['React', 'Next', 'TypeScript', 'Sass'],
      linkGithub: 'https://github.com/matveisch/truma',
      linkWebsite: 'https://truma.vercel.app/en',
    },
    {
      title: 'Video Streaming Website',
      cover: streamingCover,
      description:
        'The video streaming website is a user-friendly platform that offers a diverse range of educational video content related to the financial markets. Students can easily navigate through different courses and lessons and track their progress. The website features experienced traders and investors, covering topics such as technical analysis, fundamental analysis, and trading psychology. The website is a powerful tool for students to improve their knowledge and skills in trading and investing.',
      stack: [
        'React',
        'Vite',
        'Node',
        'Express',
        'MongoDB',
        'TypeScript',
        'Sass',
      ],
      linkGithub: 'https://github.com/matveisch/beetrade-client',
      linkWebsite: '#',
    },
    {
      title: 'Website For Educational Company',
      cover: promoteCover,
      description:
        'The website is a platform designed to provide users with access to educational content related to trading and investing. The website features a user-friendly interface that allows users to easily browse and purchase courses. The courses cover a wide range of topics, including technical analysis, fundamental analysis, trading psychology, and more. With experienced instructors and personalized support, the website is a powerful tool for users looking to improve their trading and investing skills.',
      stack: ['React', 'Next', 'CoinMarketCap API', 'TypeScript', 'Sass'],
      linkGithub: 'https://github.com/matveisch/beetrade-promote',
      linkWebsite: '#',
    },
    //    {
    //      title: 'E-Commerce Website (Client)',
    //      cover: promoteCover,
    //      description:
    //        'The sample e-commerce website is a platform designed to help users kick-start a simple online store quickly and easily. The website provides a pre-built e-commerce store with all the necessary features, including a shopping cart and payment gateway integration. The website can be customized with a unique domain name, branding, and design to create a personalized online store.',
    //      stack: ['React', 'JavaScript', 'Sass'],
    //      linkGithub: '#',
    //      linkWebsite: '#',
    //    },
  ];

  useEffect(() => {
    function handleWidthChange() {
      setScreenWidth(window.innerWidth);
    }
    handleWidthChange();

    window.addEventListener('resize', handleWidthChange);

    return () => {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);

  return (
    <section className="mb-[100px]">
      <h1 className="text-3xl text-slate-300 mb-10">
        Some Things <span className="text-cyan-300">I've Built</span>
      </h1>
      <div className="flex flex-col gap-20 md:gap-32">
        {projects.map((project, index) =>
          screenWidth > 768 ? (
            <FeaturedProject
              title={project.title}
              cover={project.cover}
              description={project.description}
              stack={project.stack}
              linkGithub={project.linkGithub}
              linkWebsite={project.linkWebsite}
              rtl={index % 2 !== 0}
              key={project.title}
            />
          ) : (
            <FeaturedProjectMobile
              title={project.title}
              description={project.description}
              stack={project.stack}
              linkGithub={project.linkGithub}
              linkWebsite={project.linkWebsite}
              key={project.title}
            />
          )
        )}
      </div>
    </section>
  );
}
