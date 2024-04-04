const config = {
  verbose: true,
  coverageReporters: ["text-summary", "text", "lcov"],

  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
};

module.exports = config;
