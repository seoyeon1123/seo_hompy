module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 사용자의 파일 경로에 맞게 수정
  ],
  theme: {
    extend: {
      fontFamily: {
        establish: ['establishRetrosansOTF', 'sans-serif'],
        ttbookend: ['TTBookendBatangR', 'sans-serif'],
        GowunDodum_Regular: ['GowunDodum-Regular'],
        NoonnuBasicGothicRegular: ['NoonnuBasicGothicRegular'],
      },
      boxShadow: {
        text: '0 0 10px rgba(0, 0, 0, 0.7)', // 텍스트에 그림자 효과
      },
    },

    screens: {
      sm: { min: '350px', max: '930px' },
      md: { min: '820px', max: '1023px' },
      lg: { min: '1080px' },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // 플러그인 추가
  ],
};
