export default function Awards() {
  return (
    <div className="py-10">
      <h2 className="text-xl md:text-2xl lg:text-3xl">AWARDS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-base sm:text-lg md:text-xl px-10 lg:px-32">
        <div className="items-center justify-center py-10 px-2">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/aboutus/indianHairDressing.png" alt="Indian Hair Dressing" />
            <p>2016-17</p>
          </div>
          <div className="text-center mt-2">
            <p>Best salon Chain – North </p>
            <p>Best Salon Design – North – Cyber Hub</p>
            <p>Cut & Style – Runners Up</p>
            <p>Young Colorist – Runners Up</p>
          </div>
        </div>
        <div className="items-center justify-center py-10 px-2">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/aboutus/indianHairDressing.png" alt="Indian Hair Dressing" />
            <p>2016-17</p>
          </div>
          <div className="text-center mt-2">
            <p>Color Trophy – Winner </p>
            <p>Color Trophy – Runners up</p>
            <p>Cut & Style – Winner</p>
            <p>Best Salon Chain - North</p>
          </div>
        </div>
        <div className="items-center justify-center py-10 px-2">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/aboutus/loreal.png" alt="Loreal" />
          </div>
          <div className="text-center mt-2">
            <p>Men&apos;s Image Winner – 2011-12 </p>
            <p>Color Trophy Winners – 2008-09</p>
            <p>Color Trophy Runners Up – 2005-06</p>
          </div>
        </div>
        <div className="items-center justify-center py-10 px-2">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/aboutus/franchiseIndia.png" alt="Franchise India" />
          </div>
          <div className="text-center mt-2">
            <p>Regional Salon Chain of the year – 2013-14</p>
            <p>Regional Salon Chain of the year – 2014-15</p>
            <p>Regional Salon Chain of the year – 2015-16</p>
            <p>Entrepreneurial Excellence – 2014</p>
          </div>
        </div>
      </div>
    </div>
  );
}
