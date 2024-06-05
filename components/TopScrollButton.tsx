"use client";

import { Button } from "@/components/button";
import useScrollToTop from "../app/hook/useScrollToTop";
import { MoveUp } from "lucide-react";

const ScrollToTopButton = () => {
  const { showTopButton, scrollToTop } = useScrollToTop();

  return (
    <Button
      className={`fixed bottom-8 right-4 transition-opacity duration-300 rounded-md bg-zinc-800 text-slate-50 hover:bg-zinc-700 hover:text-slate-50 dark:bg-slate-200 dark:text-zinc-800 hover:dark:bg-slate-300 px-2 py-4 ${
        showTopButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <MoveUp />
    </Button>
  );
};

export default ScrollToTopButton;
