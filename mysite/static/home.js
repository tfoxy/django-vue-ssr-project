const Vue = require('vue');

const app = new Vue({
  template: `<div id="app">
    <div>Hello World</div>
    <input v-model="foo" />
    <div v-text="foo">V-TEXT</div>
  </div>`,
  data: {
    foo: 'bar',
  },
});

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = app;
} else {
  window.vueApp = app;
}
