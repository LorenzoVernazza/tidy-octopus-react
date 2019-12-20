module.exports = {
    rules: {
        "jsx-quotes": [2, "prefer-single"],
        "react/jsx-tag-spacing": [1, {
            "closingSlash": "never",
            "beforeSelfClosing": "never",
            "afterOpening": "never",
            "beforeClosing": "never"
        }],
        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": [1, "line-aligned"],
        "react/jsx-curly-newline": [1, { "multiline": "consistent", "singleline": "consistent" }],
        "react/jsx-curly-spacing": [1, { "when": "never", "allowMultiline": true, "children": true }],
        "react/jsx-equals-spacing": [1, "never"],
        "react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
        "react/jsx-max-props-per-line": [1, { "maximum": 1, "when": "multiline" }],
        "react/jsx-pascal-case": 1
    }
};