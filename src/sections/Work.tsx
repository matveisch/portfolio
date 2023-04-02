export default function Work() {
  const projects = [
    {
      title: 'Website For Marketing Agency',
      cover: '',
      description:
        "This marketing agency website is modern, fast, and visually pleasing with interactive sections and pages. It provides all necessary information about the company, including its services, team members, and portfolio. The website's animations and UI create a positive first impression and enhance the user experience. Overall, it is a powerful marketing tool for the agency to attract new clients.",
      stack: ['React', 'Next', 'TypeScript', 'Sass'],
      linkGithub: '',
      linkWebsite: '',
    },
    {
      title: 'Video Streaming Website',
      cover: '',
      description:
        'The video streaming website is a user-friendly platform that offers a diverse range of educational video content related to the financial markets. Students can easily navigate through different courses and lessons and track their progress. The website features experienced traders and investors, covering topics such as technical analysis, fundamental analysis, and trading psychology. The website is a powerful tool for students to improve their knowledge and skills in trading and investing.',
      stack: ['React', 'Vite', 'Node', 'Express', 'MongoDB', 'TypeScript', 'Sass'],
      linkGithub: '',
      linkWebsite: '',
    },
    {
      title: 'Website For Educational Company',
      cover: '',
      description:
        'The website is a platform designed to provide users with access to educational content related to trading and investing. The website features a user-friendly interface that allows users to easily browse and purchase courses. The courses cover a wide range of topics, including technical analysis, fundamental analysis, trading psychology, and more. With experienced instructors and personalized support, the website is a powerful tool for users looking to improve their trading and investing skills.',
      stack: ['React', 'Next', 'CoinMarketCap API', 'TypeScript', 'Sass'],
      linkGithub: '',
      linkWebsite: '',
    },
    {
      title: 'E-Commerce Website (Client)',
      cover: '',
      description:
        'The sample e-commerce website is a platform designed to help users kick-start a simple online store quickly and easily. The website provides a pre-built e-commerce store with all the necessary features, including a shopping cart and payment gateway integration. The website can be customized with a unique domain name, branding, and design to create a personalized online store.',
      stack: ['React', 'JavaScript', 'Sass'],
      linkGithub: '',
      linkWebsite: '',
    },
  ];

  return (
    <section>
      <h1 className="text-3xl text-slate-300 mb-10">
        Some Things <span className="text-cyan-300">I've Built</span>
      </h1>
    </section>
  );
}
