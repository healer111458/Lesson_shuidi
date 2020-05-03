module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true,
          "modules": true,
      }
  },  
  'rules': {
    'react/prefer-es6-class': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/wrap-multilines': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'global-require': 0,
  },
};
