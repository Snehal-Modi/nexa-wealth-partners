import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Rajesh Mehta",
    role: "Business Owner, Surat",
    initials: "RM",
    color: "from-blue-600 to-indigo-700",
    stars: 5,
    review:
      "Working with Harsh has completely transformed my financial planning. I now have the right life insurance coverage through Tata AIA and my family's future is fully secured. His guidance was clear, honest and genuinely helpful.",
  },
  {
    name: "Priya Sharma",
    role: "Agent – Joined 2022, Navsari",
    initials: "PS",
    color: "from-green-600 to-teal-700",
    stars: 5,
    review:
      "Joining Nexa Wealth Partners as an agent has been the best career decision of my life. I was a housewife with no insurance background, and now I earn ₹50,000/month working part-time. Harsh's training and support system is incredible.",
  },
  {
    name: "Sunil Patel",
    role: "New Recruit, Valsad",
    initials: "SP",
    color: "from-purple-600 to-pink-700",
    stars: 5,
    review:
      "The training and support I received from Harsh helped me close my first big insurance deal within just one month of joining. His approach to ethical selling and lead generation is truly practical and effective.",
  },
  {
    name: "Kavita Desai",
    role: "Policyholder, Navsari",
    initials: "KD",
    color: "from-orange-600 to-red-700",
    stars: 5,
    review:
      "I was always hesitant about insurance — I thought it was just a waste of money. But after understanding it properly from Harsh Vaidya, I realised how powerful insurance is as a financial tool. Best decision I made for my family.",
  },
  {
    name: "Amit Shah",
    role: "Senior Agent, Vapi",
    initials: "AS",
    color: "from-teal-600 to-cyan-700",
    stars: 5,
    review:
      "The online marketing strategies I learned from Harsh have literally doubled my insurance sales in 6 months. His digital training for agents is something no other leader provides in this industry.",
  },
  {
    name: "Neha Joshi",
    role: "Chartered Accountant, Bharuch",
    initials: "NJ",
    color: "from-yellow-600 to-amber-700",
    stars: 5,
    review:
      "Highly recommend Harsh Vaidya for anyone looking for expert insurance advice and a rewarding career opportunity. His integrity and deep knowledge of the Tata AIA products make him stand out from every other advisor.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 text-yellow-400 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="text-base" />
      ))}
    </div>
  );
}

function ReviewCard({ review, imageRight, index }) {
  const card = (
    <div className="flex-1 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 md:p-10 border border-gray-100">
      <FaQuoteLeft className="text-yellow-400 text-3xl mb-4 opacity-70" />
      <Stars count={review.stars} />
      <p className="text-gray-600 text-base leading-relaxed mb-6 italic">"{review.review}"</p>
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-gray-900 font-bold text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.role}</p>
        </div>
      </div>
    </div>
  );

  const avatar = (
    <div className="flex-shrink-0 flex items-center justify-center">
      <div
        className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br ${review.color} flex flex-col items-center justify-center shadow-xl border-4 border-white`}
      >
        <span className="text-4xl sm:text-5xl font-black text-white leading-none">
          {review.initials}
        </span>
        <span className="text-white/60 text-xs mt-1 tracking-widest font-semibold">CLIENT</span>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col ${
        imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-8 lg:gap-12 mb-12 lg:mb-16`}
    >
      {card}
      {avatar}
    </div>
  );
}

function Reviews() {
  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-8 lg:px-20"
      style={{ background: "#FAF7F0" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-600 text-xs font-bold tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Clients & Agents Say
          </h2>
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-16 bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="h-px w-16 bg-yellow-400/60" />
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Real experiences from families we've protected and agents we've empowered.
          </p>
        </div>

        {/* Zigzag reviews */}
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} imageRight={i % 2 === 0} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;