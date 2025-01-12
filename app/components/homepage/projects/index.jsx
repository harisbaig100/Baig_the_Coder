// @flow strict

import { projects } from "@/utils/data/Projects";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Projects() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Section Header */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center items-center lg:py-2">
        <div className="flex items-center gap-x-4">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <div className="w-60 h-60">
            <AnimationLottie animationPath={experience} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {projects.map((experience, index) => (
                <div key={index} className="relative mx-auto">
                  {/* GlowCard - Now positioned above */}
                  <div className="absolute -top-8 left-0 right-0 z-20">
                    <GlowCard>
                      <div className="flex flex-col p-4">
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <div className="mt-4">
                          {experience.description}
                        </div>
                      </div>
                    </GlowCard>
                  </div>

                  {/* Mobile Frame */}
                  <div className="relative w-[320px] h-[660px] bg-black rounded-[60px] border-8 border-black overflow-hidden shadow-2xl mt-60">
                    {/* Camera Notch */}
                    <div className="absolute top-0 w-full h-14 bg-black rounded-b-[40px] flex justify-center">
                      <div className="w-1/3 h-7 bg-gray-800 rounded-b-[40px]"></div>
                    </div>

                    {/* Side Buttons */}
                    <div className="absolute top-20 -left-3 w-1 h-12 bg-gray-800 rounded-lg"></div>
                    <div className="absolute top-36 -left-3 w-1 h-12 bg-gray-800 rounded-lg"></div>
                    <div className="absolute top-28 -right-3 w-1 h-16 bg-gray-800 rounded-lg"></div>

                    {/* Glass Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none"></div>

                    {/* Bottom Bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
