import React, { Component } from 'react';
import './App.css';
import fire from './fire'

import Nav from './components/Nav'
import Washer from './components/Washer'
import Dryer from './components/Dryer'
import Loading from './components/Loading'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      washers: [],
      dryers: [],
      timestamp: "",
      loaded: false
    }
  }

  componentDidMount() {
    let statusRef = fire.database().ref('9')
    statusRef.on('value', (snapshot) => {
      let obj = snapshot.val()
      let wash = Object.keys(obj).filter(key => key.includes("WASHER")).map(key => {
        let name = key.split(' ')
        let id = name[1]
        let type = name[2]
        type = type.replace(/[{()}]/g, '')
        return {
          id: id,
          type: type,
          status: obj[key]
        }
      })
      let dry = Object.keys(obj).filter(key => key.includes("DRYER")).map(key => {
        let name = key.split(' ')
        let id = name[1]
        let type = name[2]
        type = type.replace(/[{()}]/g, '')
        return {
          id: id,
          type: type,
          status: obj[key]
        }
      })
      let time = new Date(obj.timestamp).toLocaleString('en-SG')

      this.setState({
        washers: wash,
        dryers: dry,
        timestamp: time,
        loaded: true
      })
    })
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="App">
          <Nav></Nav>
          <div className="container-fluid">
            <Washer washers={this.state.washers} />
            <Dryer dryers={this.state.dryers} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Nav></Nav>
          <div className="container-fluid">
            <div className="my-auto">
              <div className="col">
                <Loading></Loading>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default App;
