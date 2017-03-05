'use strict';

const path = require('path');
module.exports = appInfo => {
  return {
    keys: appInfo.name,
    view: {
      mapping: {
        '.html': 'nunjucks',
      },
      defaultExtension: '.html',
      root: path.join(appInfo.baseDir, 'app/views'),
    },
  };
};
