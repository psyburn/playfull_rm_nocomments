import * as React from 'react';
import { connect } from 'react-redux';

import List from '../../components/list/List';
import { ICharacter } from '../../mockDataInterface';
import { addData } from './state/actions';

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
  list: state.characters.list,
});

const mapDispatchToProps:Partial<IListContainer> = {
  addToList: addData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
