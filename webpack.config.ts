import path from 'path';
import type { WebpackEnv, WebpackPaths } from './configs/webpack/types';
import { createWebpackConfig } from './configs/webpack';

export default (env: WebpackEnv) => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';

  const paths: WebpackPaths = {
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, './public/favicon.ico'),
    src: path.resolve(__dirname, 'src'),
  };

  return createWebpackConfig({
    mode,
    port,
    paths,
    isDev,
  });
};
