/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs-foodapp-web-storage.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
