import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);
  const [mensajeError, setMensajeError] = useState(''); // Estado para el mensaje de error

  const sumarContador = () => {
    if (numClics < 25) {
      setNumClics(numClics + 1);
      setMensajeError(''); // Limpiar el mensaje de error si se regresa al rango
    } else {
      setMensajeError('No puedes exceder el valor máximo de 25.');
    }
  };

  const restarContador = () => {
    if (numClics > -25) {
      setNumClics(numClics - 1);
      setMensajeError(''); // Limpiar el mensaje de error si se regresa al rango
    } else {
      setMensajeError('No puedes exceder el valor mínimo de -25.');
    }
  };

  return (
    <div className='App'>
      <div className='contenedor-principal'> 
        <Contador numClics={numClics} />
        <Boton 
          texto='+'
          esBotonDeClic={true}
          manejarClic={sumarContador} />
        <Boton 
          texto='-'
          esBotonDeClic={false}
          manejarClic={restarContador} />
        {/* Mostrar el mensaje de error si existe */}
        {mensajeError && <p className='mensaje-error'>{mensajeError}</p>}
        <h1>José Luis Raymundo Mateo</h1>    
        <h2>ID: 000150571</h2>   
      </div>
    </div>
  );
}

export default App;
