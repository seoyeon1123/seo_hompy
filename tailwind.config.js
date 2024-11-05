/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 사용자의 파일 경로에 맞게 수정
  ],
  theme: {
    extend: {
      fontFamily: {
        establish: ['establishRetrosansOTF', 'sans-serif'],
        ttbookend: ['TTBookendBatangR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
