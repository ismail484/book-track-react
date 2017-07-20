module.exports = {
    "extends": "airbnb",
     "parser": "babel-eslint",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "quotes": 0,
        "semi":0,
        "linebreak-style": 0,
        "object-curly-spacing":0,
        "comma-dangle":0,
        "import/first":0,
        "padded-blocks":0,
        "react/jsx-filename-extension":0,
        "react/prop-types":0,
        "import/no-named-as-default-member":0,
        "import/no-named-as-default":0,
        "react/no-array-index-key":0,
        "strict": 0,
        "no-warning-comments": "off",
      "no-console": "off",
      "jsx-a11y/img-has-alt": 1,
      "jsx-a11y/label-uses-for": "off",
      "jsx-a11y/mouse-events-map-to-key-events": "off",
      "jsx-a11y/no-hash-href": "off",
      "jsx-a11y/redundant-alt": "off",
      "jsx-a11y/valid-aria-role": "off",
      "jsx-a11y/anchor-has-content": "off",
       "react/prop-types":"off",
       "react/sort-comp":0,
       "consistent-return":0,
       "no-param-reassign":0,
       "no-unused-vars":0,
       "react/forbid-prop-types":0,
       "react/no-unused-prop-types":0,
        // override default options for rules from base configurations
        "no-cond-assign": ["error", "always"],


        // disable rules from base configurations
        "no-console": "off",
    }
};