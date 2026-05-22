import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import {
  FaTrophy,
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
  FaUsers,
  FaUserPlus,
  FaStar,
  FaMedal,
  FaWhatsapp,
} from "react-icons/fa";

const values = [
  { icon: <FaShieldAlt />, title: "Integrity", desc: "Always putting clients' needs first with transparent, honest advice." },
  { icon: <FaChartLine />, title: "Growth", desc: "Continuously learning and improving to deliver the best solutions." },
  { icon: <FaHandshake />, title: "Support", desc: "Empowering people who want to be financially free to achieve their goals." },
  { icon: <FaUsers />, title: "Leadership", desc: "Building the next generation of insurance leaders with knowledge and purpose." },
];

const awards = [
  {
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    title: "MDRT Award",
    sub: "Million Dollar Round Table",
    desc: "Recognized for outstanding insurance sales and exceptional client service.",
  },
  {
    icon: <FaMedal className="text-4xl text-yellow-400" />,
    title: "Best Insurance Agent of the Year",
    sub: "Industry Excellence Award",
    desc: "Honored as a top-performing insurance agent with exceptional results.",
  },
  {
    icon: <FaStar className="text-4xl text-yellow-400" />,
    title: "Top Recruiter Award",
    sub: "Team Building Recognition",
    desc: "Awarded for building a high-performing team of successful insurance agents.",
  },
];

const timeline = [
  { year: "2004", event: "Started career in the insurance industry with Tata AIA as a licensed agent." },
  { year: "2008", event: "Achieved first MDRT recognition after rapid growth in client base and sales volume." },
  { year: "2012", event: "Began mentoring and recruiting agents, building a foundational team of leaders." },
  { year: "2016", event: "Received Best Insurance Agent of the Year award for consistent top performance." },
  { year: "2020", event: "Founded Nexa Wealth Partners to expand reach and provide structured agent training." },
  { year: "2024", event: "Over 30 families protected and a high-performing team earning ₹50K+/month." },
];

const recruitProfiles = [
  "Housewives",
  "Retired Professionals",
  "Businessmen",
  "Chartered Accountants",
  "HNIs (High Net Worth Individuals)",
  "Working Professionals",
];

const agentGoals = [
  "Become financially independent",
  "Build a successful & rewarding career",
  "Develop leadership & entrepreneurship skills",
  "Learn to generate consistent leads and sales",
  "Achieve work-life balance with flexible hours",
  "Create a passive income stream through sales",
];

function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <section
        className="pt-28 pb-20 px-4 sm:px-8 lg:px-20 text-center"
        style={{ background: "linear-gradient(135deg, #0b1e3d 0%, #1a3a6e 100%)" }}
      >
        <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">
          Our Story
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          About Harsh Vaidya
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          3+ years of experience · Tata AIA Business Associate · Nexa Wealth Partners, Navsari
        </p>
      </section>

      {/* Bio section */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile */}
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
                src="./src/assets/harsh.jpeg"
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
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-5">
              Trusted Insurance Leader & Mentor
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              With over <strong className="text-gray-900">3 years of hands-on experience</strong> in the insurance industry, Harsh Vaidya has built a reputation as one of the most trusted Business Associates under Tata AIA. His expertise spans Business Insurance, E-Property, Param Raksha, and the Shubh Flexi Income Plan.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Harsh founded <strong className="text-gray-900">Nexa Wealth Partners</strong> with a singular vision: to transform insurance from a product into a powerful tool for financial freedom, wealth creation, and legacy building for families across India.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Beyond client service, he is a passionate mentor — actively recruiting and training agents and leaders, enabling them to build passive income streams and rewarding careers with full flexibility.
            </p>
            <a
              href="https://wa.me/918141112423?text=Hello Harsh I want more details about your services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaWhatsapp size={20} /> Chat with Harsh
            </a>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-8 lg:px-20" style={{ background: "#FAF7F0" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              label: "🔭 Vision",
              text: "To become one of India's most trusted and influential insurance leaders — transforming the way people view insurance from a product to a powerful tool for financial freedom, wealth creation, and legacy building.",
            },
            {
              label: "🎯 Mission",
              text: "To empower families with financial security and create life-changing career opportunities through ethical insurance guidance, leadership development, and wealth-building solutions.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-4">{v.label}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-yellow-400 text-3xl flex justify-center mb-4">{v.icon}</div>
                <h4 className="text-gray-900 font-black text-lg mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-20" style={{ background: "#FAF7F0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-12">
            Career Journey
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-yellow-300" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6 items-start pl-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-black text-xs flex-shrink-0 relative z-10 shadow-md">
                    {t.year.slice(2)}
                  </div>
                  <div className="bg-white rounded-xl p-5 flex-1 shadow-sm border border-gray-100">
                    <p className="text-yellow-600 text-xs font-bold mb-1">{t.year}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{t.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-10">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-yellow-200/50 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />
                <div className="mb-4">{a.icon}</div>
                <h4 className="text-gray-900 font-black text-lg mb-1">{a.title}</h4>
                <p className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-3">{a.sub}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section
        className="py-16 md:py-24 px-4 sm:px-8 lg:px-20"
        style={{ background: "linear-gradient(135deg, #0b1e3d 0%, #1a3a6e 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
            Join Our Winning Team
          </h2>
          <p className="text-gray-300 text-base text-center max-w-2xl mx-auto mb-12">
            Earn an average of <strong className="text-yellow-400">₹50,000/month</strong> working as an insurance agent under Harsh Vaidya's mentorship.
          </p>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-5">
                Who We're Looking For
              </h3>
              <div className="flex flex-wrap gap-3">
                {recruitProfiles.map((p, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-yellow-400/30 text-yellow-300 text-sm px-4 py-2 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-yellow-400 font-bold text-sm uppercase tracking-widest mb-5">
                Goals We Help You Achieve
              </h3>
              <ul className="space-y-3">
                {agentGoals.map((g, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-black text-xs flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-300 text-sm">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://wa.me/918141112423?text=Hello Harsh I want to join your team"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-base shadow-xl"
            >
              <FaUserPlus size={20} /> Apply to Join Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default AboutPage;