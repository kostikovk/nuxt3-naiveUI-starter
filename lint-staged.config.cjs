module.exports = {
  '*.{ts,js,vue}': ['npm run fix:eslint', 'npm run fix:prettier'],
  '*.scss': ['npm run fix:stylelint']
}
