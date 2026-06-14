import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white
          w-full
          max-w-3xl
          rounded-3xl
          shadow-2xl
          overflow-hidden
          animate-[fadeIn_0.3s_ease]
          max-h-[80vh]
          flex
          flex-col
        "
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-5xl mb-3">
                {service.icon}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold">
                {service.title}
              </h2>

              <p className="mt-2 text-gray-200">
                {service.desc}
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-3xl font-light hover:text-yellow-400"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            Why Choose This Service?
          </h3>

          <ul className="space-y-3">
            {service.details.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span className="text-green-500 font-bold">
                  ✓
                </span>

                <span className="text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
            <h4 className="font-bold text-lg mb-2">
              Need Personal Guidance?
            </h4>

            <p className="text-gray-600">
              Speak directly with our expert advisor and get
              complete information regarding this service.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-5 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/918141112423?text=Hello, I need more details about ${service.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1
                bg-green-500
                hover:bg-green-600
                text-white
                py-3
                px-5
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                font-semibold
              "
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

            <button
              onClick={onClose}
              className="
                flex-1
                border
                border-gray-300
                py-3
                px-5
                rounded-xl
                font-semibold
                hover:bg-gray-100
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;