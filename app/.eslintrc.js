module.exports = {
  env: {
      node: true
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'airbnb-base'],
  rules: {
    "import/extensions": [
      "error", "always", {ignorePackages: true}
    ],
    "no-constant-condition": "error",
  }
};
