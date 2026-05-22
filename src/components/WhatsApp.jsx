import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <a
      href="https://wa.me/918140842405?text=Hello Harsh I want more details about your services"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full text-3xl shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsApp;