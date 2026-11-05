
import { useState } from 'react';

export function SaludoForm() {
  const [nombre, setNombre] = useState<string>('');
  const [saludo, setSaludo] = useState<string>('');

  const handleSaludar = () => {
    setSaludo(`Hola, ${nombre}!`);
  };

  return (
    <div>
      <h2>Formulario de saludo</h2>

      <label htmlFor="nombre">Nombre:</label>

      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={handleSaludar}>
        Saludar
      </button>

      {saludo && <p>{saludo}</p>}
    </div>
  );
}
