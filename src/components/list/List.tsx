import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { ICharacter } from '../../mockDataInterface';
import Details from '../details/Details';
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

interface IListComponent {
  data: ICharacter[];
  // onItemSelect(data: ICharacter): void;
}

export default class List extends React.Component<IListComponent> {
  public render() {
    const { data } = this.props;
    if (!data.length) {
      return <div> Nothing here - move along</div>;
    }
    return <Router>
      <div>
        <Route path="/list" component={() =>
          (<div>{
            data.map((singleResult, index) => (
              <Link key={index} to={`/details/${singleResult.id}`} >
                <ListItem data={singleResult}/>
              </Link>
            ))}
          </div>
        )} />
        <Route path="/details/:id" component={Details} />
      </div>
    </Router>
  }
}
