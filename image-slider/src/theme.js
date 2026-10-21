const STORAGE_KEY = 'image-slider-theme';

function mediaQuery() {
  return window.matchMedia('(prefers-color-scheme: dark)');
}

export function getSystemTheme() {
  return mediaQuery().matches ? 'dark' : 'light';
}

export function getStoredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // localStorage pode estar indisponível (ex.: modo privado)
  }
  return null;
}

export function getInitialTheme() {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

export function storeTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Sem persistência, o tema vale apenas para esta sessão
  }
}

// Sincroniza com o tema do sistema enquanto o usuário não escolher um manualmente
export function watchSystemTheme(onChange) {
  const query = mediaQuery();
  function handleChange(event) {
    if (getStoredTheme()) return;
    const theme = event.matches ? 'dark' : 'light';
    applyTheme(theme);
    onChange?.(theme);
  }
  query.addEventListener('change', handleChange);
  return () => query.removeEventListener('change', handleChange);
}
