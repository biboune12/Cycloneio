module.exports = function(api) {

  api.cache(true)

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow'
  ]

  const plugins = [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-proposal-class-properties',
	'@babel/plugin-transform-classes',
	'transform-react-pug'
  ]

  const ignore = []

  return {
    presets,
    plugins,
    ignore
  }
}
