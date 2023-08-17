import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "./locales/fr/translation.json";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import de from "./locales/de/translation.json";

const resources = {
    fr: { translation: fr },
    en: { translation: en },
    es: { translation: es },
    de: { translation: de },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,

        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
});
