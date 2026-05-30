import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindv4 from '@tailwindcss/vite'; // ✅ 最新官方引入方式：改用 Vite 插件形式引入 Tailwind v4

// https://astro.build
export default defineConfig({
  // 1. 将下面的网址替换为你购买的联盟站英文域名
  site: 'https://blog.599722.xyz',
  
  // 2. 开启 SSR 服务端渲染模式
  output: 'server',
  
  // 3. 配置 Cloudflare 官方适配器
  adapter: cloudflare(),

  // 4. 将 Tailwind 作为底层 Vite 编译器插件运行
  vite: {
    plugins: [tailwindv4()],
  },

  // 5. 保持其余核心插件干净整洁
  integrations: [
    mdx(),
    sitemap(),
  ],
});
