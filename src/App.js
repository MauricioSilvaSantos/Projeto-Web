import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

const loading = (
  <div className="spinner-border" role="status">
    <span className="visually-hidden"></span>
  </div>
);

// layout
const Layout = React.lazy(() => import('./layout/Main'));

// Pages
const Login = React.lazy(() => import('./pages/login/Login'));

function App() {

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login" render={props => <Login {...props}/>} />
          <Route path="/" name="Home" render={props => <Layout {...props}/>} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App;
