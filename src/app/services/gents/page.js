import { IoMdDisc } from "react-icons/io";
import AppointmentForm from "@/components/AppointmentForm";
import Button from "@/components/Button";
import Link from "next/link";

export default function LadiesPage() {
  const gentsServices = {
    "Hair Cut & Finish": [
      "Cut and Hair Care",
      "Shampoo & Conditioning",
      "Head Massage",
      "Beard Styling",
      "Hair/Beard Colouring",
    ],
    "Hair Colour": ["Hair Colour (Ammonia & Ammonia Free)", "Hi - Lites", "Beard Colour"],
    "Hair Texture": ["Straightening", "Smoothening", "Rebonding", "Perming"],
    "Hair Treatments": ["Hair Spa", "Advanced Moisturising", "Scalp Treatments", "Colour Protection"],
    "Skin Care": ["Clean Ups", "Facials", "Organic Treatments", "Manicure", "Pedicure"],
    "Beard Grooming": ["Beard Trim", "Beard Colour", "Beard Styling", "Shave", "Luxury Shave & Beard Spa"],
  };
  return (
    <div className="max-[347px]:pt-[17rem] pt-60 md:pt-48">
      <section className="">
        <div>
          <img src="/images/services/gents1.jpg" alt="Ladies1" />
        </div>
        <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-10 md:px-20 lg:px-32">
          {Object.keys(gentsServices)
            .slice(0, 4)
            .map((serviceCategory) => (
              <div key={serviceCategory}>
                <h3 className="md:text-2xl text-lg">{serviceCategory}</h3>
                <ul className="pt-2 md:text-base text-sm">
                  {gentsServices[serviceCategory].map((service) => (
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
          <img src="/images/services/gents2.jpg" alt="Ladies2" />
        </div>
        <div className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto px-10 md:px-36 lg:px-80">
          {Object.keys(gentsServices)
            .slice(4)
            .map((serviceCategory) => (
              <div key={serviceCategory}>
                <h3 className="md:text-2xl text-lg">{serviceCategory}</h3>
                <ul className="pt-2 md:text-base text-sm">
                  {gentsServices[serviceCategory].map((service) => (
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
          <Link href="/services">
            <Button className="bg-yellow text-white px-4 py-2 font-semibold text-sm md:text-lg">Ladies Services</Button>
          </Link>
        </div>
      </section>
      <AppointmentForm />

      <section className="px-10 md:px-20 lg:px-32 py-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Gents Salon Services</h2>
        <p className="mt-4 text-sm sm:text-base">
          Styling has never been limited to women. The art of looking handsome and getting makeovers has its own story
          for men and one cannot imagine the number of styles and treatments that can be done on these hunks. Moreover,
          the desire to have a unique identity is everyone&apos;s want and Z<sup>3</sup> Salon makes that possible. From
          grooming to beauty sessions, we offer a wide range of services and treatments that every man wishes to get.
          Our professionally trained stylists and experts leave no stone unturned to give you the best look that would
          do all the talking and make your style better than the best!
          <br className="mb-2" /> Not only that, our experts would happily give you tips and tricks to sustain that long
          desired style to make you feel confident and rule the world. Look Salon is a proud and award winning salon
          chain that has over 95 branches nationally and internationally to help people give them the &apos;Perfect
          Look&apos; and flaunt it in style. Our experts are constantly updated with latest trends in the fashion world
          and even help you suggest the best look according to your personality and while we&apos;re giving you your
          desired look, we also ensure that you have a very fruitful visit to the salon. Bring all your beauty and hair
          questions to us and get them answered at Z<sup>3</sup> Salon. We make sure that we are using the right product
          and technology for your services and thus you can be sure that you are availing a world-class service.{" "}
          <br className="mb-2" />
          So wait no more, book your appointment today through our website or contact the nearest Z<sup>3</sup> Salon
          and experience the magnificent way of transforming yourself.
        </p>
      </section>
    </div>
  );
}
