import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import Details from '../../components/details/Details';
import { ICharacter } from '../../mockDataInterface';

interface IRouteParams {
  id: string;
}

interface IDetailsContainer {
  character: ICharacter;
}

class ListContainer extends React.Component<IDetailsContainer & RouteComponentProps<IRouteParams>> {
  public render() {
    const { character } = this.props;
    return character && <Details character={character}/>;
  }
}

const mapStateToProps = (state, ownProps: RouteComponentProps<IRouteParams>):Partial<IDetailsContainer> =>
({
  character: state.characters.list.find((item) => item.id === parseInt(ownProps.match.params.id, 10)),
});


export default connect(mapStateToProps)(ListContainer)
