"use client";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import AppointmentForm from "@/components/AppointmentForm";
export default function OffersPage() {
  const images = Array.from({ length: 4 }, (_, i) => `/images/offers/img${i + 1}.jpeg`);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="pt-48 md:pt-32">
      <h1 className="text-4xl text-center mb-10">Offers</h1>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img src={selectedImage} alt="Full Image" className="max-w-full max-h-full" />
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 rounded-full px-4 py-2">
            <MdCancel className="text-red-400 rounded-full" size={40} />
          </button>
        </div>
      )}
      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-gray-200 rounded-md">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden border-2 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-contain hover:scale-[2] transition-transform duration-[2000ms]"
            />
          </div>
        ))}
      </div>
      <AppointmentForm />
      <div className="px-10 sm:px-20 md:px-32">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-6">
          Z<sup>3</sup> Salon Discounts & Offers
        </h2>
        <p className="text-sm sm:text-base mb-4">
          Z<sup>3</sup> Salon, being a premium beauty salon for both women and men, makes sure that every customer has a
          delighted experience every time he/she visits any of our 95+ branches - moreover, the story of a
          transformation and looking exquisite varies from person to person and we get to hear many interesting and
          positive stories from our esteemed customers every day and that’s what keeps us going!
          <br className="mb-4" />
          For their brand loyalty and also to make our esteemed customers feel privileged and satisfied, we regularly
          present them with discounts and offers. Z<sup>3</sup> Salon always strives hard to have a long lasting
          relationships with its customers and thus we come up with amazing offers which can availed by our customers
          even if they are visiting us for the first time.
          <br className="mb-4" />
          Keep watching this section to check out the latest discounts and offers. We also have exclusive offers for our
          loyal customers - get in touch with us to know more. For further queries, contact us on the +91 9582715379,
          +91 11 45491111 or contact our nearest branch.
        </p>
      </div>
    </section>
  );
}
