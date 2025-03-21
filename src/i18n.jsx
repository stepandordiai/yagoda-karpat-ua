import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ua from "./translations/ua/translation.json";
import en from "./translations/en/translation.json";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            ua: {
                translation: ua,
            },
            en: {
                translation: en,
            },
        },

        fallbackLng: "ua",

        detection: {
            order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],

            caches: ["localStorage", "cookie"],
        },

        interpolation: {
            escapeValue: false,
        },
    });
