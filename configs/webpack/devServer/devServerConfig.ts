import { Configuration } from 'webpack-dev-server';
import { type WebpackConfigOptions } from '../types';

export const devServerConfig = ({ port }: WebpackConfigOptions): Configuration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
