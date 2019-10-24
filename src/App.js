import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Bilu from './Components/Bilu/Bilu';


class App extends Component {

  state = { isApp: false }

  appSwitchHandler = () => {
    let appIs = !this.state.isApp
    console.log(appIs)
    this.setState({
      isApp: appIs
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.isApp ? <Bilu nav={this.appSwitchHandler.bind(this)} /> : <Main nav={this.appSwitchHandler.bind(this)} />}
        <Footer />
      </div>
    );
  }
}

export default App;
