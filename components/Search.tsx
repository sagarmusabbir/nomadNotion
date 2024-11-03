"use client";

import { Input } from "@/components/input";
import { Article, TagFrequencyMap } from "@/lib/types";
import { useState } from "react";
import Tags from "./Tags";
import { useParams } from "next/navigation";
import Feed from "./Feed";

const Search = ({
  publishedPosts,
  publishedProjects,
  tagFrequencyMap,
}: {
  publishedPosts: Article[];
  publishedProjects: Article[];
  tagFrequencyMap: TagFrequencyMap;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const params = useParams();
  const { slug } = params;

  const normalizedSlug =
    typeof slug === "string" ? slug.replace(/%20/g, " ") : slug;
  const filteredBlogPosts = publishedPosts.filter((post) => {
    const tagContent = post.tags ? post.tags.join(" ") : "";
    const searchContent = post.title + post.summary + tagContent;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });
  const filteredBlogProjects = publishedProjects.filter((project) => {
    const tagContent = project.tags ? project.tags.join(" ") : "";
    const searchContent = project.title + project.summary + tagContent;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const filteredArticles = publishedProjects.filter((all) => {
    const tagContent = all.tags ? all.tags.join(" ") : "";
    const searchContent = all.title + all.summary + tagContent;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div className="mb-5">
        <Input
          placeholder={
            slug ? `Search in #${normalizedSlug}` : "Search Articles"
          }
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <Tags tagFrequencyMap={tagFrequencyMap} />
      </div>

      {!filteredArticles.length && (
        <p className="text-gray-500 text-center">No posts found.</p>
      )}

      {/* <Feed articles={filteredBlogPosts }
       /> */}

      <Feed articles={[...filteredBlogPosts, ...filteredBlogProjects]} />
    </>
  );
};

export default Search;
