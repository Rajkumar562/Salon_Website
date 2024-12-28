"use client";

import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    gender: "",
    // serviceType: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment request sent successfully!");
      } else {
        alert("Failed to send appointment request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const today = new Date().toISOString().split("T")[0]; // Get today's date for disabling past dates

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-10 sm:px-20 md:px-32 lg:px-40 text-center mx-auto p-6 bg-gray-100 text-sm md:text-base "
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-center">
        Let&apos;s not wait for the &quot;Perfect Look&quot;
      </h2>
      <h2 className="text-base md:text-lg lg:text-xl mb-6 text-center">Book An Appointment Now!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          {/* Name */}
          <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
            <FaUser className="text-yellow" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full text-black bg-gray-100 focus:outline-none"
              required
            />
          </div>

          {/* Contact No */}
          <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
            <FaPhoneAlt className="text-yellow" />
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact No"
              className="w-full text-black bg-gray-100 focus:outline-none"
              pattern="\d{10}"
              maxLength={10}
              title="Please enter a valid 10-digit contact number"
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
              className="w-full text-black bg-gray-100 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Gender Dropdown */}
          <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
            <IoIosMan className="text-yellow" size={20} />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full text-black bg-gray-100 bg-transparent"
              required
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Service Type */}
          {/* <div className="flex items-center gap-2 border-b-2 border-yellow-500">
            <FaTools className="text-yellow" />
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              placeholder="Service Type"
              className="w-full focus:outline-none focus:ring-0"
              required
            />
          </div> */}

          {/* Preferred Date */}
          <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
            <FaCalendarAlt className="text-yellow" />
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={today} // Disable past dates
              className="w-full text-black bg-gray-100 focus:outline-none"
              required
            />
          </div>

          {/* Preferred Time */}
          <div className="flex items-center gap-2 p-2 border-b-[1px] border-black">
            <FaClock className="text-yellow" />
            <input
              type="text"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              placeholder="Preferred Time (e.g., 10:30)"
              className="w-full text-black bg-gray-100 focus:outline-none"
              required
            />
            <select
              name="preferredTimePeriod"
              value={formData.preferredTimePeriod}
              onChange={handleChange}
              className="border-none  focus:outline-nonefocus:ring-0 bg-transparent"
              required
            >
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-48 bg-yellow text-white py-2 px-4 font-semibold hover:scale-110 transition ease-out duration-800"
      >
        Book Appointment
      </button>
      <div className="mt-4 font-semibold">OR</div>
      <div className="mt-2 text-sm md:text-base">
        <span className="text-yellow text-2xl"> Call us @</span>
        <span className="hover:text-yellow text-2xl hover:cursor-pointer"> 1800123123</span>
      </div>
    </form>
  );
}
