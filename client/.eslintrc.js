const config = {
  root: true,
  env: {
    es6: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "path/to/folder",
        "project": "packages/*/tsconfig.json",
        "project": [
          "packages/module-a/tsconfig.json",
          "packages/module-b/tsconfig.json"
        ],
        "project": [
          "packages/*/tsconfig.json",
          "other-packages/*/tsconfig.json"
        ]
      }
    }
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['import'],
  rules: {
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    "import/no-unresolved": "error",
    'no-else-return': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react-hooks'],
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript'
      ],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': ['warn'],
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
    },
  ],
};

export default config;
