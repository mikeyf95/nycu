import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "News You Can Use",
    short_name: "NYCU",
    description:
      "Fortnightly intelligence on legal AI - the market, the research, and the practitioners.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#f6f4ef",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
