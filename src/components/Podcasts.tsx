import type { Entry } from "contentful";
import FeaturedVideo from "./FeaturedPodcastCard";
import PodcastCard from "./PodcastCard";
import type { Podcast } from "../pages/media.astro";

export default function Podcasts({
  podcasts,
  searchKeyword,
}: {
  podcasts: Entry<Podcast>[];
  searchKeyword: string;
}) {
  const startIndex = searchKeyword === "" ? 1 : 0;

  const customSort = (a: Entry<Podcast>, b: Entry<Podcast>) => {
    if (a.fields.date > b.fields.date) return -1;
    if (a.fields.date < b.fields.date) return 1;
    return 0;
  };
  
  // does not include featured podcast
  const sortedPodcasts = podcasts
    .slice(startIndex, podcasts.length)
    .sort(customSort);

  return (
    <div className="w-full">
      {searchKeyword === "" && <FeaturedVideo details={podcasts[0]} />}
      <div className="grid lg:grid-cols-3 mt-8 gap-8 w-full">
        {sortedPodcasts.map((podcast) => (
          <PodcastCard
            key={podcast.fields.title.toString()}
            details={podcast}
          />
        ))}
      </div>
      {podcasts.length === 0 && (
        <div className="w-full">No podcasts found.</div>
      )}
    </div>
  );
}
