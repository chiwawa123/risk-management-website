module.exports = {
  // ...other config
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 0.8s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  // ...other config
};
