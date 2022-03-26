module.exports = 

{

  mode:'jit',

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: 'class', // or 'media' or 'class'

  theme: 

  {

    fontFamily: {
     
      'montserrat': ['Montserrat']

     },
    extend:

     {

        colors:

        {
          primary: "#0CA7DC",

          secondary:"#F4F0F0",

          tColor:"#424242",

          terciary:"#1566A4",

          darklight:"#414040",
        
          darker: "#242323",
        },

        backgroundImage: {
 
          'outlook': "url('/src/images/outlook.png')",
        
          'loading': "url('/src/images/loading.gif')",

          'coordenador': "url('/src/images/coordenador.jpg')",

          'progress': "url('/src/images/progress.png')",

          'logoISMAI': "url('/src/images/logo_sidebar.png')",

          'loginImg': "url('https://cdn.discordapp.com/attachments/898582977884332042/913103055950610472/imagemismai.png')",

          'loginBackground': "url('https://www.lucios.pt/wp-content/uploads/2018/04/Campo_jogos_pista_atletismo_Ismai-2.jpg')",

         }

     },

  },

  variants: 

  {

    extend: {},

  },

  plugins: [],

}
