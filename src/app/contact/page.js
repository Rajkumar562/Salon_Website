import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaRegClock, FaComments, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QueryForm from "@/components/QueryForm";

export default function ContactPage() {
  return (
    <div className="pt-44 md:pt-32 px-10 sm:px-20 md:px-32">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">CONTACT US</h1>
      <section className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-20 mt-6 text-sm md:text-base">
        <div className="text-left pr-10 ">
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl mb-2">HEAD OFFICE</h1>
            <hr className="border-t-1 border-gray-400 my-2" />
            <div className="flex mt-1">
              <FaLocationDot className="text-yellow my-auto mr-1" /> No 17A / 22, Ajmal Khan Road, Karol Bagh New Delhi
              - 110 005
            </div>
            <div className="flex">
              <FaPhoneAlt className="text-yellow my-auto mr-1" />
              <span className="hover:text-yellow hover:cursor-pointer"> 1800123123</span>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex">
              <FaRegClock className="text-yellow my-auto mr-1" /> <span className="">Open until 09:00 PM</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-yellow my-auto mr-1">@</span>
              <span className="font-bold">Careers:</span>
              <span className="hover:text-yellow hover:cursor-pointer">careers@lookssalon.in</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-yellow my-auto mr-1">@</span>
              <span className="font-bold">academy:</span>
              <span className="hover:text-yellow hover:cursor-pointer">academy@lookssalon.in</span>
            </div>

            <div className="flex flex-wrap">
              <FaComments className="text-yellow my-auto mr-1" />
              <span className="font-bold">Feedback:</span>
              <span className="hover:text-yellow hover:cursor-pointer">customercare@lookssalon.in</span>
            </div>

            <div className="flex flex-wrap">
              <span className="font-bold">Franchise Opportunities:</span>
              <span className="hover:text-yellow hover:cursor-pointer">franchise@lookssalon.in</span>
            </div>
          </div>

          <div>
            <h1 className="text-xl mt-10 mb-2">Follow us</h1>
            <div className="flex gap-2">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow hover:cursor-pointer"
              >
                <div className="bg-blue-700 hover:bg-blue-800 p-2">
                  <FaFacebookF size={24} className="text-white my-auto" />
                </div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow hover:cursor-pointer"
              >
                <div className="bg-sky-500 hover:bg-sky-600 p-2">
                  <FaTwitter size={24} className="text-white my-auto" />
                </div>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow hover:cursor-pointer"
              >
                <div className="bg-red-600 hover:bg-red-700 p-2">
                  <FaInstagram size={24} className="text-white my-auto" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-lg md:text-xl lg:text-2xl mb-2">SEND QUERY</h1>
          <hr className="border-t-1 border-gray-400 my-2" />
          <h2 className="font-semibold my-3">Kindly fill up your details and submit your query</h2>
          <QueryForm />
        </div>
      </section>

      <div className="mt-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl my-4">
          Z<sup>3</sup> Salon – Largest Salon Chain in India
        </h2>
        <p className="text-base md:text-lg mb-4">
          Z<sup>3</sup> Salon is an award-winning, elite unisex salon that provides a range of makeovers and treatment
          options for both men and women. Why is Z<sup>3</sup> Salon the right choice? We have more than 95 branches
          across India and internationally with over 28 years of experience and thousands of loyal customers, which
          makes us the best and largest salon chain in India and one of the leading salon brands internationally. Our
          salons are easily accessible and located in the most happening places of the cities. Moreover, the services we
          provide are handled by award winning stylists.
          <br className="mb-4" />
          Our stylists are always updated with the latest trends and techniques to give you the best services with
          utmost comfort. If you’re looking for any sort of beauty and hair services and not quite sure of your
          requirement, our experts can really give you some awesome recommendations and make sure that you get premium
          services at our salon.
        </p>
      </div>
    </div>
  );
}
