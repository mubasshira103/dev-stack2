import img from '../assets/banner-stack.png';
const Hero = () => {
  return (
    <section id="home" className="overflow-hidden px-5 py-16 sm:py-20 lg:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Hero Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[50px]">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare them side by side, and
            put together the stack that fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet px-5 py-3 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-xs font-semibold text-gray-600 transition hover:border-pink-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
