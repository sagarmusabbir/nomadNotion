import { footerNavigation } from "@/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100   ">
      <div className="max-w-5xl m-auto  px-4 py-2 md:flex md:items-center md:justify-between ">
        <div className="text-center text-xs text-gray-700 dark:text-slate-200 font-light items-center mt-1 md:mt-0">
          &copy; Musabbir Sagar
        </div>
        <div className="flex justify-center space-x-6">
          {footerNavigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-6 w-6 fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 hover:dark:fill-slate-300"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
