module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["raz-back-end.herokuapp.com", "localhost:3000"],
  },
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
    ];
  },
};
