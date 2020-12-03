import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ENapps from './locales/en/apps.json';
import ENeducation from './locales/en/education.json';
import ENentrepreneurships from './locales/en/entrepreneurships.json';
import ENexperience from './locales/en/experience.json';
import ENhome from './locales/en/home.json';
import ENprojects from './locales/en/projects.json';
import ENrepositories from './locales/en/repositories.json';
import ENstory from './locales/en/story.json';
import ESapps from './locales/es/apps.json';
import ESeducation from './locales/es/education.json';
import ESentrepreneurships from './locales/es/entrepreneurships.json';
import ESexperience from './locales/es/experience.json';
import EShome from './locales/es/home.json';
import ESprojects from './locales/es/projects.json';
import ESrepositories from './locales/es/repositories.json';
import ESstory from './locales/es/story.json';

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const options = {
  // order and from where user language should be detected
  order: ['path', 'querystring', 'cookie', 'localStorage', 'sessionStorage'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: '/', sameSite: 'strict' },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    whitelist: ['es', 'en'],
    fallbackLng: 'en',
    debug: true,

    detection: options,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        apps: ENapps,
        education: ENeducation,
        entrepreneurships: ENentrepreneurships,
        experience: ENexperience,
        home: ENhome,
        projects: ENprojects,
        repositories: ENrepositories,
        story: ENstory
      },
      es: {
        apps: ESapps,
        education: ESeducation,
        entrepreneurships: ESentrepreneurships,
        experience: ESexperience,
        home: EShome,
        projects: ESprojects,
        repositories: ESrepositories,
        story: ESstory
      }
    },
  });

export default i18n;
