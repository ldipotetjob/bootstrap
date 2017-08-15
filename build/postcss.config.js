'use strict'

module.exports = (ctx) => ({
  map: ctx.file.dirname.startsWith('docs') ? false : {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {},
    'css-mqpacker': ctx.file.basename.endsWith('.min.css') ? {} : false
  }
})
