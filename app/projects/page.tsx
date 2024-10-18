import Image from "next/image";

import Portfolio from "@/components/Allprojects";
import DefaultHero from "@/components/Hero";
import { MdComputer } from "react-icons/md";
import { Metadata } from "next";
import { Project } from "@/lib/types";
import { getAllProjects } from "@/functions/getAllProjects";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { ProjectIcon } from "@/components/icons";
import Search from "@/components/Search";
import Feed from "@/components/Feed";
import SearchProject from "@/components/SearchProject";
import { calculateProjectTagFrequency } from "@/functions/getAllProjectTags";

const title = "Musabbirs Contributions through Nomad Gang Labs";

export const metadata: Metadata = {
  title: `${title}`,
  openGraph: {
    title: `${title}`,
  },
};

const Projects = async () => {
  const publishedProjects: Project[] = await getAllProjects();
  const tagFrequencyMap = await calculateProjectTagFrequency({
    publishedProjects,
  });

  return (
    <main className="space-y-5 max-w-7xl m-auto min-h-screen">
      <DefaultHero
        Icon={ProjectIcon}
        name="Projects"
        source="/coverprojects.webp"
      />
      <div className="max-w-5xl m-auto p-4 min-h-screen">
        <SearchProject
          publishedProjects={publishedProjects}
          tagFrequencyMap={tagFrequencyMap}
        />
      </div>
    </main>
  );
};

export default Projects;
