const fs = require("fs");

// Read the JSON coverage report file
const coverageReport = JSON.parse(
  fs.readFileSync("coverage/coverage-summary.json", "utf8")
);

const totalSum = ["lines", "statements", "functions", "branches"]
  .map((i) => coverageReport.total[i].pct)
  .reduce((a, b) => a + b, 0);
const avgCoverage = totalSum / 4;
console.debug();
console.debug("========= Total Coverage ============");
console.debug(`Total Coverage: ${avgCoverage.toFixed(2)} %`);
