import React from 'react';
import SideMenu from '../SideMenu/SideMenu';
import Tasks from '../Tasks/Tasks';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="page">
        <SideMenu />
        <Tasks />
      </div>
    )
  }


}

export default App;
