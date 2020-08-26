import App from '@/App';
import Home from '@/views/home';
import Issues from '@/views/issue';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/issue',
        exact: true,
        component: Issues
      }
    ]
  }
];

export default routes;
