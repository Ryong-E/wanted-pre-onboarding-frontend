import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Todo from '../pages/Todo';

export const ROUTE = {
  // option
  // null : 아무나 출입이 가능항 페이지
  // true : 로그인한 유저만 출입이 가능한 페이지
  // false : 로그인한 유저는 출입불가한 페이지

  NOT_FOUND: {
    path: '*',
    link: '*',
    element: NotFound,
    authenticated: null,
  },
  SIGNIN: {
    path: '/signin',
    link: '/signin',
    element: SignIn,
    authenticated: false,
  },
  SIGNUP: {
    path: '/signup',
    link: '/signup',
    element: Register,
    authenticated: false,
  },
  TODO: {
    path: '/todo',
    link: '/todo',
    element: Todo,
    authenticated: true,
  },
  HOME: {
    path: '/',
    link: '/',
    element: Home,
    authenticated: false,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
