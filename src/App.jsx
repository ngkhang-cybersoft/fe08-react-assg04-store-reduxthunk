import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from './router/router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((router) => {
          return (
            <Route key={router.id} path={router.path} element={router.element}>
              {router.children?.map(({ id, path, element }) => {
                return <Route key={id} path={path} element={element} />;
              })}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
