import { type RuleSetRule } from 'webpack';
import { type WebpackConfigOptions } from '../types';
import { tsLoader } from './tsLoader';
import { cssLoader } from './cssLoader';
import { svgLoader } from './svgLoader';

export const loadersConfig = ({ isDev }: WebpackConfigOptions): RuleSetRule[] => [
  tsLoader,
  svgLoader,
  cssLoader(isDev),
];
