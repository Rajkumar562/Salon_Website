import galleryPage from "@/components/Gallery";

export default function Collection2012Page() {
  const images = Array.from({ length: 7 }, (_, i) => `/images/hair-styles/andpersand/${i + 1}.jpg`);
  const imgPath = "/images/hair-styles/collection2012";
  return (
    <div className="pt-48 md:pt-32 px-10 md:px-20 lg:px-32">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <div className="relative overflow-hidden cursor-pointer">
            <img src={`${imgPath}/1.jpg`} alt="Image 1" className="h-full object-cover" />
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img src={`${imgPath}/2.jpg`} alt="Image 2" className="h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative overflow-hidden cursor-pointer">
            <img src={`${imgPath}/3.jpg`} alt="Image 3" className="h-full object-cover" />
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img src={`${imgPath}/4.jpg`} alt="Image 4" className="h-full object-cover" />
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img src={`${imgPath}/5.jpg`} alt="Image 5" className="h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative overflow-hidden cursor-pointer">
            <img src={`${imgPath}/6.jpg`} alt="Image 6" className="h-full object-cover" />
          </div>
          <div className="relative overflow-hidden cursor-pointer">
            <img src={`${imgPath}/7.jpg`} alt="Image 7" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
