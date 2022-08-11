module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env'], // ES6 문법 트랜스파일
    plugins: ['@babel/plugin-transform-runtime'], // async-await 문법 트랜스파일
  };
};
