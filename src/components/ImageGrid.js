export default function ImageGrid() {
  const images = Array.from({ length: 6 }, (_, i) => `/images/home/img${i + 1}.jpg`);

  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <a href="/hair-styles" key={index} className="relative overflow-hidden cursor-pointer">
            <div key={index} className="relative overflow-hidden cursor-pointer">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
