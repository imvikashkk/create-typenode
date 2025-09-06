import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { copy } from 'esbuild-plugin-copy';

build({
  entryPoints: ['src/app.ts'],
  bundle: true,
  platform: 'node',
  target: 'node22.14',
  format: 'esm',
  outfile: 'dist/app.bundle.js',
  plugins: [
    nodeExternalsPlugin(),
    copy({
      assets: [
        { from: ['src/views/**/*'], to: ['views'] },
        { from: ['src/templates/**/*'], to: ['templates'] },
        { from: ['src/assets/**/*'], to: ['assets'] },
      ],
    }),
  ],
}).catch(() => process.exit(1));
