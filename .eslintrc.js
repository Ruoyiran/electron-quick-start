const { resolve } = require;

const OFF = 0;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "plugin:eslint-comments/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: {
        directory: [resolve("./tsconfig.json")]
      }
    }
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "eslint-comments/disable-enable-pair": [ERROR, { allowWholeFile: true }],

    "import/extensions": [
      ERROR,
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        json: "never",
        js: "never"
      }
    ],
    "import/no-unresolved": OFF,
    "import/order": OFF,
    "import/no-self-import": OFF,
    "import/no-extraneous-dependencies": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/no-explicit-any": OFF,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "@typescript-eslint/no-var-requires": OFF,
    "@typescript-eslint/no-useless-constructor": ERROR, 
    "@typescript-eslint/no-unused-vars": OFF,
    "react/jsx-filename-extension": [ERROR, { extensions: [".tsx"] }],
    "react/require-default-props": OFF,
    "react/button-has-type": OFF,
    "func-names": OFF,
    "lines-between-class-members": OFF,
    "max-classes-per-file": OFF,
    "no-console": OFF,
    "no-empty": OFF,
    "no-param-reassign": OFF,
    "no-plusplus": OFF,
    "no-underscore-dangle": OFF,
    "no-unused-expressions": OFF,
    "no-useless-constructor": OFF,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.d.ts"],
      rules: {
        "import/no-duplicates": OFF
      }
    },
    {
      files: ["scripts/**/*.ts"],
      rules: {
        "import/no-extraneous-dependencies": OFF
      }
    }
  ]
};
