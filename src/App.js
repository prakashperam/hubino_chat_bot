//import dependencies

import React from 'react';
import './styles/App.css';

//import redux components 

import {Provider} from 'react-redux'
import store from './store';



// import chat compoonents 
import Chat from './components/chat/Chat'

//connect application to redux 

const App = ()=> {
  return (
    <Provider store={store}>
    <div className="App">
      {/* insert chat component here */}
      <Chat />
    </div>
    </Provider>
  );
}

export default App;
