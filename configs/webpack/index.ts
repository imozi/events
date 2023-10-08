import { type Configuration } from 'webpack';
import { type WebpackConfigOptions } from './types/types';
import { devServerConfig } from './devServer';
import { pluginsConfig } from './plugins';
import { resolversConfig } from './resolvers';
import { loadersConfig } from './loaders/loadersConfig';

export const createWebpackConfig = (options: WebpackConfigOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/',
    },
    resolve: resolversConfig(options),
    plugins: pluginsConfig(options),
    module: {
      rules: loadersConfig(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? devServerConfig(options) : undefined,
  };
};
