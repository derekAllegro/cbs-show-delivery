import { AppManifest } from "@cbs-ui/types";
import { dependencies } from "./package.json";

const slug = "cbs-show-delivery";

export const manifest: AppManifest = {
  slug,
  version: process.env.CURRENT_TAG || "local",
  basePath: `/cbs/${slug}/`,
  fullName: "Show Delivery",
  shortName: "CSD",
  frameworkVersion: dependencies["@cbs-ui/framework"],
  serviceName: "cbs-show-delivery",
  slackChannels: ["#help-zupa"],
  teamNames: ["ZUPA, OpenNet Team MajsTRy"],
  suggestedGroupsAD: [],
};
