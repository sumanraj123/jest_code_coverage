const config = {
  verbose: true,
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  collectCoverage: true,
};

module.exports = config;
