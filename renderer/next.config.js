const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const withTM = require("next-transpile-modules")([
  // `monaco-editor` isn't published to npm correctly: it includes both CSS
  // imports and non-Node friendly syntax, so it needs to be compiled.
  "monaco-editor",
  "@plasma/auth",
  "@plasma/api",
  "@plasma/db",
]);

module.exports = withTM({
  outputFileTracing: false,
  images: {
    loader: "akamai",
    path: "",
  },
  /** Enables hot reloading for local packages without a build step */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    const rule = config.module.rules
      .find((rule) => rule.oneOf)
      .oneOf.find(
        (r) =>
          // Find the global CSS loader
          r.issuer && r.issuer.include && r.issuer.include.includes("_app"),
      );
    if (rule) {
      rule.issuer.include = [
        rule.issuer.include,
        // Allow `monaco-editor` to import global CSS:
        /[\\/]node_modules[\\/]monaco-editor[\\/]/,
      ];
    }

    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: [
          "json",
          "markdown",
          "css",
          "typescript",
          "javascript",
          "html",
          "graphql",
          "python",
          "scss",
          "yaml",
        ],
        filename: "static/[name].worker.js",
      }),
    );
    return config;
  },
});
