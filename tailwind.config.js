module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        establish: ['establishRetrosansOTF', 'sans-serif'],
        ttbookend: ['TTBookendBatangR', 'sans-serif'],
        GowunDodum_Regular: ['GowunDodum-Regular'],
        NoonnuBasicGothicRegular: ['NoonnuBasicGothicRegular'],
      },
      boxShadow: {
        text: '0 0 10px rgba(0, 0, 0, 0.7)',
      },
    },

    screens: {
      sm: { min: '350px', max: '930px' },
      md: { min: '930px', max: '1050px' },
      lg: { min: '1050px' },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // 플러그인 추가
  ],
};
