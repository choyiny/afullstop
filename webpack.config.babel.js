/* eslint-disable import/no-extraneous-dependencies, no-console */
import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { HotModuleReplacementPlugin, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const basePath = resolve(`${__dirname}/src`);
export const distributionAppPath = resolve(`${__dirname}/notaperiod`);

export default function (options = {}) {
  const environment = options.prod ? 'production' : 'dev';

  console.log(`=> Building notaperiod for '${environment}' environment.`);

  const environmentConfigurations = environment === 'dev' ? { devtool: 'cheap-module-eval-source-map' } : {};

  return ({
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      basePath,
    ],
    devServer: { inline: true },
    output: {
      path: distributionAppPath,
      filename: 'app.js',
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: ['babel', 'eslint'],
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin([{ from: `${basePath}/designs`, to: `${distributionAppPath}/designs` }]),
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment),
        },
      }),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: `${basePath}/template/index.html`,
      }),
    ],
    ...environmentConfigurations,
  });
}
