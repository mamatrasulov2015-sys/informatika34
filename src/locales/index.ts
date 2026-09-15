import { uz } from './uz';
import { en } from './en';
import { ru } from './ru';
import { Language } from '../types';

export const translations = {
  uz,
  en,
  ru,
};

export const getTranslation = (lang: Language) => {
  return translations[lang] || translations.uz;
};
