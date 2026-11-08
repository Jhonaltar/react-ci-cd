// import { defineConfig } from 'vitest/config';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],

//   test: {
//     environment: 'jsdom',
//     globals: false,
//     clearMocks: true,

//     exclude: [
//       '**/node_modules/**',
//       '**/src/jest/**',
//       '**/e2e/**',
//     ],
//   },
// });




import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: process.env.GITHUB_PAGES === 'true'
    ? '/react-ci-cd/'
    : '/',

  test: {
    environment: 'jsdom',
    globals: false,
    clearMocks: true,
    exclude: [
      '**/node_modules/**',
      '**/src/jest/**',
      '**/e2e/**',
      '**/cypress/**',
    ],
  },
});


