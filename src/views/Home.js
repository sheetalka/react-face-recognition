import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Facial Recognition</h2>
        <li>
          <Link to="/photo">Recognise through Image</Link>
        </li>
        <br/>
        <li>
          <Link to="/camera">Recognise through Camera</Link>
        </li>
      </div>
    );
  }
}
