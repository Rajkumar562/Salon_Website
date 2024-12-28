"use client";

import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

export default function QueryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Query request sent successfully!");
      } else {
        alert("Failed to send query request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full text-left mx-auto">
      <div className="grid grid-cols-1 gap-2">
        {/* Name */}
        <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
          <FaUser className="text-yellow" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full text-black focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
          <FaEnvelope className="text-yellow" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full text-black focus:outline-none"
            required
          />
        </div>

        {/* Contact */}
        <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
          <FaPhoneAlt className="text-yellow" />
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact No"
            className="w-full text-black focus:outline-none"
            pattern="\d{10}"
            maxLength={10}
            title="Please enter a valid 10-digit contact number"
            required
          />
        </div>

        {/* Query */}
        <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
          <FaRegCommentDots className="text-yellow" />
          <input
            type="text"
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Your Query"
            className="w-full text-black focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-36 bg-yellow text-white py-2 px-4 font-semibold hover:scale-110 transition ease-out duration-800"
      >
        Send Query
      </button>
      <div className="mt-4 w-36 font-semibold text-center">OR</div>
      <div className="mt-2">
        <span className="text-yellow text-2xl"> Call us @</span>
        <span className="hover:text-yellow text-2xl hover:cursor-pointer"> 1800123123</span>
      </div>
    </form>
  );
}
