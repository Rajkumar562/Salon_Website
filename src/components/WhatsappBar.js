"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappBar() {
  return (
    <a
      href="https://wa.me/1234567890" // Z3 WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed bottom-0 left-0 w-full bg-green-500 text-white flex items-center justify-between px-4 py-2 z-20">
        <div className="flex items-center mx-auto gap-2">
          <FaWhatsapp size={24} className="text-white" />
          <span>Need Help? Chat with us on WhatsApp!</span>
        </div>
      </div>
    </a>
  );
}
