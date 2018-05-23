import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DetailsContainer from './containers/DetailsContainer';
import ListContainer from './containers/ListContainer';

export default class Routes extends React.Component {
  public render() {

    return <Router>
      <div>
        <Route path="/list" component={ListContainer} />
        <Route path="/details/:id" component={DetailsContainer} />
      </div>
    </Router>
  }
}
