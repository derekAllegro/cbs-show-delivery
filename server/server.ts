import path from "path";

import { createExpressApp } from "@cbs-ui/framework/lib/server";

import { manifest } from "../manifest";
import packageInfo from "../package.json";

const staticPath = path.resolve(path.join(__dirname, "public"));

const server = createExpressApp({
  staticPath,
  manifest,
  packageInfo,
});

server.listen();
