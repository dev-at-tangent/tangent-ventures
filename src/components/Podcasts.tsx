import FeaturedVideo from "./FeaturedPodcastCard";
import PodcastCard from "./PodcastCard";

export default function Podcasts({
  podcasts,
}: {
  podcasts: { type: string }[];
}) {
  return (
    <div>
      <FeaturedVideo />
      <div className="grid grid-cols-3 mt-8 gap-8">
        {
          podcasts.map((podcast, index) => (
            <PodcastCard key={index} type={podcast.type} />
          ))
        }
      </div>
    </div>
  );
}
