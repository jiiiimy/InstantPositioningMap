import React, {Component} from 'react';
import '../assets/App.css';
import SideArea from './side';
import MainArea from './main';

class App extends Component {
  render() {
    return (
      <div className="container _all">
        <SideArea />
        <MainArea />
      </div>
    ); 
  }
}

export default App;
