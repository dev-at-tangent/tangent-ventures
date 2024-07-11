import { useState } from "react";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import MediaTabs from "./MediaTabs";
import Podcasts from "./Podcasts";
import Articles from "./Articles";

export default function MediaSection() {
  const [tab, setTab] = useState("PODCASTS");

  const filters = ["ALL", "ON THE TANGENT", "GUEST"];
  const [selectedPodcastsFilter, setSelectedPodcastsFilter] = useState("ALL");
  const [selectedArticlesFilter, setSelectedArticlesFilter] = useState("ALL");
  const podcasts = [
    {
      type: "ON THE TANGENT",
    },
    {
      type: "GUEST",
    },
    {
      type: "ON THE TANGENT",
    },
    {
      type: "ON THE TANGENT",
    },
    {
      type: "GUEST",
    },
    {
      type: "GUEST",
    },
    {
      type: "GUEST",
    },
  ];
  
  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      selectedPodcastsFilter === "ALL" ||
      podcast.type === selectedPodcastsFilter
  );

  return (
    <div className="w-full">
      <MediaTabs tab={tab} setTab={setTab} />
      <div className="flex items-center w-full mt-12 gap-x-6 text-lg">
        Categories:
        <FilterBar
          filters={filters}
          selectedFilter={selectedPodcastsFilter}
          setSelectedFilter={setSelectedPodcastsFilter}
        />
        <div className="grow" />
        <SearchBar />
      </div>
      {tab === "PODCASTS" ? (
        <Podcasts podcasts={filteredPodcasts} />
      ) : (
        <Articles />
      )}
    </div>
  );
}
