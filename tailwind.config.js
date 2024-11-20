module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['HangeulNuri-Bold', 'sans-serif'],
        noons: ['NoonnuBasicGothicRegular'],
      },
      boxShadow: {
        text: '0 0 10px rgba(0, 0, 0, 0.7)',
      },
    },

    screens: {
      sm: { max: '479px' },
      md: { min: '480px', max: '1050px' },
      lg: { min: '1050px' },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // 플러그인 추가
  ],
};
