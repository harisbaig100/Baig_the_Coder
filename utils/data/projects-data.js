export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Financial App',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Travel Agency App',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },








 {/* <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
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
            <span className="text-amber-300">Expo</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">TypeScript</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Redux Toolkit</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">React Query</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Firebase</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">GraphQL</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Jest</span>
            <span className="text-gray-400">{"', '"}</span>
            <span className="text-amber-300">Styled Components</span>
            <span className="text-gray-400">{"'],"}</span>
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
            <span className="text-amber-300">'Expert' </span>
            <span className="text-amber-300">&amp;&amp;</span>
          </div>

          <div>
            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
            <span className="mr-2 text-white">canFixProductionAt</span>
            <span className="mr-2 text-amber-300">===</span>
            <span className="text-amber-300">'3 AM'</span>
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
        </div> */}