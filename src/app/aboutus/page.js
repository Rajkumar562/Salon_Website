"use client";
import OurStory from "./components/OurStory";
import OurStoryPart2 from "./components/OurStoryPart2";
import BrandAssociates from "./components/BrandAssociates";
import Awards from "./components/Awards";

export default function AboutUsPage() {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <nav className="fixed max-[398px]:top-[160px] top-[148px] md:top-[100px] left-0 right-0 w-full bg-gray-300 z-10">
        <ul className="flex justify-center px-2 md:px-6 text-sm md:text-xl">
          <a href="#our-story">
            <li className="text-black hover:text-white hover:bg-yellow py-2 px-4">Our Story</li>
          </a>
          <a href="#awards">
            <li className="text-black hover:text-white hover:bg-yellow py-2 px-4">Awards</li>
          </a>
          <a href="#brand-associates">
            <li className="text-black hover:text-white hover:bg-yellow py-2 px-4">Brand Associates</li>
          </a>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="text-center">
        {/* Section 1: Our Story */}
        <section id="our-story">
          <OurStory />
          <OurStoryPart2 />
        </section>

        {/* Section 2: Awards */}
        <section id="awards">
          <Awards />
        </section>

        {/* Section 3: Brand Associates */}
        <section id="brand-associates">
          <BrandAssociates />
        </section>
      </div>
    </div>
  );
}
