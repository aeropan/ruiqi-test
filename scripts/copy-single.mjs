import { copyFileSync, existsSync } from 'node:fs';

const src = 'dist/index.html';
const dest = 'prototype.html';

if (!existsSync(src)) {
  console.error(`未找到 ${src},请先运行 vite build --mode single`);
  process.exit(1);
}

copyFileSync(src, dest);
console.log(`已生成交付文件: ${dest}(单文件,可双击离线打开)`);
