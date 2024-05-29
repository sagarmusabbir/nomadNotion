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
                  ? "bg-gray-600 text-slate-50 hover:bg-gray-500"
                  : "bg-gray-500 text-slate-50 hover:bg-slate-500"
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
