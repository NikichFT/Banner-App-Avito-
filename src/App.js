import React from 'react';
import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import View from './components/View/View';

class App extends React.Component {

  state = {
    visibility: 'hidden',
    width: '530px',
    height: '530px',
    angle: '20px',
    color: '#5ba3b6',
    textSize: '36px',
    textColor: '#fff',
    font: `'Open Sans Condensed', sans-serif`,
    background: 'https://i.pinimg.com/originals/9d/2e/52/9d2e5273863fe41759a4d25b556a2e78.png',
    moveMode: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '150px 300px'
  }

  changeVisibility = (visibility) => {
    this.setState({visibility})
  }
  
  changeWidth = (width) => {
    this.setState({width});
  }
  changeHeight = (height) => {
    this.setState({height});
  }
  changeAngle = (angle) => {
    this.setState({angle});
  }
  changeColor = (color) => {
    this.setState({color});
  }
  changeTextSize = (textSize) => {
    this.setState({textSize});
  }
  changeTextColor = (textColor) => {
    this.setState({textColor});
  }
  changeBackground = (background) => {
    this.setState({background});
  }
  changeFont = (font) => {
    this.setState({font});
  }
  changeMoveMode = (moveMode) => {
    this.setState({moveMode});
  }
  changeBackgroundPosition = (backgroundPosition) => {
    this.setState({backgroundPosition});
  }
  changeBackgroundRepeat = (backgroundRepeat) => {
    this.setState({backgroundRepeat});
  }

  render() {
    return (
       <div className="wrapper">
         <Toolbar state={this.state} changeMoveMode={this.changeMoveMode} changeBackground={this.changeBackground} visibility = {this.state.visibility} changeVisibility = {this.changeVisibility}/>
         <SettingsPanel 
         state={this.state}
         changeWidth={this.changeWidth}
         changeHeight={this.changeHeight}
         changeAngle={this.changeAngle}
         changeColor={this.changeColor}
         changeTextSize={this.changeTextSize}
         changeTextColor={this.changeTextColor}
         changeFont={this.changeFont}
         visibility = {this.state.visibility}
         changeBackgroundPosition = {this.changeBackgroundPosition} 
         changeBackgroundRepeat = {this.changeBackgroundRepeat}/>
         <View 
         state={this.state}/>
       </div>
       )
  };
}

export default App;
