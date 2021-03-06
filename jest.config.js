module.exports = {
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  testEnvironment: "jsdom",
  collectCoverageFrom: ["<rootDir>/src/components/**/*.(ts|tsx)"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/tests/empty-module.js",
    "\\.png$": "<rootDir>/src/tests/empty-module.js",
  },
};
