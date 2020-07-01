
import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import languageEN from './Locate/en/en_translate.json'
import languageJP from './Locate/jp/jp_translate.json'
import languageFR from './Locate/fr/fr_translate.json'
import languageTamil from './Locate/tamil/tamil_translate.json'
import languageRu from './Locate/ru/ru_translate.json'
import languageHindi from './Locate/hindi/hindi_translate.json'
import languageKannada from './Locate/kannada/kannada_translate.json'
i18n
.use(XHR)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: languageEN,
        jp: languageJP,
        fr: languageFR,
        tamil: languageTamil,
        ru: languageRu,
        hindi:languageHindi,
        kannada:languageKannada,
    },
    /* default language when load the website in browser */
    lng: "en",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "en",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
})

export default i18n;