import { AppManifest } from "@cbs-ui/types";
import { dependencies } from "./package.json";

const slug = "cbs-show-delivery";

export const manifest: AppManifest = {
  slug,
  version: process.env.CURRENT_TAG || "local",
  basePath: `/cbs/${slug}/`,
  fullName: "Cbs Show Delivery",
  shortName: "CSD",
  frameworkVersion: dependencies["@cbs-ui/framework"],
  serviceName: "cbs-show-delivery",
  slackChannels: ["UZUPELNIJ"],
  teamNames: ["OpenNet Team MajsTRy"],
  suggestedGroupsAD: [],
};
