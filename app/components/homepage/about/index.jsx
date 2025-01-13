// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>

          <div className="flex justify-center order-2 lg:order-2 mt-6">
            <Image
              src={personalData.profile}
              width={220}
              height={220}
              alt="M.Haris Baig"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>

        </div>
        
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">developer</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">M. Haris Baig</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">skills:</span>
            <span className="text-gray-400">{`['`}</span>
            <span className="text-amber-300">React Native</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">React</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">MERN</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Swift Toolkit</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">openSourceContributor:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">reactNativeCommunityDeveloper:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">passionateProductHandler:</span>
            <span className="text-orange-400">true</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">mentorshipExperience:</span>
            <span className="text-orange-400">3</span>
            <span className="text-gray-400">+</span>
            <span className="text-amber-300"> years</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">projectsDeployed:</span>
            <span className="text-orange-400">25</span>
            <span className="text-gray-400">+</span>
            <span className="text-amber-300"> apps</span>
            <span className="text-gray-400">,</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
            <span className="text-orange-400">function</span>
            <span className="text-gray-400">{'() {'}</span>
          </div>
          
          <div>
            <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
            <span className="text-gray-400">{`(`}</span>
          </div>
          
          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">passionateAboutCode</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          
          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">coffeeToCodeRatio</span>
            <span className="mr-2 text-amber-300">&gt;</span>
            <span className="text-orange-400">0.5 </span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>
          
          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">debuggingSkills</span>
            <span className="mr-2 text-amber-300">===</span>
            <span className="text-amber-300">`Expert`</span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>

          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">canFixProductionAt</span>
            <span className="mr-2 text-amber-300">===</span>
            <span className="text-amber-300">`3 AM`</span>
          </div>
          
          <div>
            <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
          </div>
          
          <div>
            <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
          </div>
          
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>

        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;