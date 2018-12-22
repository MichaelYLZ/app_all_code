import '@babel/polyfill';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

export default ENV => {
    
    return {
        mode: 'production',
        
        entry: [
                  '@babel/polyfill',           './src/index.js'
                ],
        
        output: {
            filename: 'js/bundle.js',
        },
        
        plugins: [
            new HtmlWebpackPlugin(
                {   
                    template: './src/index.html',
                }
            ),
            
            new CleanWebpackPlugin(['dist']),
            
            new MiniCssPlugin({
                filename: 'css/[name].css'
            }),
            
            new CopyPlugin([{
              from: './src/client.js', to: 'js'
            }])
           
        ],
        
        optimization: {
          minimizer: [new UglifyJsPlugin({
              sourceMap: true
          })]
        },
        
        module: {
            rules: [
                {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: 'babel-loader'
                },
                {
                 test: /\.css$/,
                 use: [
                    {
                      loader:MiniCssPlugin.loader,
                    },
                    {
                      loader:'css-loader'
                    },
                    {
                      loader:'postcss-loader',
                       options: {
                        plugins: () => [require('autoprefixer')({
                        'browsers': ['> 1%', 'last 2 versions']
                        })]
                      }   
                    }
                    ]
                }
            ]
        }
    }                   
}