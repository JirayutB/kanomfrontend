module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "http://10.4.56.44:5000",
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kanomfrontend/'
    : '/'
};
