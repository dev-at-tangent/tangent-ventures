import { useState, useRef } from "react";
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

  const podcastFilters = ["ALL", "ON THE TANGENT", "GUEST"];
  const articleFilters = ["ALL", "FEATURED", "INTERNAL"];
  const [selectedPodcastsFilter, setSelectedPodcastsFilter] = useState("ALL");
  const [selectedArticlesFilter, setSelectedArticlesFilter] = useState("ALL");

  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      selectedPodcastsFilter === "ALL" ||
      (podcast.fields.tags as unknown as string[]).includes(
        selectedPodcastsFilter
      )
  );

  const filteredArticles = articles.filter(
    (article) =>
      selectedArticlesFilter === "ALL" ||
      (article.fields.tags as unknown as string[]).includes(
        selectedArticlesFilter
      )
  );

  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        delay: 2,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="w-full">
      <MediaTabs tab={tab} setTab={setTab} />
      <div className="flex items-center w-full mt-12 gap-x-6 text-lg">
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
        <SearchBar />
      </div>
      {tab === "PODCASTS" ? (
        <Podcasts podcasts={filteredPodcasts} />
      ) : (
        <Articles articles={filteredArticles} />
      )}
    </div>
  );
}
