import { createContext, useState } from 'react';
import Router from './Router';

export const LoginContext = createContext();

function App() {
  const isLogin = useState(false);

  return (
    <LoginContext.Provider value={isLogin}>
      <Router />
    </LoginContext.Provider>
  );
}

export default App;
