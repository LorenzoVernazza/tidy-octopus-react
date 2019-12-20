module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 10,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react'
    ],
    env: {
        es6: true,
        browser: true,
        node: true
    }
}