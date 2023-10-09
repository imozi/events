import {
  type WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import dotenv from 'dotenv';
import { type WebpackConfigOptions } from '../types';

dotenv.config();

export const pluginsConfig = ({ paths, isDev }: WebpackConfigOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __FRONTEND_PORT__: isDev ? process.env.FRONTEND_PORT_DEV : process.env.FRONTEND_PORT_PROD,
      __BACKEND_PORT__: isDev ? process.env.BACKEND_PORT_DEV : process.env.BACKEND_PORT_PROD,
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
};
