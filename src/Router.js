import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ROUTE_ARR } from './constant/route';
import Auth from './hoc/auth';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          const AuthCheckComp = Auth(route.element, route.authenticated);
          return <Route path={route.path} element={<AuthCheckComp />} key={index} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
