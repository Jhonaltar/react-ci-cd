
export function calcularDescuento(total: number): number {
  if (total < 0) {
    throw new Error('El total no puede ser negativo');
  }

  if (total >= 500) {
    return total * 0.8;
  }

  if (total >= 100) {
    return total * 0.9;
  }

  return total;
}
