import { HashRouter, Route, Router } from "react-router-dom";
import Page0 from './pages/0';
import Page1 from './pages/1';
import Page2 from './pages/2';

const App = _ => {
  return (
    <HashRouter>
      <Route path="/0" render={ () => <Page0 s={_.s} /> } />
      <Route path="/1" render={ () => <Page1 s={_.s} /> } />
      <Route path="/2" render={ () => <Page2 s={_.s} /> } />
    </HashRouter>
  );
}

export default App;
