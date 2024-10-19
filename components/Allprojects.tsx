// import { Badge, Button } from "flowbite-react";
// import type { FC } from "react";
// import {
//   SiTypescript,
//   SiNextdotjs,
//   SiWordpress,
//   SiElementor,
//   SiGhost,
//   SiHugo,
// } from "react-icons/si";

// const Portfolio: FC = function () {
//   return (
//     <div className="">
//       <div className=" mx-auto text-center lg:px-8 max-w-2xl px-4 pb-8 ">
//         <h2
//           className="text-4xl font-bold leading-tight text-gray-900 dark:text-white text-center mb-2
//         "
//         >
//           Latest Projects
//         </h2>
//         <p className="text-lg font-normal text-gray-500 dark:text-gray-400 ">
//           Here you can find my recent projects and short demostration with the
//           live preview and githib repo.
//         </p>
//       </div>
//       <div
//         className="
//       grid gap-10 lg:gap-12 sm:grid-cols-2 pb-4 sm:pb-12"
//       >
//         <div>
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <img
//             className="object-cover w-full rounded-lg shadow-lg hidden dark:block mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <div className="space-y-3 mb-6">
//             <Badge className="w-fit" color="gray">
//               <SiElementor className="w-4 h-4" />
//               Elementor Template
//             </Badge>
//             <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
//               <a href="#" className="hover:underline">
//                 Agency Landing Page
//               </a>
//             </h3>
//             <p className="text-lg font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
//               Flowbite helps you connect with friends, family and communities of
//               people who share your interests.
//             </p>
//           </div>
//           <div className="flex items-center gap-4 leading-none">
//             <Button href="#" size="sm" color="dark">
//               Case study
//             </Button>
//             <Button color="light" href="#" size="sm" className="w-fit">
//               <svg
//                 aria-hidden="true"
//                 className=" mr-2 h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                 <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//               </svg>
//               Live preview
//             </Button>
//           </div>
//         </div>
//         <div>
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <img className="#" alt="" />
//           <div className="space-y-3 mb-6">
//             <Badge color="gray" className="w-fit">
//               <SiHugo className="w-4 h-4" />
//               Hugo Theme
//             </Badge>
//             <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
//               <a href="#" className="hover:underline">
//                 Eventually
//               </a>
//             </h3>
//             <p className="text-lg font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
//               Flowbite helps you connect with friends, family and communities of
//               people who share your interests.
//             </p>
//           </div>
//           <div className="flex items-center gap-4 leading-none">
//             <Button href="#" size="sm" color="dark">
//               Case study
//             </Button>
//             <Button color="light" href="#" size="sm" className="w-fit">
//               <svg
//                 aria-hidden="true"
//                 className="w-4 h-4 mr-2 -ml-1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                 <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//               </svg>
//               Live preview
//             </Button>
//           </div>
//         </div>
//         <div>
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <div className="space-y-3 mb-6">
//             <Badge className="w-fit" color="gray">
//               <SiNextdotjs className="w-4 h-4" />
//               Next.js Starter
//             </Badge>
//             <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
//               <a href="#" className="hover:underline">
//                 Task management
//               </a>
//             </h3>
//             <p className="text-lg font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
//               Flowbite helps you connect with friends, family and communities of
//               people who share your interests.
//             </p>
//           </div>
//           <div className="flex items-center gap-4 leading-none">
//             <Button href="#" size="sm" color="dark">
//               Case study
//             </Button>
//             <Button color="light" href="#" size="sm" className="w-fit">
//               <svg
//                 aria-hidden="true"
//                 className="w-4 h-4 mr-2 -ml-1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                 <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//               </svg>
//               Live preview
//             </Button>
//           </div>
//         </div>
//         <div>
//           <img
//             className="object-cover w-full rounded-lg shadow-lg mb-6 dark:hidden"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <div className="space-y-3 mb-6">
//             <Badge color="gray" className="w-fit">
//               <SiGhost className="w-4 h-4 " />
//               Ghost Theme
//             </Badge>
//             <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
//               <a href="#" className="hover:underline">
//                 Flowbite's dashboard
//               </a>
//             </h3>
//             <p className="text-lg font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
//               Flowbite helps you connect with friends, family and communities of
//               people who share your interests.
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button href="#" size="sm" color="dark">
//               Case study
//             </Button>
//             <Button color="light" href="#" size="sm" className="w-fit">
//               <svg
//                 aria-hidden="true"
//                 className="w-4 h-4 mr-2 -ml-1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                 <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//               </svg>
//               Live preview
//             </Button>
//           </div>
//         </div>
//         <div>
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <img
//             className="object-cover w-full rounded-lg shadow-lg mb-6 dark:block hidden"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <div className="space-y-3 mb-6">
//             <Badge color="gray" className="w-fit">
//               <SiWordpress className="w-4 h-4" />
//               Wordpress Theme
//             </Badge>
//             <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
//               <a href="#" className="hover:underline">
//                 NGO Landing Page
//               </a>
//             </h3>
//             <p className="text-lg font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
//               Flowbite helps you connect with friends, family and communities of
//               people who share your interests.
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button href="#" size="sm" color="dark">
//               Case study
//             </Button>
//             <Button color="light" href="#" size="sm" className="w-fit">
//               <svg
//                 aria-hidden="true"
//                 className="w-4 h-4 mr-2 -ml-1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                 <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//               </svg>
//               Live preview
//             </Button>
//           </div>
//         </div>
//         <div>
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <img
//             className="object-cover w-full rounded-lg shadow-lg dark:block hidden mb-6"
//             src="https://raw.githubusercontent.com/sagarmusabbir/nextjs-14-notion/main/public/terminal.webp"
//             alt=""
//           />
//           <div className="space-y-3 mb-6">
//             <Badge color="gray" className="w-fit">
//               <SiTypescript className="h-4 w-4" />
//               React Boilerplate
//             </Badge>
//             <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
//               <a href="#" className="hover:underline">
//                 Mail management
//               </a>
//             </h3>
//             <p className="text-lg font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
//               Flowbite helps you connect with friends, family and communities of
//               people who share your interests.
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button href="#" size="sm" color="dark">
//               Case study
//             </Button>
//             <Button color="light" href="#" size="sm" className="w-fit">
//               <svg
//                 aria-hidden="true"
//                 className="w-4 h-4 mr-2 -ml-1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
//                 <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
//               </svg>
//               Live preview
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
