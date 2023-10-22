/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org", 
      "static.xx.fbcdn.net", 
      "scontent.fyzd1-3.fna.fbcdn.net",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig
