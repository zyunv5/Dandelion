module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "mcenter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    proxy: true,
    prefix: "/api",
    credentials: true,
  },
  proxy: {
    "/api": {
      target: "http://localhost:4000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      }
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  plugins: [
    {
      src: "~plugins/ElementUI",
      ssr: true
    }
  ],
  css: ["element-ui/lib/theme-chalk/index.css"],
  vendor: ["element-ui", "axios"], //防止element-ui被打包多次
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
