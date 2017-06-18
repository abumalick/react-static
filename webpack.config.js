import path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import {phenomicLoader} from 'phenomic';
import PhenomicLoaderFeedWebpackPlugin from 'phenomic/lib/loader-feed-webpack-plugin';
import PhenomicLoaderSitemapWebpackPlugin from 'phenomic/lib/loader-sitemap-webpack-plugin';

import pkg from './package.json';

export default (config = {}) => {
  // hot loading for postcss config
  // until this is officially supported
  // https://github.com/postcss/postcss-loader/issues/66
  const postcssPluginFile = require.resolve('./postcss.config.js');
  const postcssPlugins = webpackInstance => {
    webpackInstance.addDependency(postcssPluginFile);
    delete require.cache[postcssPluginFile];
    return require(postcssPluginFile)(config);
  };

  return {
    ...(config.dev && {
      devtool: '#cheap-module-eval-source-map',
    }),
    module: {
      noParse: /\.min\.js/,
      rules: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source),
            // plugins: [
            //   ...require("phenomic/lib/loader-preset-markdown").default
            // ]
            // see https://phenomic.io/docs/usage/plugins/
          },
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'scripts'),
            path.resolve(__dirname, 'src'),
          ],
          loaders: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: 'eslint-loader',
              options: config.dev ? {emitWarning: true} : {},
            },
          ],
        },

        // ! \\
        // by default *.css files are considered as CSS Modules
        // And *.global.css are considered as global (normal) CSS

        // *.css => CSS Modules
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                query: {
                  modules: true,
                  localIdentName: config.production
                    ? '[hash:base64:5]'
                    : '[path][name]--[local]--[hash:base64:5]',
                },
              },
              {
                loader: 'postcss-loader',
                query: {plugins: postcssPlugins},
              },
            ],
          }),
        },
        // *.global.css => global (normal) css
        {
          test: /\.global\.css$/,
          include: path.resolve(__dirname, 'src'),
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                query: {plugins: postcssPlugins},
              },
            ],
          }),
        },
        // vendor css from node_modules
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'node_modules'),
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: config.production
                    ? [
                        require('cssnano')({
                          preset: 'default',
                          autoprefixer: false,
                        }),
                      ]
                    : [],
                },
              },
            ],
          }),
        },
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
          loader: 'file-loader',
          query: {
            name: '[path][name].[hash].[ext]',
            context: path.join(__dirname, config.source),
          },
        },

        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          loader: 'raw-loader',
        },
      ],
    },

    plugins: [
      new PhenomicLoaderFeedWebpackPlugin({
        // here you define generic metadata for your feed
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          // here we define one feed, but you can generate multiple, based
          // on different filters
          'feed.xml': {
            collectionOptions: {
              filter: {layout: 'Post'},
              sort: 'date',
              reverse: true,
              limit: 20,
            },
          },
        },
      }),

      new PhenomicLoaderSitemapWebpackPlugin({
        site_url: pkg.homepage,
      }),

      new ExtractTextPlugin({
        filename: '[name].[hash].css',
        disable: config.dev,
      }),

      ...(config.production && [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
      ]),
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: '[name].[hash].js',
    },

    resolve: {extensions: ['.js', '.json']},
  };
};
