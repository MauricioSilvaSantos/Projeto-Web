import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';

const loading = (
  <div className="spinner-border" role="status">
    <span className="visually-hidden"></span>
  </div>
);

export default function Body() {
  return (
    <>
      <Container>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <div>
                        <route.component {...props} />
                      </div>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
