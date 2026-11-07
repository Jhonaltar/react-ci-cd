
import { useState } from 'react';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 45 },
  { id: 2, nombre: 'Mouse', precio: 25 },
  { id: 3, nombre: 'Monitor', precio: 180 },
];

export function CarritoCompras() {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarProducto = (index: number) => {
    setCarrito((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.precio,
    0
  );

  return (
    <section>
      <h2>Carrito de compras</h2>

      <h3>Productos disponibles</h3>

      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}

            <button
              type="button"
              onClick={() => agregarProducto(producto)}
            >
              Agregar {producto.nombre}
            </button>
          </li>
        ))}
      </ul>

      <h3>Mi carrito</h3>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={`${producto.id}-${index}`}>
              {producto.nombre} - ${producto.precio}

              <button
                type="button"
                onClick={() => eliminarProducto(index)}
              >
                Eliminar {producto.nombre}
              </button>
            </li>
          ))}
        </ul>
      )}

      <p data-testid="total">
        Total: ${total}
      </p>
    </section>
  );
}
