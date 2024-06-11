import AddStore from '../pages/AddStore/AddStore';
import Home from '../pages/Home/Home';
import StoreList from '../pages/StoreList/StoreList';
import Page404 from '../pages/Page404/Page404';
import AdminTemplate from '../template/AdminTemplate';
import DetailStore from '../pages/DetailStore/DetailStore';

const routers = [
  {
    id: 'home',
    path: '/',
    element: <Home />,
  },
  {
    id: 'admin',
    path: 'admin',
    // TODO: Handle URL: localhost//admin -> page not pound
    element: <AdminTemplate />,
    children: [
      {
        id: 1,
        path: 'store',
        element: <StoreList />,
      },
      {
        id: 2,
        path: 'store/add-store',
        element: <AddStore />,
      },
      {
        id: 3,
        path: 'store/:slugStore',
        element: <DetailStore />,
      },
    ],
  },
  {
    id: 'page404',
    path: '*',
    element: <Page404 />,
  },
];

export default routers;
