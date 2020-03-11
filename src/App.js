import React from 'react';
import AppCss from './App.module.css';
import Navigation from './components/navigation';


function App(props) {
  return (
    <div className={AppCss.App}>
      <Navigation {...props}  ></Navigation>
    </div>
  );
}

export default App;
