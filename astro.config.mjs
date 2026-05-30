import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindv4 from '@tailwindcss/vite';
import icon from 'astro-icon'; // ✅ 1. 成功把丢失的联盟图标系统补回来

// https://astro.build/config
export default defineConfig({
  // 替换为你未来的英文联盟营销域名
  site: 'https://yournichedomain.com',
  
  // 保持 Tailwind v4 的 Vite 编译器级别融合
  vite: {
    plugins: [tailwindv4()],
  },

  // 2. 完美对齐全站所有所需插件（顺序不能错，icon 必须在集成列表中激活）
  integrations: [
    icon(), // ✅ 激活图标驱动，彻底消除 virtual:astro-icon 报错
    mdx(),
    sitemap(),
  ],
});
