module.exports = {
    parser: 'babel-eslint',
    env: {
        node: true,
        'jest/globals': true
    },
    extends: [
        'airbnb-base',
        'plugin:jest/recommended',        
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module"
    },
    rules: {
        "padded-blocks": 0,
        "no-constant-condition": "error",
    },
    plugins: [
        'import',
        'jest',
      ]
};
