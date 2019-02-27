import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleTicker from './title-ticker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "👩‍ Mary had a little lamb 🐑"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <input type = "text" value = {this.state.title} onChange = {(e)=>{
              console.log(this.state.title)
              this.setState({title:e.target.value})
            }} />
          <TitleTicker title = {this.state.title} step = {100}/>
        </header>
      </div>
    );
  }
}

export default App;
