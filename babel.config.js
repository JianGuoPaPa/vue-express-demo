module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'hl-ui',
      libraryDirectory: 'es',
      style: true
    }, 'hl-ui']
  ]
}
