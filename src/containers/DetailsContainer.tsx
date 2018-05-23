import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Details from '../components/details/Details';
import { list } from '../mock';


interface IRouteParams {
  id: string;
}

export default class ListContainer extends React.Component<RouteComponentProps<IRouteParams>> {
  public render() {
    const id = parseInt(this.props.match.params.id, 10);
    const character = list.results.find((item) => item.id === id);

    return character && <Details character={character}/>;
  }
}
