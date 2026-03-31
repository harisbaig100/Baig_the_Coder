// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills &amp; Tools
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-6 px-4">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-[#1f223c] bg-[#11152c] p-5 hover:border-violet-500 transition-colors"
            >
              <p className="text-white text-lg font-medium mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const icon = skillsImage(item) || skillsImage(group.category) || skillsImage('React');
                  return (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg border border-[#25213b] bg-[#0b1026] px-3 py-2"
                    >
                      <div className="h-6 w-6 flex items-center justify-center">
                        <Image
                          src={icon}
                          alt={item}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      </div>
                      <p className="text-gray-200 text-sm whitespace-nowrap">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;