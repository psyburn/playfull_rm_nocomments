import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { list } from './mock';


import List from './components/list/List';

import './index.css';


ReactDOM.render(
    <List data={list.results} />,
  document.getElementById('root') as HTMLElement
);
