import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { list } from './mock';

import List from './components/list/List';

import './index.css';

const log = (item) => {
  console.log(item);
}

ReactDOM.render(
  <List data={list.results} onItemSelect={log} />,
  document.getElementById('root') as HTMLElement
);
