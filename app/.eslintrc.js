module.exports = {
  env: {
      node: true
  },
  extends: [
      "eslint:recommended"
  ],
  parserOptions: {
      ecmaVersion: 8
  },
  rules: {
    "import/extensions": [
      "error", "always", {ignorePackages: true}
    ],
    "padded-blocks": 0,
    "no-constant-condition": "error",
  }
};
