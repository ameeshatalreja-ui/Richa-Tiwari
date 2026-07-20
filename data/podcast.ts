// TODO: Replace with real episode data (titles, thumbnails, video URLs) once
// available from the client. Thumbnails currently point at placeholder art in
// /public/images/podcast — swap for real YouTube thumbnail exports.
export type PodcastEpisode = {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    title: "Why strong performers stay stuck",
    description: "The positioning gap that keeps high performers off the promotion list.",
    thumbnail: "/images/podcast/episode-1.svg",
    href: "https://youtube.com/@realrichatiwari",
  },
  {
    title: "Executive presence isn't personality",
    description: "What actually reads as 'leadership' in the room that decides your next role.",
    thumbnail: "/images/podcast/episode-2.svg",
    href: "https://youtube.com/@realrichatiwari",
  },
  {
    title: "The inner work behind visibility",
    description: "Why skill gaps are rarely the real reason ambitious women get overlooked.",
    thumbnail: "/images/podcast/episode-3.svg",
    href: "https://youtube.com/@realrichatiwari",
  },
];

export const YOUTUBE_CHANNEL_URL = "https://youtube.com/@realrichatiwari";
