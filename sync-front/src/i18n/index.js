import kr from './message/kr'
import en from './message/en'
import { createI18n } from 'vue-i18n'



const messages = {
    en: en,
    kr:kr, 
  }


const i18n = new createI18n({
    locale: 'kr', // set locale
    messages, // set locale messages
  })



export default i18n;