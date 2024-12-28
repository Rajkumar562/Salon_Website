export default function HairStylesPage() {
  const imgPath = "/images/hair-styles/img";
  return (
    <div>
      <section className="pt-48 md:pt-32 px-10 md:px-20 lg:px-32">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col gap-6">
            <a href="/hair-styles/launchpad" className="relative overflow-hidden cursor-pointer">
              <img src={`${imgPath}1.jpg`} alt="Launchpad Image" className="h-full object-cover" />
            </a>
            <a href="/hair-styles/collection2011" className="relative overflow-hidden cursor-pointer">
              <img src={`${imgPath}2.jpg`} alt="Collection-2011 Image" className="h-full object-cover" />
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <a href="/hair-styles/rock" className="relative overflow-hidden cursor-pointer">
              <img src={`${imgPath}3.jpg`} alt="Rock Image" className="h-full object-cover" />
            </a>
            <a href="/hair-styles/bridal" className="relative overflow-hidden cursor-pointer">
              <img src={`${imgPath}4.jpg`} alt="Bridal Image" className="h-full object-cover" />
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <a href="/hair-styles/collection2012" className="relative overflow-hidden cursor-pointer">
              <img src={`${imgPath}5.jpg`} alt="Collection-2012 Image" className="h-full object-cover" />
            </a>
            <a href="/hair-styles/andpersand" className="relative overflow-hidden cursor-pointer">
              <img src={`${imgPath}6.jpg`} alt="Andpersand Image" className="h-full object-cover" />
            </a>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-16 px-10 md:px-20 lg:px-32">
        <h2 className="text-xl md:text-2xl lg:text-3xl">Hair Style Collection</h2>
        <p className="text-sm md:text-lg mt-4">
          Your hairstyle says a lot about your personality. It is the basic yet essential way to make your appearance
          stand out from the crowd. However creating a style statement with your hairstyle is a task of its own.
          <br />
          <br />
          The often heard statement, &quot;Bad Hair Day&quot; makes you feel less confident and want to hide your hair
          in a stall or a cap. But why stop yourself from exploring different hairstyles that would bring out the unique
          personality and even express your thoughts? Over the years, Z<sup>3</sup> Salon has always been experimenting
          with the latest trends and hairstyles to bring out the best personality of the person.
          <br />
          <br />
          To understand what we are saying, head-on to one of our hairstyle collections and experience the uniqueness Z
          <sup>3</sup> Salon brings. Be it for a simple personality or for the hard rock music lover, a corporate look
          or a bridal look, everything and anything is done distinctively. So the next time when you are planning for a
          haircut or a hair color, do not forget your own personality that you want to express through your hairstyle
          and leave the rest to us.
          <br />
          <br />Z<sup>3</sup> Salon has 95+ Branches across India and Abroad. Use the Salon Finder to locate the nearest
          branch or Book an appointment now.
        </p>
      </section>
    </div>
  );
}
