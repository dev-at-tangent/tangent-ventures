import type { Entry } from "contentful";
import FeaturedVideo from "./FeaturedPodcastCard";
import PodcastCard from "./PodcastCard";
import type { Podcast } from "../pages/media.astro";

export default function Podcasts({
  podcasts,
}: {
  podcasts: Entry<Podcast>[];
}) {
  return (
    <div>
      <FeaturedVideo details={podcasts[0]} />
      <div className="grid grid-cols-3 mt-8 gap-8">
        {
          podcasts.slice(1, podcasts.length).map((podcast) => (
            <PodcastCard key={podcast.fields.title.toString()} details={podcast} />
          ))
        }
      </div>
    </div>
  );
}
