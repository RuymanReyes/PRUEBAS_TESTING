import { incrementar } from './numeros';


describe( 'Pruebas de números', () => {
  it( 'debe retornar 100 si el numero es mayor a 100', () => {

    const res = incrementar(300);

    expect( res ).toBe(100);
  });
  it( 'debe retornar el numero más uno si es menor que 100', () => {

    const res = incrementar(50);

    expect( res ).toBe(51);
  });
})
