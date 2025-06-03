import { messages, defaultLang } from './messages.ts';

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/');
  if (lang in messages) {
    return lang as keyof typeof messages;
  }
  return defaultLang;
};

export const useTranslations =
  (lang: keyof typeof messages) =>
  (key: keyof (typeof messages)[typeof defaultLang]) =>
    messages[lang][key] || messages[defaultLang][key];
