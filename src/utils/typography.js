import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Karla",
      styles: ["400","700"],
    },
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.66,
  headerFontFamily: ["Karla", "sans-serif"],
  bodyFontFamily: ["karla", "sans-serif"],
  'h1,h2': {
    fontColor: '#cc3311'
  }
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
