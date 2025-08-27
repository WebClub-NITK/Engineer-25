module.exports = {
  theme: {
    extend: {
  keyframes: {
    'gradient-smooth': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
  },
  animation: {
    'gradient-smooth': 'gradient-smooth 10s ease-in-out infinite',
    'gradient-smooth-fast': 'gradient-smooth 5s ease-in-out infinite',
  },

    },
  },
}
