const config = {
  root: true,
  "env": {
    "es6": true
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  rules: {
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',

    'no-else-return': 'error',
    'max-len': ['error', {
      code: 120
    }],
  },
  parser: "@babel/eslint-parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
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
        "react/prop-types": ["warn"],
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