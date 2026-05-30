import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build
export default defineConfig({
  // 1. 将下面的网址替换为你购买的联盟站英文域名（暂时不改也不影响打包）
  site: 'https://blog.599722.xyz',
  
  // 2. 开启 SSR 服务端渲染模式，方便后续做 /go/ 联盟链接动态短网址重定向
  output: 'server',
  
  // 3. 配置 Cloudflare 官方适配器
  adapter: cloudflare(),

  // 4. 完美融合 Blogsmith Free 依赖的各种核心插件
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
});
