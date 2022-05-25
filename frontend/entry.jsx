import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { fetchUsers, fetchUser } from './util/users_util'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    //   if (window.currentUser) {
        //     preloadedState = {
            //       session: {
                //         currentUser: window.currentUser
                //       }
                //     };
                //   }
  console.log(fetchUsers())
  console.log('something')
  const store = createStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
})