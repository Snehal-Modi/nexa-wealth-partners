import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section
        className="pt-28 pb-16 px-4 sm:px-8 lg:px-20 text-center"
        style={{ background: "linear-gradient(135deg, #0b1e3d 0%, #1a3a6e 100%)" }}
      >
        <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">
          What We Offer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          Our Services
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          From life protection plans to wealth-building products and career opportunities — everything you need under one roof.
        </p>
      </section>

      <Services />
      <Footer />
      <WhatsApp />
    </>
  );
}

export default ServicesPage;