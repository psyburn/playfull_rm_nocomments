import * as React from 'react';
import { ICharacter } from '../../mockDataInterface';
import './list.css';

import Details from '../details/Details';

interface IListItem {
  data: ICharacter;
  onSelect(data: ICharacter): void;
}
class ListItem extends React.Component<IListItem> {
  public onClick = () => {
    this.props.onSelect(this.props.data);
  }
  public render() {
    const { data } = this.props;
    return <div className='List-Item' onClick={this.onClick}>
      <img src={data.image} className='List-Item-Image' />
      <div className='List-Item-Text'>{data.name}</div>
    </div>
  }
}

interface IListComponent {
  data: ICharacter[];
  // onItemSelect(data: ICharacter): void;
}
interface IListState {
  details: ICharacter | null;
}
export default class List extends React.Component<IListComponent, IListState> {
  public state = {
    details: null
  };

  public onSelect = (char) => {
    this.setState({
      details: char,
    })
    // return this.props.onItemSelect(char);
  }

  public render() {
    const {data} = this.props;
    const { details } = this.state;
    if (!data.length) {
      return <div> Nothing here - move along</div>;
    }
    return details == null ?
    <div>{
      data.map((singleResult, index) =>
      <ListItem key={index} data={singleResult} onSelect={this.onSelect}/>
    )
    }</div> :
      <Details character={details} />
    ;
  }
}
