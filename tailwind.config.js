/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : {
        '50vh-screen' : '50vh'
      },
      backgroundImage : {
        'hero' : "url('https://th.bing.com/th/id/OIG4..pQ_frM4AwSbwqacR1RD?pid=ImgGn')"
      },
      fontFamily : {
        'good' : ['Carter One']
      }
    },
  },
  plugins: [],
}

