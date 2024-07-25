import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import MediaTabs from "./MediaTabs";
import Podcasts from "./Podcasts";
import Articles from "./Articles";
import type { Entry } from "contentful";
import type { Article, Podcast } from "../pages/media.astro";

export default function MediaSection({
  articles,
  podcasts,
}: {
  articles: Entry<Article>[];
  podcasts: Entry<Podcast>[];
}) {
  const [tab, setTab] = useState("PODCASTS");

  const podcastFilters = ["ALL", "ON A TANGENT", "GUEST"];
  const articleFilters = ["ALL", "INTERNAL", "GUEST"];
  const [selectedPodcastsFilter, setSelectedPodcastsFilter] = useState("ALL");
  const [selectedArticlesFilter, setSelectedArticlesFilter] = useState("ALL");
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      (selectedPodcastsFilter === "ALL" ||
        (podcast.fields.tags as unknown as string[]).includes(
          selectedPodcastsFilter
        )) &&
      podcast.fields.title
        .toString()
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
  );

  const filteredArticles = articles.filter(
    (article) =>
      (selectedArticlesFilter === "ALL" ||
        (article.fields.tags as unknown as string[]).includes(
          selectedArticlesFilter
        )) &&
      article.fields.title
        .toString()
        .toLowerCase()
        .includes(searchKeyword.toLowerCase())
  );

  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  useEffect(() => {
    setSearchKeyword("");
  }, [tab]);

  return (
    <div ref={ref} className="md:w-[75vw] max-w-7xl relative">
      <MediaTabs tab={tab} setTab={setTab} />
      <div className="flex flex-col desktop:flex-row items-center w-full mt-12 gap-6 text-lg">
        Categories:
        <FilterBar
          filters={tab === "PODCASTS" ? podcastFilters : articleFilters}
          selectedFilter={
            tab === "PODCASTS" ? selectedPodcastsFilter : selectedArticlesFilter
          }
          setSelectedFilter={
            tab === "PODCASTS"
              ? setSelectedPodcastsFilter
              : setSelectedArticlesFilter
          }
        />
        <div className="grow" />
        <SearchBar input={searchKeyword} setInput={setSearchKeyword} />
      </div>
      {tab === "PODCASTS" ? (
        <Podcasts podcasts={filteredPodcasts} searchKeyword={searchKeyword} />
      ) : (
        <Articles articles={filteredArticles} searchKeyword={searchKeyword} />
      )}
    </div>
  );
}
