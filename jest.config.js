const config = {
  verbose: true,
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  collectCoverage: true,
};

module.exports = config;
