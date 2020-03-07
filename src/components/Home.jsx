import React, { Component } from 'react';
import MLClassifierUI from 'ml-classifier-ui';
import Header from './header';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="hero is-light is-bold first">
            <div className="container">
                <div className="section">
                    <div className="title">
                        Train data
                    </div>
                    <div className="box">
                        <MLClassifierUI/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
