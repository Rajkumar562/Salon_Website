import AppointmentForm from "@/components/AppointmentForm";
import ImageGrid from "@/components/ImageGrid";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <ImageGrid />
      <h2 className="text-xl md:text-2xl lg:text-3xl text-black text-center my-10">OUR SERVICES</h2>
      <div className="flex">
        <a href="#" className="relative w-1/2">
          <img src="/images/home/gents.jpg" alt="Gents" className="w-full h-full object-cover" />
          <span className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            GENTS
          </span>
        </a>
        <div className="relative w-1/2">
          <img src="/images/home/ladies.jpg" alt="Ladies" className="w-full h-full object-cover" />
          <span className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            LADIES
          </span>
        </div>
      </div>
      <AppointmentForm />

      <section className="px-10 sm:px-20 md:px-32 lg:px-40 text-left mt-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
          Explore the Realm of Beauty with Z<sup>3</sup> Salon
        </h2>
        <p className="text-sm md:text-base lg:text-lg">
          With over 162 branches nationally and internationally, Z<sup>3</sup> salon is a premium beauty salon for men
          and women who desire to look the best every day. Getting a makeover not only changes the appearance of a
          person but also brings back the lost confidence and Z<sup>3</sup> Salon would take pride in being a part of
          it. From beauty to grooming services, we provide a tremendous range of facilities that touches every dimension
          of beauty and hair treatments. Our repertoire of professional experts makes sure that all your beauty and hair
          questions are answered, and you leave the salon with a big smile on your face.
          <br className="mt-4" />
          With over 6000 employees engaged in transforming your look, we make sure that all the services provided at our
          salons meet the international standards. Through our advice and solutions from the expertise in this array, we
          aim at giving the best services through our state-of-art facilities. Our professional stylists and beauty
          experts are constantly updated with the latest trends and fashion advices that help them to work efficiently
          and deliver outstanding results!
          <br className="mt-4" />
          Give us an opportunity to serve you once, we are sure you&apos;ll love to come back to us again and be our
          esteemed customer forever. Fill the form or call us to book an appointment now!
        </p>
      </section>
    </div>
  );
}
