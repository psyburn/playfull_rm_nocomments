import * as React from 'react';
import { list } from './../../mock';
import './list.css';

export default class List extends React.Component<{}> {
    public render() {
      const results = list.results;
      if (!list) {
        return null;
      }
      return <div>{
        results.map((singleResult) => (<div className='List-Item'>{singleResult.name}</div>))
      }</div>;
    }
}
