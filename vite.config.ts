import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => {
  const isSingle = mode === 'single';
  return {
    plugins: [react(), ...(isSingle ? [viteSingleFile()] : [])],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // 单文件模式用相对路径,保证 file:// 双击可打开
    base: isSingle ? './' : '/',
    build: isSingle
      ? {
          cssCodeSplit: false,
          assetsInlineLimit: 100000000,
        }
      : {},
    server: {
      port: 5173,
      open: true,
    },
  };
});
