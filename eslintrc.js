module.exports = {
  "extends": [
    "standard",
    "plugin:jest/recommended"
  ],
  "plugins": [
    "standard",
    "promise",
    "jest"
  ],
  "rules": {
    "no-var": "error",
    "max-lines-per-function": ["error", 100]
  },
  "env": {
    "jest/globals": true
  }
};
