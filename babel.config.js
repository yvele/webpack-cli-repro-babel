const presetEnv = require("@babel/preset-env");

// Note that this Babel config is only aimed to be used in a Node.js execution context
// Webpack has its own Babel configuration (targeting browsers)
module.exports = function (api) {
  api.cache(true);
  return {
    browserslistConfigFile : false,
    targets : { node: "current" },
    presets : [presetEnv]
  };
};
