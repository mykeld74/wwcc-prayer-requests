const postcssPresetEnv = require("postcss-preset-env");

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "custom-media-queries": true,
        "media-query-ranges": true,
        "nesting-rules": false,
      },
    }),
    require("postcss-nested"),
  ],
};

module.exports = config;
