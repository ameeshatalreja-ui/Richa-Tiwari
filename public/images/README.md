# Image assets

All files below are placeholder SVGs so the site renders correctly out of the
box. Replace each with a real photo of the same filename (JPG/PNG/WebP are
fine — update the extension in the referencing component if it changes) and
next/image will pick it up automatically.

| File | Used in | Notes |
| --- | --- | --- |
| `hero-portrait.svg` | `components/Hero.tsx` | Full-viewport-height portrait. Use a high-res vertical/portrait-oriented shot with room to breathe at top and bottom — it fills the entire right half of the hero on desktop. |
| `founder-portrait.svg` | `components/Founder.tsx` | Founder section photo, roughly 4:5. |
| `photo-break.svg` | `components/PhotoBreak.tsx` | Full-bleed landscape image behind the pull-quote. Needs a dark region (top or center) for the overlaid quote text to stay legible — a dark gradient overlay is already applied in code, but a photo with natural depth in the mid-tones will look best. |
| `podcast/featured.svg`, `podcast/episode-1.svg`, `episode-2.svg`, `episode-3.svg` | `components/PodcastGrid.tsx` | **TODO:** real YouTube thumbnails/URLs were not provided. Swap the `thumbnail`/`href` fields in `data/podcast.ts` and the featured image path once real episode links exist — do not fabricate video sources. |

Two real photos of Richa were shared in the original request but were not
retrievable as files in this environment — save them here as
`hero-portrait.jpg` (or `.png`/`.webp`) and `founder-portrait.jpg`, then
update the `src` in `Hero.tsx` / `Founder.tsx` to match.
