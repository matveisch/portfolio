export default function Intro() {
  return (
    <section className="flex flex-col h-[100vh] justify-center items-start">
      <p className="text-cyan-300 pb-4 text-lg">Hi, my name is</p>
      <h1 className="text-slate-300 text-3xl xs:text-[7vw]  md:text-7xl xs:leading-normal">Matvei Voinich.</h1>
      <h1 className="text-3xl xs:text-[7vw] md:text-7xl xs:leading-10">I build things for the web.</h1>
      <p className="sm:w-2/3 pt-8 sm:text-lg">
        Welcome to my portfolio. I create visually appealing websites and applications using front-end and back-end
        technologies. Browse my portfolio for examples of my work, and contact me to discuss your project.
      </p>
      <button className="border border-cyan-300 rounded-md px-[3%] py-[2%] text-cyan-300 hover:bg-cyan-300 hover:text-dark-blue mt-6">
        Reach me out right away!
      </button>
    </section>
  );
}
