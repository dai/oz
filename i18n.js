import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class I18n {
  constructor(defaultLocale = 'ja') {
    this.translations = {};
    this.supportedLocales = ['ja', 'en'];
    this.loadTranslations();
    // Validate and set default locale
    this.currentLocale = this.translations[defaultLocale] ? defaultLocale : 'ja';
  }

  loadTranslations() {
    this.supportedLocales.forEach(locale => {
      try {
        const filePath = join(__dirname, 'locales', `${locale}.json`);
        const content = readFileSync(filePath, 'utf-8');
        this.translations[locale] = JSON.parse(content);
      } catch (error) {
        console.error(`Failed to load locale ${locale}:`, error.message);
      }
    });
  }

  /**
   * Set the current locale
   * @param {string} locale - The locale code to switch to
   * @returns {boolean} true if locale was set successfully, false if locale not found
   */
  setLocale(locale) {
    if (this.translations[locale]) {
      this.currentLocale = locale;
      return true;
    }
    return false;
  }

  /**
   * Translate a key to the current locale
   * @param {string} key - Translation key in dot notation (e.g., 'menu.home')
   * @returns {string} Translated string, falls back to English, or returns key if not found
   */
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLocale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = this.translations['en'];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key itself if not found
          }
        }
        break;
      }
    }
    
    return value;
  }

  getCurrentLocale() {
    return this.currentLocale;
  }
}

export default I18n;
