import Vue from 'vue';
import Home from './Home.vue';

export default function createApp(context) {
  return new Vue({
    render(createElement) {
      return createElement(Home, {
        props: context,
      });
    },
  });
};
