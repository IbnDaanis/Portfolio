/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-sass',
  ],
  routes: [],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {},
  devOptions: {
    port: 3000,
    open: 'none',
  },
  buildOptions: {
    baseUrl: './',
  },
}
