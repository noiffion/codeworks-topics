import React from 'react';
import ReactDOM from 'react-dom';
import TopicList from './components/TopicList';
import * as serviceWorker from './serviceWorker/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TopicList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
