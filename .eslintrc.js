module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    skipBlankLines: 'off',
    'no-console': 'off',
    'padded-blocks': 0,
    'no-trailing-spaces': 0,
    'no-unused-vars': 1,
    'react/prop-types': 'off',
    'react/self-closing-comp': 1,
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
