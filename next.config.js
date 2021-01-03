module.exports = {
  images: {
    domains: ["blog.superfitapp.com", "images.unsplash.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
