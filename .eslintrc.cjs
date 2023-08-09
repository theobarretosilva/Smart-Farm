module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // permite importar devDependencies, coloquei essa regra pois a lib do mapa estava gerando erro
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'no-console': 0, // desabilita o erro de console.log, remover para produção
  },
}
