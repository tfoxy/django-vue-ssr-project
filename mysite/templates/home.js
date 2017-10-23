const Vue = require('vue');

module.exports = new Vue({
  template: `<div>
    <div>Hello World</div>
    <input v-model="foo" />
    <div v-text="foo">V-TEXT</div>
  </div>`,
  data: {
    foo: 'bar',
  },
});
