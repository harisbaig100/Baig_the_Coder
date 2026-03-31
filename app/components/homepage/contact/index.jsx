// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaMedium, FaDev } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div id="achievements" className="mb-10 max-w-6xl">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3">
            <span className="w-16 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Key Achievements
            </span>
            <span className="w-16 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <div className="mt-5 rounded-xl border border-[#464c6a] bg-[#0d1224] p-5">
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-200">
            <li>
              React Native Community Developer and{' '}
              <Link
                href="https://github.com/facebook/react-native/issues/23313"
                target="_blank"
                className="text-[#16f2b3] hover:underline"
              >
                React Native Lean Core
              </Link>{' '}
              project contributor.
            </li>
            <li>
              Maintainer of{' '}
              <Link
                href="https://github.com/react-native-segmented-control/segmented-control"
                target="_blank"
                className="text-[#16f2b3] hover:underline"
              >
                react-native-segmented-control
              </Link>{' '}
              (643 stars) and{' '}
              <Link
                href="https://github.com/react-native-clipboard/clipboard"
                target="_blank"
                className="text-[#16f2b3] hover:underline"
              >
                react-native-clipboard
              </Link>{' '}
              (749 stars).
            </li>
            <li>
              Arctic Code Vault Contributor delivering mobile apps used by millions across global platforms.
            </li>
            <li>
              Mentored engineers, published technical articles, and led mobile architecture decisions across teams.
            </li>
            <li>
              Actively shared up-to-date solutions through forks and custom React Native libraries for the community.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <a
                href={`mailto:${personalData.email}`}
                className="text-[#16f2b3] underline underline-offset-4 decoration-[#16f2b3]/60 hover:decoration-[#16f2b3]"
                aria-label="Send email"
              >
                {personalData.email}
              </a>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <a
                href="https://wa.me/923359661486"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16f2b3] underline underline-offset-4 decoration-[#16f2b3]/60 hover:decoration-[#16f2b3]"
                aria-label="Chat on WhatsApp"
              >
                {personalData.phone}
              </a>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.medium}>
              <FaMedium
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.dev}>
              <FaDev
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;