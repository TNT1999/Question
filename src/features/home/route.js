import { DefaultPage, ListTest } from './';

export default {
  path: '',
  name: 'test',
  childRoutes: [
    { path: '/:id', name: 'TestDetail', component: DefaultPage },
    { path: '/', name: 'TestDetail', component: ListTest },
  ],
};
