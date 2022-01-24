module.exports = {
  env: {
    BASE_API_URL: 'https://mvst-code-challenge.herokuapp.com',
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/coffees',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['localhost'],
  },
};
