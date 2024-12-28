import { IoMdDisc } from "react-icons/io";
import AppointmentForm from "@/components/AppointmentForm";
import Button from "@/components/Button";
import Link from "next/link";

export default function ServicePage() {
  const ladiesServices = {
    "Hair Styling": [
      "Hair Cut",
      "Ironing",
      "Global Colouring",
      "Blow Dry",
      "Root Touch Up",
      "Shampoo & Conditioning",
      "Head Massage",
      "Roller Setting",
      "Oiling",
    ],
    "Make Up": ["Party Make Up", "Engagement Make Up", "Bridal & Reception Make Up", "Base Make Up", "Eye Make Up"],
    "Hair Texture": ["Rebonding", "Perming", "Keratin", "Colour Protection", "Smoothening"],
    "Hair Treatments": ["Spa Treatments", "Volumizing", "Advanced Hair Moisturising", "Scalp Treatments"],
    "Facials & Rituals": ["Bleach", "Luxury Facials/Rituals", "Clean Ups", "Body Polishing/Rejuvenation", "Threading"],
    "Hand & Feet": ["Manicure", "Spa Pedicure", "Pedicure", "Waxing", "Spa Manicure"],
    "Nail Care": ["Nail Paint", "Nail Art", "Nail Filling"],
  };
  return (
    <div className="max-[347px]:pt-[17rem] pt-60 md:pt-48">
      <section className="">
        <div>
          <img src="/images/services/ladies1.png" alt="Ladies1" />
        </div>
        <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-10 md:px-20 lg:px-32">
          {Object.keys(ladiesServices)
            .slice(0, 4)
            .map((serviceCategory) => (
              <div key={serviceCategory}>
                <h3 className="md:text-2xl text-lg">{serviceCategory}</h3>
                <ul className="pt-2 md:text-base text-sm">
                  {ladiesServices[serviceCategory].map((service) => (
                    <li key={service} className="flex">
                      <IoMdDisc className="text-yellow my-auto mr-1" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div>
          <img src="/images/services/ladies2.png" alt="Ladies2" />
        </div>
        <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3 px-10 md:px-20 lg:px-32">
          {Object.keys(ladiesServices)
            .slice(4)
            .map((serviceCategory) => (
              <div key={serviceCategory}>
                <h3 className="md:text-2xl text-lg">{serviceCategory}</h3>
                <ul className="pt-2 md:text-base text-sm">
                  {ladiesServices[serviceCategory].map((service) => (
                    <li key={service} className="flex">
                      <IoMdDisc className="text-yellow my-auto mr-1" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="flex justify-center my-10">
          <Link href="/services/gents">
            <Button className="bg-yellow text-white px-4 py-2 font-semibold text-sm md:text-lg">Gents Services</Button>
          </Link>
        </div>
      </section>
      <AppointmentForm />

      <section className="px-10 md:px-20 lg:px-32 py-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Ladies Salon Services</h2>
        <p className="mt-4 text-sm sm:text-base">
          Explore the art of looking your best beautiful with the best in the industry. Z<sup>3</sup> Salon makes a
          personal commitment to realize the prevalent gap in the industry by providing access to high-end ladies salon
          services, that to at convenient times and affordable prices - any day of the week and any time of the day! You
          can count on us for a hassle-free appointment. <br className="mb-2" />Z<sup>3</sup> Salon is an Award-winning
          Salon Chain which has over 90 branches across India and Dubai. We are also one of the largest and
          fastest-growing Salon Chains in India. We have been at the forefront of setting new benchmarks and exceeding
          Industry standards. <br className="mb-2" />
          When you avail our services, we ensure that you are completely delighted with your style. Before our team of
          experienced, professional, and affable stylists works its magic, they’ll go through a thorough consultation to
          understand your preferences and style goals. We don’t start till we are clear of what you want.{" "}
          <br className="mb-2" />
          At Z<sup>3</sup> Salon, our stylists have been rigorously trained to give you a unique and personalized
          experience. Our creative hair stylists and beauty experts work meticulously to give you a head turning look.
          Be it a haircut focused on highlighting your best features or a hair color that would make you stand out and
          shine, we work wholeheartedly towards meeting your requirements and enhancing your look.{" "}
          <br className="mb-2" />
          With a keen eye for detail, Z<sup>3</sup> Salon offers you varied options to provide proper care to your body,
          hair and skin. With our excellent range of Hair styling, Make Up, Hair Texture, Hair treatments, Facials, Hand
          and feet, Nail care services, we assure you the ‘Superfect’ dreamy look. Whether it’s overseeing client
          satisfaction for everyone who enters the salon or the magnificent interior that catches every onlookers fancy,
          Z<sup>3</sup> Salon possesses an infinite enthusiasm for keeping abreast with latest technologies and trends.
          <br className="mb-2" />
          Visit us for all your beauty needs. You can also book an appointment by either filling the form on our website
          or by simply giving us a call. Book now for the best in class services!
        </p>
      </section>
    </div>
  );
}
