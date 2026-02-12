import I18n from './i18n.js';

// Initialize i18n with Japanese as default
const i18n = new I18n('ja');

console.log('='.repeat(50));
console.log(i18n.t('app_title'));
console.log('='.repeat(50));
console.log();

console.log(i18n.t('start_message'));
console.log();

console.log(`${i18n.t('greeting')}! ${i18n.t('welcome')}`);
console.log();

console.log('Menu:');
console.log(`  - ${i18n.t('menu.home')}`);
console.log(`  - ${i18n.t('menu.settings')}`);
console.log(`  - ${i18n.t('menu.about')}`);
console.log();

console.log(`Status: ${i18n.t('messages.success')}`);
console.log();

console.log(i18n.t('farewell'));
console.log();

// Demonstrate locale switching
console.log('---');
console.log('Switching to English locale:');
i18n.setLocale('en');
console.log(`${i18n.t('greeting')}! ${i18n.t('welcome')}`);
console.log(`Current locale: ${i18n.getCurrentLocale()}`);
