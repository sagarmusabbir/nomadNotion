import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Musabbirs Terminal",
    short_name: "MS",
    description:
      "This is Musabbir sagar, A web development polymath and digital nomad who loves to create stunning websites with cutting-edge technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#282c35",
    theme_color: "#3ACD9A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
       {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ],
  };
}
