/* eslint-disable import/no-extraneous-dependencies, no-console */
import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const basePath = resolve(`${__dirname}/notaperiod`);
const distributionAppPath = resolve(`${__dirname}/dist/notaperiod`);

export default function (options = {}) {
  const environment = options.prod ? 'production' : 'dev';

  console.log(`=> Building notaperiod for '${environment}' environment.`);

  return ({
    entry: basePath,
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
          loader: 'babel',
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
      new HtmlWebpackPlugin({
        template: `${basePath}/template/index.html`,
      }),
    ],
    devtool: environment === 'dev' ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  });
}
