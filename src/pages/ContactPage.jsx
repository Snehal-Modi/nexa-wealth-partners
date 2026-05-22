import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section
        className="pt-28 pb-16 px-4 sm:px-8 lg:px-20 text-center"
        style={{ background: "linear-gradient(135deg, #0b1e3d 0%, #1a3a6e 100%)" }}
      >
        <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">
          Reach Out
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
          Contact Us
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
          Get a free expert consultation with Harsh Vaidya — by WhatsApp, email, or visiting our office in Navsari.
        </p>
      </section>

      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}

export default ContactPage;