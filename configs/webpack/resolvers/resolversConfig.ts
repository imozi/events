import { type ResolveOptions } from 'webpack';
import { type WebpackConfigOptions } from '../types';

export const resolversConfig = ({ paths }: WebpackConfigOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    '@': paths.src,
  },
});
