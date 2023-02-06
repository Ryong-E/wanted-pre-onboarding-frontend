import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_ARR } from './constant/route';
import Auth from './hoc/auth';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTE_ARR.map((route) => {
          const AuthCheckComp = Auth(route.element, route.authenticated);
          return <Route path={route.path} element={<AuthCheckComp />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
