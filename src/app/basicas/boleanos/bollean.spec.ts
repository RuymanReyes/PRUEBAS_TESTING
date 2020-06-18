import { usaurioIngresado } from './boolean';


describe( 'Pruebas de Boolean', () => {
  it( 'debe de regresar true', () => {
    const res = usaurioIngresado();

    expect( res ).toBe( true );
    expect( res ).toBeTruthy();
  });
})
