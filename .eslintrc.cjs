module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    "@typescript-eslint",
    "import",
    "promise",
    "prettier",
    "simple-import-sort",
  ],

  extends: [
    "@react-native/eslint-config",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
  ],

  rules: {
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "case",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "default",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "block-like",
      },
    ],
    "prefer-const": ["error"],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [["^\\u0000"], ["^react", "^[^.]"], ["^src/"], ["^\\."]],
      },
    ],

    "max-lines": ["error", 500],
    "no-console": "error",
    "object-shorthand": "error",
    "no-unneeded-ternary": "error",
    "no-nested-ternary": "error",
    "newline-before-return": "warn",
    semi: ["error", "never"],

    // prettier
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        trailingComma: "all",
        semi: false,
        arrowParens: "always",
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
      },
    ],

    "import/newline-after-import": "error",

    // react
    "react/sort-comp": "warn",
    "react/react-in-jsx-scope": "off",
    "react/no-unstable-nested-components": "off",
    "react/jsx-no-literals": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],
    "react/jsx-boolean-value": "error",
    "react/display-name": "error",
    "react/jsx-key": "error",

    // react-native
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "warn",
    "react-native/no-color-literals": "error",
    "react-native/no-single-element-style-arrays": "error",

    // promise
    "promise/prefer-await-to-then": "warn",
    "promise/prefer-await-to-callbacks": "warn",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
  },
};
