const singleSpaApplicationPlugin = require("craco-plugin-single-spa-application");

module.exports = {
  plugins: [
    {
      plugin: singleSpaApplicationPlugin,
      options: {
        orgName: "company",
        projectName: "app2",
        entry: "src/index-single-spa.tsx", //defaults to src/index.js,
        orgPackagesAsExternal: false, // defaults to false. marks packages that has @company prefix as external so they are not included in the bundle
        reactPackagesAsExternal: false, // defaults to true. marks react and react-dom as external so they are not included in the bundle
        externals: ["react-router", "react-router-dom"], // defaults to []. marks the specified modules as external so they are not included in the bundle
      },
    },
  ],
};
