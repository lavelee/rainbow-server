module.exports = {
  globals: {
      "ts-jest": {
          tsConfig: "tsconfig.json"
      }
  },
  moduleFileExtensions: ["ts", "js"],
  transform: { "^.+\\.ts$": "ts-jest" },
  testEnvironment: "node",
};
// https://jestjs.io/docs/en/configuration