module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.jsx', '**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
