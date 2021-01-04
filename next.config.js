const path = require('path');

module.exports = {
  images: {
    domains: ["blog.superfitapp.com", "images.unsplash.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
