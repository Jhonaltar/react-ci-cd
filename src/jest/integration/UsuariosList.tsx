
import { useEffect, useState } from 'react';
import {
  obtenerUsuarios,
  type Usuario,
} from './usuarios.service';

export function UsuariosList() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    obtenerUsuarios()
      .then((data) => {
        setUsuarios(data);
      })
      .catch(() => {
        setError('No se pudieron cargar los usuarios');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <div>
      <h2>Lista de usuarios</h2>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
