import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const cssLoader = (isDev: boolean) => {
  const loaders = {
    test: /\.(s*)css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
    ],
  };

  isDev ? loaders.use.push('sass-loader') : loaders.use.push('postcss-loader', 'sass-loader');

  return loaders;
};
