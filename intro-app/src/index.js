import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //Para importar estilos
import './index.css';
// import WebFlixApp from './webflix/WebFlixApp';
// import CounterApp from './counterapp/CounterApp';
import Asincronismo from './asincronismo/Asincronismo';
// import App from './App';

// import App from './App';

// que quiero renderizar, donde

ReactDOM.render(
  // <App name="Adolfo Rodriguez" edad={35} />
  // <WebFlixApp />
  // <CounterApp valor={0} />
  <Asincronismo />,
  document.getElementById('root')
);
