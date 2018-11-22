module.exports = {
    parser: 'babel-eslint',
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
        "padded-blocks": 0,
        "no-constant-condition": "error",
    }
};
