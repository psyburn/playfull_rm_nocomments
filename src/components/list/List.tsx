import * as React from 'react';
import { ICharacter } from '../../mockDataInterface';
import { list } from './../../mock';
import './list.css';

interface IListItem {
  data: ICharacter;
}
class ListItem extends React.Component<IListItem> {
  public render() {
    const { data } = this.props;
    return <div className='List-Item'>
      <img src={data.image} className='List-Item-Image' />
      <div className='List-Item-Text'>{data.name}</div>
    </div>
  }
}
export default class List extends React.Component<{}> {
    public render() {
      const results = list.results;
      if (!results.length) {
        return <div> Nothing here - move along</div>;
      }
      return <div>{
        results.map((singleResult, index) => <ListItem key={index} data={singleResult} />)
      }</div>;
    }
}
