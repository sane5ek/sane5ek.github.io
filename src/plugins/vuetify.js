import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#4E342E'
      },
      dark: {
        primary: '#00796B'
      }
    }
  },
  options: {
    customProperties: true
  },
  icons: {
    iconfont: 'mdi'
  }
})
