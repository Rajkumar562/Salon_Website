import { useState } from "react";

export default function OurStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="px-10 sm:px-16 lg:px-32 max-[400px]:pt-56 pt-52 md:pt-40 pb-20 text-sm md:text-base">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-6">OUR STORY</h2>
      <p className="mb-6">
        Z<sup>3</sup> Salon is one of the most powerful and fastest growing salon chain brand PanIndia, that has given
        the hairstyling industry a new horizon. Emerging as the largest single salon chain in the country.
      </p>
      <h2 className="text-lg md:text-xl lg:text-2xl mb-4">History Of the Company</h2>
      <p className="mb-6">
        Z<sup>3</sup> salon was established in January,1989 and has consistently shown year on year growth and is now a
        chain of 162 branches PanIndia. Z<sup>3</sup> salon is on a growth path of 200 salons; currently employing over
        6000 employees across India. Z<sup>3</sup> salon has remained a pioneer in hair, beauty & nail services and is
        now setting new bench marks in make up exceeding all industry standards to give professionalism a new art form.
      </p>

      {!isExpanded && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            toggleContent();
          }}
          className="text-yellow font-semibold hover:underline cursor-pointer"
        >
          Read More
        </a>
      )}

      {isExpanded && (
        <>
          <p className="mb-6">
            Mr. Sanjay Dutta, Onwer of the Looks Salon chain is also the visionary behind the inception of the company
            33 years ago. He is the man behind growth and expansion of the company. Mr. Dutta while working on the
            design and interiors for the salon keeps in mind “Utmost Luxury at Affordable Prices” to ensure the
            customers get the maximum and beyond expectations. Mr. Dutta says “I started the salon chain from a small 3
            cutting station barber shop and guided the company through the stages – from Barber shop to Beauty Parlour
            to unisex salons and now 162 salons PanIndia”.
          </p>
          <h2 className="text-lg md:text-xl lg:text-2xl mb-4">Design and Concept</h2>
          <p className="mb-6">
            The salon interiors are inspired from abstract and defined lines; giving the salon a very modern, plush and
            stylish look. The inspiration for the salon interiors comes mostly from the needs expressed by the growing
            awareness and more informed consumers.
          </p>
          <p className="mb-6">
            While setting up the salon, Mr. Dutta faced typical challenges that come from a very fast growing and
            radically changing industry. With the consumers being more informed and aware; we had to ensure that we live
            to the perception of ultimate in luxury yet affordable as per mindset of customers. The latest yet the most
            modern and luxurious had to be sourced and none other than the best – Tangy Rose was chosen. Mr. Dutta says”
            While setting and designing a new salon I put myself in place of the consumer and then feel and relate with
            before choosing or selecting.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              toggleContent();
            }}
            className="text-yellow font-semibold hover:underline cursor-pointer"
          >
            Read Less
          </a>
        </>
      )}
    </div>
  );
}
