
describe('Pruebas E2E con Cypress', () => {
  it('debe abrir correctamente nuestra aplicacion React', () => {
    cy.visit('/');

    cy.contains('Laboratorio de pruebas E2E')
      .should('be.visible');
  });
});

describe('Pruebas E2E del carrito de compras', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('debe abrir correctamente la aplicacion React', () => {
    cy.contains('Laboratorio de pruebas E2E')
      .should('be.visible');
  });

  it('debe agregar un producto al carrito', () => {
    cy.contains('button', 'Agregar Teclado').click();

    cy.contains('Mi carrito')
      .should('be.visible');

    cy.contains('button', 'Eliminar Teclado')
      .should('be.visible');

    cy.get('[data-testid="total"]')
      .should('have.text', 'Total: $45');
  });

  it('debe agregar varios productos y calcular el total', () => {
    cy.contains('button', 'Agregar Teclado').click();
    cy.contains('button', 'Agregar Mouse').click();
    cy.contains('button', 'Agregar Monitor').click();

    cy.get('[data-testid="total"]')
      .should('have.text', 'Total: $250');
  });

  it('debe eliminar un producto y actualizar el total', () => {
    cy.contains('button', 'Agregar Teclado').click();
    cy.contains('button', 'Agregar Mouse').click();

    cy.get('[data-testid="total"]')
      .should('have.text', 'Total: $70');

    cy.contains('button', 'Eliminar Teclado').click();

    cy.contains('button', 'Eliminar Teclado')
      .should('not.exist');

    cy.get('[data-testid="total"]')
      .should('have.text', 'Total: $25');
  });

  it('debe mostrar un mensaje cuando el carrito esta vacio', () => {
    cy.contains('El carrito está vacío')
      .should('be.visible');

    cy.get('[data-testid="total"]')
      .should('have.text', 'Total: $0');
  });

});
