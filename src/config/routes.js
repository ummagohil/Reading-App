import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: Home,
  },
  {
    path: '/add',
    exact: true,
    component: Add,
    name: Add,
  },
  {
    path: '/edit',
    exact: true,
    component: Edit,
    name: Edit,
  },
]

export default routes
