import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local placeholder art (see public/images/README.md) is served as SVG
    // until real photography is dropped in. Safe for our own trusted assets.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
