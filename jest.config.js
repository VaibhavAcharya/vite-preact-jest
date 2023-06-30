/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // transform: {
  //   '\\.(js|jsx|ts|tsx)$': 'vite-jest',
  // },
};