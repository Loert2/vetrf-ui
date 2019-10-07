const path = require('path');

module.exports = ({ config }) => {
   config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
         {
            loader: require.resolve('awesome-typescript-loader'),
            options: { configFileName: path.resolve(__dirname, '../tsconfig.json') }
         },
         // Optional
         {
            loader: require.resolve('react-docgen-typescript-loader')
         }
      ]
   });
   config.resolve.extensions.push('.ts', '.tsx');
   return config;
};
