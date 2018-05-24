import * as React from 'react';
import { connect } from 'react-redux';

import { ICharacter } from '../../dataInterface';
import List from './components/List';
import { requestCharacters } from './state/actions';
import { characterListSelector } from './state/selectors'


interface IListContainer {
  list: ICharacter[];
  getList(): void;
}

class ListContainer extends React.Component<IListContainer> {
  public componentWillMount() {
    this.props.getList();
  }

  public render() {
    const { list: characterList} = this.props;
    return <List data={characterList}/>
  }
}

const mapStateToProps = (state):Partial<IListContainer> => ({
  list: characterListSelector(state),
});

const mapDispatchToProps:Partial<IListContainer> = {
  getList: requestCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
