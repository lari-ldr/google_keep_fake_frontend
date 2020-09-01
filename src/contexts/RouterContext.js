import React from 'react';
import { createBrowserHistory } from 'history';
import { locationToRoute } from '../router/ultils';
import { Route } from '../components/Route';
import { Link } from '../components/Link';

// import qs from 'querystringify';

// function locationToRoute(location) {
//   // location comes from the history package
//   return {
//     path: location.pathname,
//     hash: location.hash,
//     query: qs.parse(location.search),
//   };
// }

export const history = createBrowserHistory();
export const RouterContext = React.createContext({
  route: locationToRoute(history.location),
});

class RouterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.routes = Object.keys(props.routes).map(
      (key) => props.routes[key].path
    );
    this.unlisten = history.listen(this.handleRouteChange);
    this.state = {
      route: locationToRoute(history.location),
    };
  }
  componentWillUnmount() {
    this.unlisten();
  }

  handleRouteChange = (location) => {
    const route = locationToRoute(location);
    // console.log(location);
    // console.log(locationToRoute(location));
    // console.log(route);
    this.setState({ route: route });
  };

  render() {
    const { children, NotFound } = this.props;
    // console.log(children);
    // console.log(NotFound);
    const { route } = this.state;
    // console.log(route);

    const routerContextValue = { route };
    const is404 = this.routes.indexOf(route.path) === -1;

    return (
      <RouterContext.Provider value={routerContextValue}>
        {is404 ? <NotFound /> : children}
      </RouterContext.Provider>
    );
  }
}

export default RouterProvider;
// export { history, RouterContext, RouterProvider, Route, Link };
