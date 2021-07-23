import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HelloWorld from './HelloWorld';

ReactDOM.render(<HelloWorld saludo={'my friend'}/>, document.getElementById('root'));
