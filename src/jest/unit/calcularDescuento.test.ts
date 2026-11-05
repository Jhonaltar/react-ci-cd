
import { calcularDescuento } from './calcularDescuento';
import { describe, expect, test } from '@jest/globals';

describe('Pruebas de calcularDescuento', () => {

  test('no aplica descuento a compras menores de 100', () => {
    const resultado = calcularDescuento(50);

    expect(resultado).toBe(50);
  });

  test('aplica 10% de descuento a compras desde 100', () => {
    const resultado = calcularDescuento(200);

    expect(resultado).toBe(180);
  });

  test('aplica 20% de descuento a compras desde 500', () => {
    const resultado = calcularDescuento(600);

    expect(resultado).toBe(480);
  });

  test('aplica 10% exactamente en el limite de 100', () => {
    expect(calcularDescuento(100)).toBe(90);
  });

  test('aplica 20% exactamente en el limite de 500', () => {
    expect(calcularDescuento(500)).toBe(400);
  });

  test('lanza un error cuando el total es negativo', () => {
    expect(() => calcularDescuento(-50))
      .toThrow('El total no puede ser negativo');
  });

});
