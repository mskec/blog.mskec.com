module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  }
}
