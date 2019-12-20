# 🐙 Tidy Octopus - React 🐙
Essential ESLint configuration, extended for React.

This configuration requires __*babel-elsint*__ parser and __*eslint-plugin-react*__ plugin.
___
This configuration is divided into categories that can be imported separatedly:
- Core ('tidy-octopus-react/categories/core'): Containes all the configurations for *pugins*, *parser* and *env*.
- Rules ('tidy-octopus-react/categories/rules'): Containes all the configuration rules. Rules are further subdivided into:
  - Essentials ('tidy-octopus-react/categories/rules/essentials'): Essential rules.
  - React ('tidy-octopus-react/categories/rules/react'): React generic rules. 
  - Lifecycle ('tidy-octopus-react/categories/rules/lifecycle'): React lifecycle rules.
  - Style ('tidy-octopus-react/categories/rules/style'): Stylistic rules.

___
There is also a preset available: 
- React Only ('tidy-octopus-react/presets/react-only'): Does not extend __*tidy-octopus*__ configuration.
  
____
Rules:

| Rule | Category | Level | Description |
|------|:-----:|:-----:|:------------|
| [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md) | essentials | *error* | Prevent `React` to be incorrectly marked as unused |
| [react/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md) | essentials | *error* | Prevent variables used in JSX to be incorrectly marked as unused |
| [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) | essentials | *error* |  Prevent missing `React` when using JSX |
| [react/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md) | essentials | *error* |  Disallow undeclared variables in JSX |
| ... | ... | ... | ...