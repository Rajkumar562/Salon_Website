"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const images = [
    "/images/hair-styles/img1.jpg",
    "/images/hair-styles/img2.jpg",
    "/images/hair-styles/img3.jpg",
    "/images/hair-styles/img4.jpg",
    "/images/hair-styles/img5.jpg",
    "/images/hair-styles/img6.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden mt-44 md:mt-32">
      <div className="flex items-center justify-between absolute inset-0 z-10">
        <button
          onClick={handlePrev}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full ml-4 focus:outline-none"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full mr-4 focus:outline-none"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[300px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
