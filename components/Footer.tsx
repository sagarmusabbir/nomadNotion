import { footerNavigation } from "@/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-zinc-900 border-gray-50 dark:border-zinc-950 border-t-2">
      <div className="max-w-5xl m-auto p-4 md:flex md:items-center md:justify-between space-y-3">
        <p className="text-center text-sm text-gray-800 dark:text-slate-200">
          &copy; Musabbir Sagar
        </p>
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
