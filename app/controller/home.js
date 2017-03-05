'use strict';

const serialize = require('serialize-javascript');

exports.index = function* index() {
  const state = serialize({}, { isJSON: true });
  const html = 'index page';
  yield this.render('index.html', {
    html,
    state,
  });
};
