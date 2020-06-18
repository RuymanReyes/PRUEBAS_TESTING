import { mensaje } from './string';


describe( 'Pruebas de strings', () => {
  it( 'Debe regresar un string', () => {
    const resp = mensaje( 'Ruyman' );

    expect( typeof resp ).toBe( 'string' );
  });

  it( 'Debe retornar un saludo con el nombre enviado', () => {
    const nombre = 'Ruyman';
    const resp = mensaje( nombre );

    expect( resp ).toContain( nombre  );
  });
})
