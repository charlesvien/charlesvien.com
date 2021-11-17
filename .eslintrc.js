module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "jsx-a11y/click-events-have-key-events": "off",
    "react/function-component-definition": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "import/no-unresolved": "off",
    "no-param-reassign": "off",
  },
};
