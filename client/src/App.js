import React from 'react';
import AppRouter from './routers/AppRouter';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
        <>
          <AppRouter />
        </>
    );
  };
}

export default App;
