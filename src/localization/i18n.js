import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ENmain from '../locales/en/main.json'
import ENcookies from '../locales/en/cookies.json'
import ENdataSciencePackages from '../locales/en/dataSciencePackages.json'
import ENeducation from '../locales/en/education.json'
import ENentrepreneurships from '../locales/en/entrepreneurships.json'
import ENexperience from '../locales/en/experience.json'
import ENhome from '../locales/en/home.json'
import ENnotfound from '../locales/en/notfound.json'
import ENprivacy from '../locales/en/privacy.json'
import ENprojects from '../locales/en/projects.json'
import ENrepositories from '../locales/en/repositories.json'
import ENskills from '../locales/en/skills.json'
import ENsoftwareFree from '../locales/en/softwareFree.json'
import ENsoftwarePremium from '../locales/en/softwarePremium.json'
import ENstory from '../locales/en/story.json'
import ENterms from '../locales/en/terms.json'
import ENupcomingSoftware from '../locales/en/upcomingSoftware.json'
import ENworkprofile from '../locales/en/workprofile.json'
import ESmain from '../locales/es/main.json'
import EScookies from '../locales/es/cookies.json'
import ESdataSciencePackages from '../locales/es/dataSciencePackages.json'
import ESeducation from '../locales/es/education.json'
import ESentrepreneurships from '../locales/es/entrepreneurships.json'
import ESexperience from '../locales/es/experience.json'
import EShome from '../locales/es/home.json'
import ESnotfound from '../locales/es/notfound.json'
import ESprivacy from '../locales/es/privacy.json'
import ESprojects from '../locales/es/projects.json'
import ESrepositories from '../locales/es/repositories.json'
import ESskills from '../locales/es/skills.json'
import ESsoftwareFree from '../locales/es/softwareFree.json'
import ESsoftwarePremium from '../locales/es/softwarePremium.json'
import ESstory from '../locales/es/story.json'
import ESterms from '../locales/es/terms.json'
import ESupcomingSoftware from '../locales/es/upcomingSoftware.json'
import ESworkprofile from '../locales/es/workprofile.json'
import ENcv from '../locales/en/cv.json'
import EScv from '../locales/es/cv.json'
import ENreferences from '../locales/en/references.json'
import ESreferences from '../locales/es/references.json'


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
        cookies: ENcookies,
        dataSciencePackages: ENdataSciencePackages,
        education: ENeducation,
        entrepreneurships: ENentrepreneurships,
        experience: ENexperience,
        home: ENhome,
        notfound: ENnotfound,
        privacy: ENprivacy,
        projects: ENprojects,
        repositories: ENrepositories,
        skills: ENskills,
        softwareFree: ENsoftwareFree,
        softwarePremium: ENsoftwarePremium,
        story: ENstory,
        terms: ENterms,
        upcomingSoftware: ENupcomingSoftware,
        workprofile: ENworkprofile,
        main: ENmain,
        cv: ENcv,
        references: ENreferences
      },
      es: {
        cookies: EScookies,
        dataSciencePackages: ESdataSciencePackages,
        education: ESeducation,
        entrepreneurships: ESentrepreneurships,
        experience: ESexperience,
        home: EShome,
        notfound: ESnotfound,
        privacy: ESprivacy,
        projects: ESprojects,
        repositories: ESrepositories,
        skills: ESskills,
        softwareFree: ESsoftwareFree,
        softwarePremium: ESsoftwarePremium,
        story: ESstory,
        terms: ESterms,
        upcomingSoftware: ESupcomingSoftware,
        workprofile: ESworkprofile,
        main: ESmain,
        cv: EScv,
        references: ESreferences
      }
    },
  });

export default i18n;
