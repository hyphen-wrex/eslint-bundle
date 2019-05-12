// const path = require("path");

module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["import", "prettier"],
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: path.join(__dirname, 'webpack.development.config.js')
    //   }
    // },
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-wrap-multilines": "off",
    "react/sort-comp": [
      1,
      {
        order: [
          "static-methods",
          "lifecycle",
          "/^on.+$/",
          "/^handle.+$/",
          "everything-else",
          "render",
        ],
      },
    ],
    "global-require": "warn",
    "import/no-dynamic-require": "warn",
    "react/prop-types": "warn",
    "react/no-unescaped-entities": "off",
    "arrow-body-style": [
      "off",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "no-confusing-arrow": "warn",
    "no-return-assign": ["error", "except-parens"],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "no-plusplus": "off",
  },
  env: {
    browser: true,
  },
};
