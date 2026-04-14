"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


// component
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {

  const handleDownload = () => {
    const pdfUrl = "/bhavesh_php_fullstack_resume.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="h-full py-0">
      <div className="container h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-14 lg:pb-20 lg:sticky lg:top-24 lg:self-start lg:z-10 lg:bg-primary lg:pb-8 lg:pt-8">
          {/* text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-lg mb-3 inline-block">Full Stack PHP Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-accent">Bhavesh Jethava</span>
            </h1>
            <p className="w-full lg:max-w-[500px] mb-9 text-white/80">Full Stack PHP Web Developer with 5 years of experience specializing in Core PHP, Laravel, and REST API development. Proficient in Next.js and React.js for frontend solutions. Expert in WordPress customization, including theme/plugin development and payment gateway integrations, delivering custom solutions tailored to client needs.</p>

            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant="outline" size="md" onClick={handleDownload} className="capitalize flex items-center gap-2">
                <span className="text-sm">Download CV</span>
                <FiDownload className="text-lg" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <Social containerStyles="flex gap-3" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* image */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
};

export default Home;