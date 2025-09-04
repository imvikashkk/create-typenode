import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { copy } from 'esbuild-plugin-copy';

build({
  entryPoints: ['src/app.ts'],
  bundle: true,
  platform: 'node',
  target: 'node22.14',
  outfile: 'dist/app.bundle.js',
  plugins: [
    nodeExternalsPlugin(),
    copy({
      assets: [
        { from: ['./views/**/*'], to: ['./dist/views'] },
        { from: ['./templates/**/*'], to: ['./dist/templates'] },
        { from: ['./assets/**/*'], to: ['./dist/assets'] },
      ],
    }),
  ],
}).catch(() => process.exit(1));
