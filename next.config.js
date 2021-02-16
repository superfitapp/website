const path = require("path");
module.exports = {
  async rewrites() {
    return [
      {
        source: '/s/:path*',
        destination: `${process.env.NEXT_PUBLIC_ONSUPERFIT_BASE_URL}/s/:path*`
      },
    ]
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
  images: {
    domains: ["blog.superfitapp.com", "images.unsplash.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config, { isServer }) {
  // Fixes npm packages that depend on `fs` module
  if (!isServer) {
    config.node = {
      fs: 'empty'
    }
  }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
