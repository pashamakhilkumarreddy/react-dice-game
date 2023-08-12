import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const routes = [
  {
    path: '/',
    component: Home,
    children: [],
    title: 'Home',
  },
  {
    path: '*',
    component: PageNotFound,
    children: [],
    title: 'Page Not Found',
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {routes.map(({ path, component: Component, title }, idx) => (
          <Route
            key={idx.toString()}
            path={path}
            element={<Component title={title} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
