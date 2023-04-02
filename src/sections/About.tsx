import Image from 'next/image';
import profilePicture from '../../public/images/IMG_2133.jpeg';
import Triangle from '@/components/Triangle';

export default function About() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Next',
    'Vite',
    'Node.js',
    'Express',
    'MongoDB',
    'CSS',
    'Sass',
    'Tailwind',
    'MUI',
    'Git',
    'Jest',
  ];

  return (
    <section className="pb-[200px]">
      <h1 className="text-3xl text-slate-300 mb-10">
        About <span className="text-cyan-300">Me</span>
      </h1>
      <div className="flex gap-10 flex-col items-center md:items-start md:flex-row">
        <div>
          <p>
            Hi there! My name is Matvei, and I'm thrilled to share a little bit about myself with you. I'm a web
            developer with a passion for creating beautiful and functional digital experiences. My journey in web
            development began in 2020, and since then, I've had the privilege of working with a diverse range of
            clients, from small businesses to larger corporations. Currently, I work as a freelancer, and I love the
            variety of projects that come my way.
            <br /> <br />
            In the past, I worked with a{' '}
            <a
              className="group inline-block text-cyan-300 transition duration-300"
              href="https://pskovhack.ru/"
              target="_blank">
              student-led web studio
              <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
            </a>{' '}
            where I honed my skills in building user-centric websites. I also had the opportunity to work with an{' '}
            <a
              className="group inline-block text-cyan-300 transition duration-300"
              href="https://noviopus.com/"
              target="_blank">
              Israeli start-up
              <span className="block w-0 group-hover:w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
            </a>{' '}
            where I learned how to work in a fast-paced, agile environment.
            <br /> <br />
            Overall, I'm a dedicated and passionate web developer who is committed to creating engaging, user-friendly
            experiences on the web. Thank you for taking the time to learn more about me, and I hope to hear from you
            soon!
            <br /> <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-2 mt-2">
            {skills.map(skill => {
              return (
                <div className="flex items-center gap-3 w-fit" key={skill}>
                  <Triangle /> {skill}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative max-h-[300px] max-w-[300px] bg-cyan-300 rounded-md group">
          <Image
            src={profilePicture}
            alt="profile-image"
            className="rounded-md w-[100%] h-[100%] grayscale contrast-100 mix-blend-multiply hover:filter-none hover:mix-blend-normal"
          />
          <div className="w-[100%] h-[100%] border border-cyan-300 rounded-md absolute top-5 left-5 -z-10 group-hover:top-2 group-hover:left-2 transition-all " />
        </div>
      </div>
    </section>
  );
}
