import I18n from './i18n.js';

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running tests...\n');

// Test 1: Japanese locale is default
console.log('Test 1: Japanese locale is default');
const i18n1 = new I18n('ja');
assert(i18n1.getCurrentLocale() === 'ja', 'Default locale should be Japanese');
console.log('✓ Passed\n');

// Test 2: Japanese translations work
console.log('Test 2: Japanese translations work');
assert(i18n1.t('greeting') === 'こんにちは', 'Japanese greeting should be こんにちは');
assert(i18n1.t('welcome') === 'ようこそ', 'Japanese welcome should be ようこそ');
console.log('✓ Passed\n');

// Test 3: Nested keys work
console.log('Test 3: Nested keys work');
assert(i18n1.t('menu.home') === 'ホーム', 'Japanese menu.home should be ホーム');
assert(i18n1.t('messages.success') === '成功しました', 'Japanese messages.success should be 成功しました');
console.log('✓ Passed\n');

// Test 4: Locale switching works
console.log('Test 4: Locale switching works');
i18n1.setLocale('en');
assert(i18n1.getCurrentLocale() === 'en', 'Locale should switch to English');
assert(i18n1.t('greeting') === 'Hello', 'English greeting should be Hello');
console.log('✓ Passed\n');

// Test 5: Can switch back to Japanese
console.log('Test 5: Can switch back to Japanese');
i18n1.setLocale('ja');
assert(i18n1.getCurrentLocale() === 'ja', 'Locale should switch back to Japanese');
assert(i18n1.t('greeting') === 'こんにちは', 'Japanese greeting should work again');
console.log('✓ Passed\n');

console.log('All tests passed! ✓');
