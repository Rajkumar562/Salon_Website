import React from "react";

export default function OurStoryPart2() {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-center items-center px-5 md:px-10 lg:px-32 py-10 bg-slate-100">
      <div className="flex-1">
        <h2 className="text-yellow font-semibold text-lg md:text-xl lg:text-2xl">Corporate Vision </h2>
        <p className="px-2 lg:px-10 mt-2 text-sm md:text-base">
          Our vision is to be a leading customer centric salon chain, warmly welcoming all customers for an experience
          which takes them on a high in terms of quality Hair, beauty & Skin services in a hygienic, relaxed,
          comfortable environment to make their day fabulous.
        </p>
      </div>
      <div className="">
        <img
          src="/images/aboutus/abtImg.png"
          alt="Our Story"
          width={271}
          height={246}
          className="w-[271px] h-[246px]"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-yellow text-lg md:text-xl lg:text-2xl font-semibold">Customer Promise</h2>
        <p className="px-2 lg:px-10 mt-2 text-sm md:text-base">
          Our commitment is to always try to master the art of exemplary services & experience; it is our endeavor to
          serve with excellence. We feel under oath to provide an unwinding environment with precision, detail and
          purpose where you can immerse yourself in peace and luxury. We promise to deliver with consummate skill and
          impeccable ambience on every visit.
        </p>
      </div>
    </div>
  );
}
