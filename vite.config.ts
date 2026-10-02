import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'google-verification-raw-handler',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.startsWith('/google9d6adfed0c4eccc8.html')) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end('google-site-verification: google9d6adfed0c4eccc8.html\n');
              return;
            }
            if (req.url?.startsWith('/googlew94YrC_1wcI4gsYJB67N8idKQtp66aj1kdV2b7OMX_E.html')) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end('google-site-verification: googlew94YrC_1wcI4gsYJB67N8idKQtp66aj1kdV2b7OMX_E.html\n');
              return;
            }
            next();
          });
        },
      },
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
