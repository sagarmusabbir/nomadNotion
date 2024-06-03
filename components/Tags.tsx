import { Button } from "@/components/button";
import { TagFrequencyMap } from "@/lib/types";
import Link from "next/link";
import { useParams } from "next/navigation";

const Tags = ({ tagFrequencyMap }: { tagFrequencyMap: TagFrequencyMap }) => {
  const params = useParams();
  const { slug } = params;
  const flatTags = Object.entries(tagFrequencyMap).map(([name, number]) => ({
    name,
    number,
  }));
  flatTags.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="gap-2 flex flex-wrap">
      {flatTags.map(({ name, number }, index) => {
        const selected = name === slug;

        return (
          <Link href={selected ? "/search" : `/tag/${name}`} key={index}>
            <Button
              className={
                selected
                  ? "bg-gray-700 text-slate-50 hover:bg-slate-500 px-2 py-1 text-xs"
                  : "bg-transparent border border-gray-700 text-gray-800 hover:bg-gray-700 hover:text-slate-50 px-2 py-1 text-xs"
              }
            >
              {`${name} (${number})`}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Tags;
