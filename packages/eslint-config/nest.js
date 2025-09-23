/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./base.js"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  env: {
    node: true,
    jest: true,
  },
};
