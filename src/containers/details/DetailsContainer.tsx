import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { ICharacter } from '../../dataInterface';
import Details from './components/Details';
import { singleCharacterSelector } from './state/selectors';

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
  character: singleCharacterSelector(state, parseInt(ownProps.match.params.id, 10)),
});


export default connect(mapStateToProps)(ListContainer)
