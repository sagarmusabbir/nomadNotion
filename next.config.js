// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com", "unsplash.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
};
