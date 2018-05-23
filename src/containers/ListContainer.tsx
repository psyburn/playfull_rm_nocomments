import * as React from 'react';
import List from '../components/list/List';
import { list } from '../mock';

export default class ListContainer extends React.Component<{}> {
  public render() {
    return <List data={list.results}/>
  }
}
