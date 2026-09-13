const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white pt-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet text-[10px] font-extrabold text-white">
              DS
            </span>

            <span className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-lg font-extrabold text-transparent">
              Dev Stack
            </span>
          </div>

          <p className="mt-4 max-w-xs text-xs leading-6 text-gray-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="mt-5 flex gap-5 text-xs text-gray-500">
            <a href="#" className="transition hover:text-pink-500">
              GitHub
            </a>

            <a href="#" className="transition hover:text-pink-500">
              Twitter
            </a>

            <a href="#" className="transition hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-xs font-bold text-gray-800">PRODUCT</h4>

          <div className="mt-5 flex flex-col gap-3 text-xs text-gray-400">
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-bold text-gray-800">COMPANY</h4>

          <div className="mt-5 flex flex-col gap-3 text-xs text-gray-400">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs font-bold text-gray-800">LEGAL</h4>

          <div className="mt-5 flex flex-col gap-3 text-xs text-gray-400">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
