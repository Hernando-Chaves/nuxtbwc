module.exports = 
{
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: 
  {
    extend:
    {
      colors: 
      {
          primary : 
          {
            '50': '#fff3f7', 
            '100': '#ffe6f0', 
            '200': '#ffc1d9', 
            '300': '#ff9bc1', 
            '400': '#ff5093', 
            '500': '#ff0565', 
            '600': '#e6055b', 
            '700': '#bf044c', 
            '800': '#99033d', 
            '900': '#7d0231'
          },
          secondary: 
          {
            '50': '#f2f3f5', 
            '100': '#e6e7eb', 
            '200': '#bfc2cd', 
            '300': '#999eaf', 
            '400': '#4d5572', 
            '500': '#000c36', 
            '600': '#000b31', 
            '700': '#000929', 
            '800': '#000720', 
            '900': '#00061a'
          }
      },
      fontSize: 
      {
        '6xl' : ['3.5rem',{lineHeight: '55px'}]
      },
    },
    container: 
    {
      padding: 
      {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    }


  },
  variants: 
  {
    extend: {},
  },
  plugins: [],
}
