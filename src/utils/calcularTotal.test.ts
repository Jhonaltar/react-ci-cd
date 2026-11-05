
import { describe, it, expect } from 'vitest';
import { calcularTotal } from './calcularTotal';

describe('Pruebas de calcularTotal', () => {

  it('debe calcular correctamente el total', () => {
    const resultado = calcularTotal(10, 3);

    expect(resultado).toBe(30);
  });

  it('debe devolver cero cuando la cantidad es cero', () => {
    const resultado = calcularTotal(10, 0);

    expect(resultado).toBe(0);
  });

  it('debe calcular correctamente valores decimales', () => {
    const resultado = calcularTotal(12.5, 2);

    expect(resultado).toBe(25);
  });

});
