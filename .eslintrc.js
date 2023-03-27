module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "airbnb-base",
    "plugin:vue/vue3-strongly-recommended",
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "src"]],
      },
    },
  },
};
