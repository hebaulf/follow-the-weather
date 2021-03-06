require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAP_API: "pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
  },
  images: {
    domains: [
      'res.cloudinary.com'
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
