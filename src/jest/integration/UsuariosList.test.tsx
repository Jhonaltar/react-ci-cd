
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { UsuariosList } from './UsuariosList';
import { obtenerUsuarios } from './usuarios.service';

jest.mock('./usuarios.service', () => ({
  obtenerUsuarios: jest.fn(),
}));

const obtenerUsuariosMock = jest.mocked(obtenerUsuarios);

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe('Pruebas de integracion de UsuariosList', () => {

  test('muestra un mensaje mientras carga', () => {
    obtenerUsuariosMock.mockReturnValue(
      new Promise(() => {})
    );

    render(<UsuariosList />);

    expect(
      screen.getByText('Cargando usuarios...')
    ).toBeInTheDocument();
  });

  test('muestra los usuarios cuando la API responde', async () => {
    obtenerUsuariosMock.mockResolvedValue([
      {
        id: 1,
        name: 'Andres',
        email: 'andres@test.com',
      },
      {
        id: 2,
        name: 'Rodrigo',
        email: 'rodrigo@test.com',
      },
    ]);

    render(<UsuariosList />);

    expect(
      await screen.findByText('Andres - andres@test.com')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Rodrigo - rodrigo@test.com')
    ).toBeInTheDocument();

    expect(obtenerUsuariosMock).toHaveBeenCalledTimes(1);
  });

  test('muestra un mensaje cuando la API falla', async () => {
    obtenerUsuariosMock.mockRejectedValue(
      new Error('Error de conexion')
    );

    render(<UsuariosList />);

    expect(
      await screen.findByRole('alert')
    ).toHaveTextContent(
      'No se pudieron cargar los usuarios'
    );
  });

});
