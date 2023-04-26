import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: [
    { leftth: 'w-54px bg-#ddd font-exo text-13px font-light align-top pt-2 pr-1 text-right' },
    { break: 'bg-#ddd font-exo text-13px font-light pt-2 align-top' },
    { twenty: 'h-40px' },
    { fourty: 'h-120px' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        exo: 'Exo:300,600',
      },
    }),
  ],
  theme: {
    colors: {
      app: {
        blue: '#282b57',
        red: '#cd1719',
        intro: '#fb7185',
        presentation: '#282b57',
        workshop: '#0284c7',
        panel: '#16a34a',
      },
    },
  },
})
