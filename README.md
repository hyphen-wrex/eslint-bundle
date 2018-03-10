# Eslint bundle

The shortcut for installing tons of packages.
Instead of:
```bash
npm i -D eslint@3 eslint-config-airbnb@15 eslint-plugin-jsx-a11y@5 eslint-plugin-react@7 babel-eslint@7 eslint-plugin-import@2
```
Just:
```bash
npm i eslint-bundle -D
```


## Installation

Install package:

```bash
npm i eslint-bundle -D
```

Create file `.eslintrc.json` and paste the following configuration (my version) there:

```json
{
  "extends": "airbnb",
  "plugins": [
    "import"
  ],
  "rules": {
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline"
      }
    ],
    "react/jsx-wrap-multilines": "off",
    "global-require": "warn",
    "import/no-dynamic-require": "warn",
    "react/prop-types": "warn"
  }
}
```
Modify the config however you want.
