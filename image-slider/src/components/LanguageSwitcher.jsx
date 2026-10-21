import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, changeLanguage } from '../i18n.js';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <div role="group" aria-label={t('language.switcher')}
      className="flex items-center gap-1 rounded-full border border-violet-100 bg-white p-1 shadow-sm dark:border-violet-800 dark:bg-[#1a1233]">
      {SUPPORTED_LANGUAGES.map(({ code, label, name }) => (
        <button key={code} type="button" onClick={() => changeLanguage(code)}
          title={name}
          aria-label={`${t('language.label')}: ${name}`}
          aria-pressed={current === code}
          className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold tracking-widest transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve ${current === code ? 'bg-mauve text-white dark:bg-violet-600' : 'text-slate-500 hover:bg-violet-50 hover:text-mauve dark:text-violet-300 dark:hover:bg-violet-900/50 dark:hover:text-violet-100'}`}>
          {label}
        </button>
      ))}
    </div>
  );
}
