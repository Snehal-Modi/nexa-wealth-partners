import {
  FaWhatsapp,
  FaChevronDown,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    number: "3+",
    label: "Years Experience",
    icon: <FaStar className="text-yellow-400 text-xl sm:text-2xl mx-auto mb-2" />,
  },
  {
    number: "30+",
    label: "Families Protected",
    icon: <FaShieldAlt className="text-yellow-400 text-xl sm:text-2xl mx-auto mb-2" />,
  },
  {
    number: "₹50K",
    label: "Avg Agent Income/mo",
    icon: <FaChartLine className="text-yellow-400 text-xl sm:text-2xl mx-auto mb-2" />,
  },
  {
    number: "₹1000Cr",
    label: "Lifetime Vision",
    icon: <FaUsers className="text-yellow-400 text-xl sm:text-2xl mx-auto mb-2" />,
  },
];

function RotatingBadge() {
  return (
    <div className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto">

      {/* ROTATING TEXT */}

      <svg
        className="absolute w-full h-full"
        style={{
          animation: "slowSpin 18s linear infinite",
        }}
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circle-text"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>

        <text
          fill="#F59E0B"
          fontSize="10"
          fontWeight="700"
          letterSpacing="3"
        >
          <textPath href="#circle-text">
            NEXA WEALTH PARTNERS • TATA AIA • NAVSARI •
          </textPath>
        </text>
      </svg>

      {/* CENTER LOGO */}

      <div
        className="
          w-36 h-36
          sm:w-44 sm:h-44
          md:w-52 md:h-52
          rounded-full
          overflow-hidden
          border-[5px]
          border-yellow-400/30
          shadow-2xl
          bg-[#0b1e3d]
        "
      >

        <img
          src="/src/assets/logo.jpeg"
          alt="Nexa"
          className="
            w-full
            h-full
            object-cover
            rounded-full
            scale-[1.08]
          "
        />

      </div>

      <style>{`
        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <section
      className="
        min-h-screen
        overflow-hidden
        pt-24
        pb-12
        px-4
        sm:px-6
        md:px-10
        lg:px-20
      "
      style={{
        background:
          "linear-gradient(135deg, #0B1E3D 0%, #132b55 60%, #0B1E3D 100%)",
      }}
    >

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          items-center
        "
      >

        {/* LEFT CONTENT */}

        <div className="text-center lg:text-left order-2 lg:order-1">

          <span
            className="
              inline-block
              bg-yellow-400/15
              text-yellow-400
              border
              border-yellow-400/30
              rounded-full
              px-4
              py-2
              text-[10px]
              sm:text-xs
              md:text-sm
              font-semibold
              tracking-[2px]
              mb-6
              uppercase
            "
          >
            Tata AIA · Business Associate
          </span>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              text-white
              leading-tight
              break-words
            "
          >
            Secure Your Future.
            <br />

            <span className="text-yellow-400">
              Build Your Legacy.
            </span>
          </h1>

          <p
            className="
              text-gray-300
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              sm:leading-8
              mt-6
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            <strong className="text-white">
              Harsh Vaidya
            </strong>{" "}
            — trusted insurance mentor with 3+ years of experience,
            helping families achieve financial security and creating
            successful insurance leaders across India.
          </p>

          <p
            className="
              text-gray-400
              text-sm
              mt-4
            "
          >
            Nexa Wealth Partners · Navsari, Gujarat
          </p>

          {/* BUTTONS */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              justify-center
              lg:justify-start
            "
          >

            <a
              href="https://wa.me/918141112423?text=Hello Harsh I want more details about your services"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-green-500
                hover:bg-green-400
                text-white
                font-bold
                px-6
                py-4
                rounded-xl
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            <a
              href="#services"
              className="
                flex
                items-center
                justify-center
                gap-2
                border-2
                border-yellow-400
                text-yellow-400
                hover:bg-yellow-400
                hover:text-black
                font-bold
                px-6
                py-4
                rounded-xl
                transition-all
                duration-300
              "
            >
              Explore Services
              <FaChevronDown size={14} />
            </a>

          </div>

        </div>

        {/* RIGHT LOGO */}

        <div className="order-1 lg:order-2 flex justify-center">
          <RotatingBadge />
        </div>

      </div>

      {/* STATS */}

      <div className="max-w-7xl mx-auto mt-16">

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >

          {stats.map((s, i) => (

            <div
              key={i}
              className="
                bg-white/5
                border
                border-yellow-400/20
                rounded-2xl
                p-4
                sm:p-5
                text-center
                backdrop-blur-sm
                hover:bg-white/10
                transition-all
                duration-300
              "
            >

              {s.icon}

              <div
                className="
                  text-2xl
                  sm:text-3xl
                  font-black
                  text-white
                "
              >
                {s.number}
              </div>

              <div
                className="
                  text-gray-400
                  text-xs
                  sm:text-sm
                  mt-1
                "
              >
                {s.label}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;