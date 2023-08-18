module.exports = {
  client: {
    service: {
      name: "CBS-API",
      url: "https://cbs-api-test.allegrogroup.com/graphql",
    },
    includes: ["./src/**/*.ts", "./src/**/*.tsx"],
    excludes: ["**/__tests__/**", "**/__stories__/**"],
  },
};
