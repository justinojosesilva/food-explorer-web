export default {
  COLORS: {
    LIGHT_100: "hsla(0, 0%, 100%, 1)",
    LIGHT_200: "hsla(39,100%,97%,1)",
    LIGHT_300: "hsla(240,9%,89%,1)",
    LIGHT_400: "hsla(240,7%,78%,1)",
    LIGHT_500: "hsla(240,6%,51%,1)",
    LIGHT_600: "hsla(204,2%,47%,1)",
    LIGHT_700: "hsla(201,10%,34%,1)",

    DARK_100: "hsla(192,100%,1%,1)",
    DARK_200: "hsla(198,100%,2%,1)",
    DARK_300: "hsla(210,100%,1%,1)",
    DARK_400: "hsla(200,100%,3%,1)",
    DARK_500: "hsla(200,100%,4%,1)",
    DARK_600: "hsla(201,100%,5%,1)",
    DARK_700: "hsla(199,100%,5%,1)",
    DARK_800: "hsla(201,35%,8%,1)",
    DARK_900: "hsla(200,48%,10%,1)",
    DARK_1000: "hsla(201,22%,13%,1)",

    TOMATO_100: "hsla(353,95%,24%,1)",
    TOMATO_200: "hsla(354,100%,29%,1)",
    TOMATO_300: "hsla(355,67%,40%,1)",
    TOMATO_400: "hsla(355,38%,49%,1)",

    CARROT_100: "hsla(32,96%,64%,1)",

    MINT_100: "hsla(147,96%,42%,1)",

    CAKE_100: "hsla(195,91%,25%,1)",
    CAKE_200: "hsla(186,100%,75%,1)",

    GRADIENTS_100: "linear-gradient(270deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%)",
    GRADIENTS_110: "linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%)",
    GRADIENTS_200: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
  },

  getColor(color) {
    return this.COLORS[`${color}`]
  }
}