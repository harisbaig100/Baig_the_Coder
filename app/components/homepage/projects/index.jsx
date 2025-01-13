// @flow strict

import { projects } from "@/utils/data/Projects";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import Link from 'next/link';

function Projects() {
  return (
    <div id="projects" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
                  <div className="absolute left-0 right-0 z-20">
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
                  <Link href={experience.link} target="_blank" className="block">
                    <div className="relative w-[240px] h-[480px] bg-black rounded-[45px] border-2 border-white overflow-hidden shadow-2xl mt-60 transition-transform hover:scale-105">
                      {/* Camera Notch */}
                      <div className="absolute top-0 w-full h-5 bg-black rounded-b-[30px] flex justify-center z-10">
                        <div className="w-1/3 h-3 bg-white/30 rounded-b-[30px] shadow-md"></div>
                      </div>

                      {/* Image Section */}
                      <img 
                          src={experience.img} 
                          alt="Mobile Display"
                          className="absolute inset-0 w-full h-full object-cover mt-2 p-0.5"
                      />

                      {/* Glass Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none"></div>

                      {/* Bottom Bar */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                  </Link>
                
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
