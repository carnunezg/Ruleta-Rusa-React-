import React, { useState } from 'react';

const RuletaRusa = () => {
  const [mensaje, setMensaje] = useState('Haz clic en el gatillo para probar tu suerte');
  const [isPlaying, setIsPlaying] = useState(true);//para deshabilitar el boton gatillo
  const [color, setColor] = useState('black');
  const [loading, setLoading] = useState(false); // Cambiar a booleano
  const bulletChamber = Math.floor(Math.random() * 6) + 1; // Bala en la cámara

  // Hacer clic
  const handleClick = () => {
    if (!isPlaying) return; //para deshabilitar el boton gatillo

    setLoading(true); // Iniciar el estado de carga
    const currentChamber = Math.floor(Math.random() * 6) + 1; // Cámara actual

    // Simular un retraso de carga
    setTimeout(() => {
      if (currentChamber === bulletChamber) {
        setMensaje(`¡Perdiste! La bala estaba en la cámara "${currentChamber}"`);
        setIsPlaying(false);
        setColor('red');
      } else {
        setMensaje(`¡Sobreviviste! La cámara "${currentChamber}" está vacía.`);
        setColor('green');
      }
      setLoading(false); // Finalizar el estado de carga
    }, 1000); // Simulación de 1 segundos de retraso
  };

  const resetGame = () => {
    setMensaje('Haz clic en el gatillo para probar tu suerte');
    setColor('black');
    setIsPlaying(true); //para deshabilitar el boton gatillo
    setLoading(false); // Asegurarse de que el spinner esté oculto al reiniciar
  };

  return (
    <div className='d-flex justify-content-center' style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className='d-flex justify-content-center w-50 card m-5'>
        <h1 className='text-primary'>Ruleta Rusa</h1>
        <p style={{ color: loading ? 'grey' : color, fontSize: mensaje.includes('¡Perdiste!') ? '20px' : '16px' }}>
          {loading ? (
            <div>
              <span className='spinner-border spinner-border-sm' 
              role='status' 
              aria-hidden='true'
              ></span>
              {' '}Cargando...
            </div>
          ) : (
            mensaje
          )}
        </p>
        <div className='p-2'>
          <button
            className='btn btn-primary m-2'
            onClick={handleClick}
            disabled={loading || !isPlaying} // Deshabilitar el botón cuando está cargando
          >
            Gatillo
          </button>
          <button
            className='btn btn-warning m-2'
            onClick={resetGame}
            style={{ marginLeft: '10px' }}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RuletaRusa;
