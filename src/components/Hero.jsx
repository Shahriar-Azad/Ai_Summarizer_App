import { FaGithub } from "react-icons/fa"; // Install react-icons if not already
// npm install react-icons

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center relative z-10 py-10">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 sm:px-12 mb-8">
        {/* Left: Initials */}
        <div className="text-white font-bold text-xl bg-black px-3 py-1 rounded-full shadow">
          SA
        </div>

        {/* Right: GitHub Icon */}
        <button
          type="button"
          onClick={() => window.open("https://github.com/Shahriar-Azad")}
          className="text-black hover:text-gray-700 transition"
        >
          <FaGithub className="text-2xl" />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="glass_card text-center">
        <h1 className="head_text gradient_text">
          Summarize Smarter with <br className="max-md:hidden" />
          <span className="highlight_gradient">AI-Powered Intelligence</span>
        </h1>
        <h2 className="desc">
          Cut through the clutter. Get lightning-fast, clear article summaries powered by AI. No fluff. Just facts.
        </h2>
      </div>
    </header>
  );
};

export default Hero;
