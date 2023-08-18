const { es6modules } = require("./es6modules");

const ignorePaths = ["node_modules", "dist"];

module.exports = {
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "@cbs-ui/jest-utils/lib/setupJest",
    "jest-expect-message",
    "./setupJest.ts"
  ],
  testResultsProcessor: "./node_modules/jest-junit",
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
    "^.+\\.(js|ts|tsx)$": ["babel-jest"],
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
  reporters: ["default"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: ["./src/**/*.{ts,tsx}"],
  watchPathIgnorePatterns: ["node_modules"],
  coveragePathIgnorePatterns: [...ignorePaths, "__tests__", "__generated__", "./src/index.tsx"],
  testPathIgnorePatterns: ignorePaths,
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules"],
  transformIgnorePatterns: es6modules.map(
    (moduleName) => `/node_modules/(?!${moduleName}).+\\.js$`
  ),
  testTimeout: 10000,
};
