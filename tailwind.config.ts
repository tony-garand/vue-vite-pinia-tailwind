const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    fontFamily: {
      'sans': 'Plus Jakarta Sans, Arial, sans-serif',
    },
    extend: {
      colors: {
        primary: '#4139FF',
        primaryHover: '#2D27BE',
        label: '#576F92',
        lightGreen: '#DAFFCC',
        lightPurple: '#E1E0FF',
        lightYellow: '#F4FFDE',
        lightRed: '#FFC9BA',
        lightGrey: '#F5F5F5',

      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
  ],
}
