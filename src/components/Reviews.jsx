import { FaStar, FaQuoteLeft } from "react-icons/fa";
import kv from "../assets/reviews/kv.jpeg";
import kamini from "../assets/reviews/kamini.jpeg";
import dhruvin from "../assets/reviews/dhruvin.jpeg";
import bhumit from "../assets/reviews/bhumit.jpeg";
import deep from "../assets/reviews/deep.jpeg";

const reviews = [
  {
    name: "Krushnavadan Tandel",
    role: "P.B.A( leader), Navsari",
    image: kv,
    initials: "KT",
    color: "from-blue-600 to-indigo-700",
    stars: 5,
    review:
      "I am very pleased to be a part of the Nexa wealth partners family and work with such an amazing leadership team. The guidance, support, and growth opportunities here inspire me to achieve more every day.Looking forward to building a successful journey together.",
  },
  {
    name: "Kamini Nayka",
    role: "N.L.A, Navsari",
    image: kamini,
    initials: "KN",
    color: "from-green-600 to-teal-700",
    stars: 4,
    review:
      "Joining Nexa Wealth Partners as an agent has been the best career decision of my life. I was a housewife with no insurance background, and now I earn ₹50,000/month working part-time. Harsh's training and support system is incredible.",
  },
  // {
  //   name: "Dhruvil Bharucha",
  //   role: "L.P, Navsari",
  //   image: dhruvil,
  //   initials: "DB",
  //   color: "from-purple-600 to-pink-700",
  //   stars: 4,
  //   review:
  //     "The training and support I received from Harsh helped me close my first big insurance deal within just one month of joining. His approach to ethical selling and lead generation is truly practical and effective.",
  // },
  {
    name: "Dhruvin Patel",
    role: "L.P, Bardoli",
    image: dhruvin,
    initials: "DP",
    color: "from-orange-600 to-red-700",
    stars: 5,
    review:
      "I was always hesitant about insurance — I thought it was just a waste of money. But after understanding it properly from Harsh Vaidya, I realised how powerful insurance is as a financial tool. Best decision I made for my family.",
  },
  {
    name: "Bhumit Patel",
    role: "L.P, Bardoli",
    image: bhumit,
    initials: "BP",
    color: "from-teal-600 to-cyan-700",
    stars: 4,
    review:
      "The online marketing strategies I learned from Harsh have literally doubled my insurance sales in 6 months. His digital training for agents is something no other leader provides in this industry.",
  },
  {
    name: "Deep Tandel",
    role: "S.L.P, Nasvari",
    image: deep,
    initials: "DT",
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
    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-xl border-4 border-white overflow-hidden">

      <img
        src={review.image}
        alt={review.name}
        className="w-full h-full object-cover hover:scale-110 transition duration-500"
      />

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