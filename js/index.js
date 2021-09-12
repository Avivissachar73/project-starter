import { AvivJs } from './lib/AvivJs.js';


import routes from './routes.js';
import store from './store.js';

import AppHeader from './cmps/AppHeader.js';
import AppFooter from './cmps/AppFooter.js';

const App = new AvivJs();
App.RootCmp('#app', {
  name: 'RootCmp',
  store,
  routes,
  template: `
      <div>
          <AppHeader/>
          <RouterView/>
          <AppFooter/>
      </div>
  `,
  components: {
      AppHeader,
      AppFooter
  }
});