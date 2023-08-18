const path = require("path");
const { es6modules } = require("./es6modules");

require("@babel/register")({
  only: [
    ...es6modules.map((moduleName) => RegExp(`node_modules\/${moduleName}`)),
    "manifest.ts",
  ],
  extensions: [".jsx", ".js", ".ts", ".tsx"],
});

const { getWebpackConfigs } = require("@cbs-ui/framework");
const { manifest } = require("./manifest");

module.exports = getWebpackConfigs(manifest, path.resolve("."));
