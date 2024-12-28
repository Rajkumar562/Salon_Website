import Image from "next/image";

export default function Brands() {
  const images = Array.from({ length: 15 }, (_, i) => `/images/brands/img${i + 1}.webp`);

  return (
    <section className="py-10 px-10 sm:px-14 md:px-20 lg:px-32">
      <div className="container mx-auto ">
        <h2 className="text-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 ">Our Partner Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="w-[240px] h-[160px] rounded-lg group mx-auto p-5">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={240}
                height={160}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
