import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { FLAG_URLS, translations, type Lang, type TranslationKey } from '../i18n/translations';

type I18nContextValue = {
  lang: Lang;
  flagUrl: string;
  t: (key: TranslationKey) => string;
  changeLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ID');

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key] ?? translations.ID[key] ?? key,
    [lang],
  );

  const changeLang = useCallback((next: Lang) => setLang(next), []);

  const value = useMemo(
    () => ({
      lang,
      flagUrl: FLAG_URLS[lang],
      t,
      changeLang,
    }),
    [lang, t, changeLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
