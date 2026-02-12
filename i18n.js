import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class I18n {
  constructor(defaultLocale = 'ja') {
    this.currentLocale = defaultLocale;
    this.translations = {};
    this.loadTranslations();
  }

  loadTranslations() {
    const locales = ['ja', 'en'];
    locales.forEach(locale => {
      try {
        const filePath = join(__dirname, 'locales', `${locale}.json`);
        const content = readFileSync(filePath, 'utf-8');
        this.translations[locale] = JSON.parse(content);
      } catch (error) {
        console.error(`Failed to load locale ${locale}:`, error.message);
      }
    });
  }

  setLocale(locale) {
    if (this.translations[locale]) {
      this.currentLocale = locale;
      return true;
    }
    return false;
  }

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
