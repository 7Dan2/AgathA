import React from 'react';
import logo from './logo.svg';
import StartButton from './components/StartButton';
import MainForm from './components/MainForm';

import './App.css';
import { render } from '@testing-library/react';

function App() {
  render()
  {
    return (
    <div className="App">
      
      <header className="App-header">
        <div>
        {/* <img src="http://dailydropcap.com/images/A-7-cap.png" title="An other simple generator" align="left" alt="A"/> */}
        <img src="http://dailydropcap.com/images/A-6-cap.png" title="Daily Drop Cap by Jessica Hische" align="left" alt="A"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>

        <StartButton />
        
        </header>
        </div>
        
    );
  }
}

export default App;
