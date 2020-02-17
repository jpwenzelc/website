import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: 'Poppins',
      styles: [
        '700',
      ],
    },
    {
      name: 'PT Serif',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.66,
  headerFontFamily: ["Poppins", 'sans-serif'],
  bodyFontFamily: ["PT Serif", "serif"]
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
