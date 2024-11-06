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
      textShadow: {
        xs: '0 1px 2px var(--tw-shadow-color)',
        sm: '0 2px 4px var(--tw-shadow-color)',
        base: '0 4px 8px var(--tw-shadow-color)',
        md: '0 8px 16px var(--tw-shadow-color)',
        lg: '0 12px 24px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // 플러그인 추가
  ],
};
