export type WebpackMode = 'development' | 'production';

export type WebpackEnv = {
  mode: WebpackMode;
  port: number;
};

export type WebpackPaths = {
  entry: string;
  output: string;
  html: string;
  favicon: string;
  src: string;
};

export type WebpackConfigOptions = {
  mode: WebpackMode;
  port: number;
  paths: WebpackPaths;
  isDev: boolean;
};
