
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import { SaludoForm } from './SaludoForm';

afterEach(() => {
  cleanup();
});

describe('Pruebas de integracion de SaludoForm', () => {

  it('debe mostrar el formulario', () => {
    render(<SaludoForm />);

    expect(
      screen.getByRole('heading', {
        name: 'Formulario de saludo',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', { name: 'Nombre:' })
    ).toBeInTheDocument();
  });

  it('debe mostrar el saludo al ingresar un nombre', async () => {
    const user = userEvent.setup();

    render(<SaludoForm />);

    const input = screen.getByRole('textbox', {
      name: 'Nombre:',
    });

    const boton = screen.getByRole('button', {
      name: 'Saludar',
    });

    await user.type(input, 'Leonardo');
    await user.click(boton);

    expect(
      screen.getByText('Hola, Leonardo!')
    ).toBeInTheDocument();
  });

});
