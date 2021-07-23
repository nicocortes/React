import React from 'react';

const App = ({ name, edad }) => {
  console.log(edad);
  console.log(name);
  //   const nombre = 'Federico Martinez';

  return (
    //Esto no es HTML, es JSX.
    <div>
      <h1>Soy {name}</h1>
      <hr></hr>
      <p>Este es mi primer componente de React.</p>
      <p>Mi edad es: {edad}</p>
    </div>
  );
};

export default App;
