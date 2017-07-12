import React, { Component } from 'react';
import load from '../../Pacman.svg';
// import mLoad from '../../Marvel.gif';
import './Loading.css'

class Loading extends Component {

  render() {
    return (
        <div className="Marvel_Logo">
            <img src={load} />
        </div>
    );
  }

}

export default Loading;