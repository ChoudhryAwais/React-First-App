import React from 'react';
import logo from './logo.svg';
import './App.css';
import Value from './value.js';
import './value.css'

function App(props) {
return <h1 className='valuecss'>Hello {props.value}</h1>
}

export default App;
