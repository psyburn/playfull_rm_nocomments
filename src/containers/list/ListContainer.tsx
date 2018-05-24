import * as React from 'react';
import { connect } from 'react-redux';

import { ICharacter } from '../../mockDataInterface';
import List from './components/List';
import { addData } from './state/actions';
import { characterListSelector } from './state/selectors'

import { list } from '../../mock';

interface IListContainer {
  list: ICharacter[];
  addToList(data: ICharacter[]): void;
}

class ListContainer extends React.Component<IListContainer> {
  public componentWillMount() {
    this.props.addToList(list.results);
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
  addToList: addData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
