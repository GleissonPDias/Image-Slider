import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { applyTheme, getInitialTheme, storeTheme, watchSystemTheme } from '../theme.js';

export default function ThemeSwitcher() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => watchSystemTheme(setTheme), []);

  const toggleTheme = () => {
    setTheme(current => {
      const next = current === 'dark' ? 'light' : 'dark';
      storeTheme(next);
      return next;
    });
  };

  return (
    <button type="button" onClick={toggleTheme}
      aria-label={t('theme.toggle')}
      aria-pressed={theme === 'dark'}
      title={t('theme.toggle')}
      className="grid size-9 cursor-pointer place-items-center rounded-full border border-violet-100 bg-white text-mauve shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-50 dark:border-violet-800 dark:bg-[#1a1233] dark:text-violet-300 dark:hover:bg-violet-900/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve">
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
