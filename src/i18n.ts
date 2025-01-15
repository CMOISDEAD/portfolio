import i18next from "i18next";

import global_es from "@/locales/es/global.json";
import home_es from "@/locales/es/home.json";
import contact_es from "@/locales/es/contact.json";
import projects_es from "@/locales/es/projects.json";
import about_es from "@/locales/es/about.json";
import work_es from "@/locales/es/work.json";

import global_en from "@/locales/en/global.json";
import home_en from "@/locales/en/home.json";
import contact_en from "@/locales/en/contact.json";
import projects_en from "@/locales/en/projects.json";
import about_en from "@/locales/en/about.json";
import work_en from "@/locales/en/work.json";

import global_de from "@/locales/de/global.json";
import home_de from "@/locales/de/home.json";
import contact_de from "@/locales/de/contact.json";
import projects_de from "@/locales/de/projects.json";
import about_de from "@/locales/de/about.json";
import work_de from "@/locales/de/work.json";

i18next.init({
  lng: navigator.language || "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      global: global_es,
      home: home_es,
      contact: contact_es,
      projects: projects_es,
      about: about_es,
      works: work_es,
    },
    en: {
      global: global_en,
      home: home_en,
      contact: contact_en,
      projects: projects_en,
      about: about_en,
      works: work_en,
    },
    de: {
      global: global_de,
      home: home_de,
      contact: contact_de,
      projects: projects_de,
      about: about_de,
      works: work_de,
    },
  },
});

export default i18next;
