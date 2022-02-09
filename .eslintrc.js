const config = {
  root: true,
  extends: [
    'eslint:recommended'
  ],
  parser: "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"

  },
  "env": {
    "es6": true
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "@typescript-eslint/parser",
      "plugins": [
        "@typescript-eslint",
        "react-hooks"
      ],
      "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off"
      },
      "settings": {
        "react": {
          "pragma": "React",
          "version": "detect"
        }
      }

    }
  ]
};

export default config