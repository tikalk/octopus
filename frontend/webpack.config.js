
module.exports = env => {
  const base = require('./webpack/webpack.base')(env);
  const { tree, plugins } = require(`./webpack/webpack.${env}`);
  return { ...base, ...tree, plugins: [...plugins, ...base.plugins] };
};