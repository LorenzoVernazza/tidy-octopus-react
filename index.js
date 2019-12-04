module.exports = {
	"parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 10,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": "tidy-octopus",
    "rules": {
        "jsx-quotes": [2, "prefer-single"],
		"react/react-in-jsx-scope": 2,
		"react/jsx-uses-react": 2,   
		"react/jsx-uses-vars": 2,
		"react/default-props-match-prop-types": [1, { "allowRequiredDefaults": true }], //maybe
		"react/display-name": [2, { "ignoreTranspilerName": false }],
		// "react/no-array-index-key": 1,
		"react/no-children-prop": 2,
		"react/no-danger": 1,
		"react/no-danger-with-children": 2,
		// "react/no-deprecated": 1,
		"react/no-did-update-set-state": 1,
		"react/no-did-mount-set-state": 1,
		"react/no-direct-mutation-state": 2,
		"react/no-redundant-should-component-update": 1,
		"react/no-typos": 1,
		"react/no-this-in-sfc": 2,
		"react/no-unknown-property": 1,
		// "react/no-unsafe": 2,
		"react/no-unused-prop-types": 1,
		"react/no-unused-state": 1,
		"react/no-will-update-set-state": 2,
		"react/prop-types": 1, // to review
		"react/require-render-return": 2,
		"react/self-closing-comp": 1,
		"react/state-in-constructor": [1, "always"],
		"react/style-prop-object": 1,
		"react/void-dom-elements-no-children": 2,
		"react/jsx-boolean-value": 1,
		"react/jsx-closing-bracket-location": [1, "line-aligned"],
		"react/jsx-curly-newline": [1, { "multiline": "consistent", "singleline": "consistent" }],
		"react/jsx-curly-spacing": [1, { "when": "never", "allowMultiline": true, "children": true }],
		"react/jsx-equals-spacing": [1, "never"],
		"react/jsx-first-prop-new-line": [1, "multiline-multiprop"], // Missing?
		// "react/jsx-indent": [1, "tab", { "indentLogicalExpressions": true, "checkAttributes": true }]
		"react/jsx-key": 1,
		"react/jsx-max-props-per-line": [1, { "maximum": 1, "when": "multiline" }],
		"react/jsx-pascal-case": 1,
		"react/jsx-no-duplicate-props": 1,
		"react/jsx-no-useless-fragment": 1,
		"react/jsx-no-undef": 2,
		"react/jsx-tag-spacing": [1, {
			"closingSlash": "never",
			"beforeSelfClosing": "always",
			"afterOpening": "never",
			"beforeClosing": "allow"
		}]
    }
};
