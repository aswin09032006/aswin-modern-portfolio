import rehypePrism from '@mapbox/rehype-prism';
import mdx from '@mdx-js/rollup';
import { vitePlugin as remix } from '@remix-run/dev';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    outDir: 'dist', // Ensure the output directory is `dist`
    assetsInlineLimit: 1024,
    sourcemap: false, // Optionally, you can disable source maps in production
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 kB
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ],
});
