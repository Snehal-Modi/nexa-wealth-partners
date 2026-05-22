import { Link } from "react-router-dom";
import harshImage from "../assets/harsh.jpeg";
import { FaShieldAlt, FaChartLine, FaHandshake, FaTrophy, FaArrowRight } from "react-icons/fa";

const values = [
  {
    icon: <FaShieldAlt className="text-3xl text-yellow-400" />,
    title: "Integrity",
    desc: "Always putting clients' needs first — transparent and honest advice every time.",
  },
  {
    icon: <FaChartLine className="text-3xl text-yellow-400" />,
    title: "Growth",
    desc: "Continuously learning and improving to deliver the best insurance solutions.",
  },
  {
    icon: <FaHandshake className="text-3xl text-yellow-400" />,
    title: "Support",
    desc: "Empowering those who want to be financially free to achieve their goals.",
  },
  {
    icon: <FaTrophy className="text-3xl text-yellow-400" />,
    title: "Leadership",
    desc: "Building the next generation of insurance leaders with knowledge and purpose.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-8 lg:px-20"
      style={{ background: "#FAF7F0" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-600 text-xs font-bold tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            About Harsh Vaidya
          </h2>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-16 bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="h-px w-16 bg-yellow-400/60" />
          </div>
        </div>

        {/* Bio + values */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-14">
          {/* Profile card */}
          <div className="flex-1 flex justify-center">

            <div
              className="
      w-64 h-80
      sm:w-72 sm:h-96
      rounded-3xl
      relative
      overflow-hidden
      shadow-2xl
      border border-yellow-300/30
    "
            >

              {/* BACKGROUND IMAGE */}

              <img
                src={harshImage}
                alt="Harsh Vaidya"
                className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
      "
              />

              {/* DARK OVERLAY */}

              <div
                className="
        absolute
        inset-0
        bg-black/20
      "
              />

              {/* GOLD GRADIENT OVERLAY */}

              <div
                className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#0b1e3d]
        via-transparent
        to-transparent
      "
              />

              {/* DOT PATTERN */}

              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* TEXT CONTENT */}

              <div
                className="
        absolute
        bottom-0
        left-0
        right-0
        z-10
        text-center
        pb-8
        px-4
      "
              >

                <h3 className="text-white text-3xl font-bold drop-shadow-lg">
                  Harsh Vaidya
                </h3>

                <p className="text-yellow-400 text-lg font-semibold mt-1">
                  Business Associate
                </p>

                <p className="text-gray-300 text-sm mt-2">
                  Nexa Wealth Partners
                </p>

              </div>

              {/* BOTTOM GOLD LINE */}

              <div
                className="
        absolute
        bottom-0
        left-0
        right-0
        h-1
        bg-gradient-to-r
        from-yellow-400
        to-yellow-600
      "
              />

            </div>

          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5">
              With <strong className="text-gray-900">3+ years of deep experience</strong> in the insurance
              industry, Harsh Vaidya is a trusted Business Associate at Nexa Wealth Partners, offering
              expert guidance in all Tata AIA products.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              His mission is to help families build lasting financial security while creating
              life-changing career opportunities for agents and leaders across India — guiding them
              towards passive income and professional growth.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 font-bold px-8 py-3 rounded-xl transition-all duration-300 text-sm"
            >
              Read Full Story <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm"
            >
              <div className="mb-4">{v.icon}</div>
              <h4 className="text-gray-900 font-bold text-lg mb-2">{v.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;