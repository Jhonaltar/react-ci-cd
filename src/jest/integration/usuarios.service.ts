
export interface Usuario {
  id: number;
  name: string;
  email: string;
}

export async function obtenerUsuarios(): Promise<Usuario[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (!response.ok) {
    throw new Error('Error al obtener usuarios');
  }

  return response.json();
}
