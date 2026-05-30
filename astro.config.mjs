import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build
export default defineConfig({
  // 1. 将下面的网址替换为你购买的联盟站英文域名
  site: 'https://blog.599722.xyz',
  
  // 2. ❌ 删除了 output: 'server' 和 adapter，回归 Astro 默认的静态（Static）导出模式

  // 3. 保持编译器插件正常运行
  vite: {
    plugins: [tailwindv4()],
  },

  // 4. 保持核心插件运行
  integrations: [
    mdx(),
    sitemap(),
  ],
});
