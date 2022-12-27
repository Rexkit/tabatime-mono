// Helper for combining webpack config objects
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = (config, context) => {
  return merge(config, {
    resolve: {
      extensions: ['js', 'ts'],
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/app/components'),
        '@app-types': path.resolve(__dirname, 'src/app/types'),
        '@styles': path.resolve(__dirname, 'src/app/styles'),
        '@hooks': path.resolve(__dirname, 'src/app/hooks'),
        '@pages': path.resolve(__dirname, 'src/app/pages'),
        '@layouts': path.resolve(__dirname, 'src/app/layouts'),
        '@features': path.resolve(__dirname, 'src/app/features'),
        '@': path.resolve(__dirname, 'src/app'),
      },
    },
  });
};
