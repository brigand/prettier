run_spec(__dirname, ["flow", "babylon", "typescript"], {
  singleQuote: false,
  jsxSingleQuote: false
});
run_spec(__dirname, ["flow", "babylon", "typescript"], {
  singleQuote: false,
  jsxSingleQuote: true
});
run_spec(__dirname, ["flow", "babylon", "typescript"], {
  singleQuote: true,
  jsxSingleQuote: false
});
run_spec(__dirname, ["flow", "babylon", "typescript"], {
  singleQuote: true,
  jsxSingleQuote: true
});
