import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import logo from './assets/chuck.png'
import {
  AppBody, 
  AppHeader, 
  AppLogo, 
  AppTitle, 
  AppIntro, 
  AppContent,
  AppButton
} from './components';
import './App.css';
import { ChuckFactFetcher } from './chuckfetcher';

// Ugly way to get rid of html entities in responses
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      fact: "FETCHING FACT...", 
      fading: ""
    };
    this.onLogoClick = this.onLogoClick.bind(this);
  }

  fetchChuckFact = function() {
    ChuckFactFetcher((response) => {
      this.setState({ fact: decodeHtml(response.data.value.joke),
                      fading: "in" })
    },
    () => {
      this.setState({ fact: "FACT FREE!" })
    })
  }

  onLogoClick = function() {
    this.setState({fading: "out"});
    this.fetchChuckFact();
  }

  componentDidMount() {
    this.setState({fading: "out"});
    this.fetchChuckFact();
  }

  render() {
    return (
      <AppBody>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle className="App-title">LEARN YOU SOME CHUCK</AppTitle>
        </AppHeader>
        <AppContent>
          <AppIntro fade={this.state.fading}>
            {this.state.fact}
          </AppIntro>
        </AppContent>
        <AppButton onClick={this.onLogoClick}>Next Fact</AppButton>
      </AppBody>
    );
  }
}

export default App;
