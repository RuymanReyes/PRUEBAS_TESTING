import { Jugador } from './clases';



describe( 'Pruebas de clases', () => {
  const jugador = new Jugador();
  it(' debe retornar 80 de hp si recibe 20 de daño ', () => {
    // const jugador = new Jugador();

    const res = jugador.recibeDanio(20);

    expect( res ).toBe(80);
  });

  it(' debe retornar 80 de hp si recibe 20 de daño ', () => {
    // const jugador = new Jugador();

    const res = jugador.recibeDanio(50);

    expect( res ).toBe(50);
  });
});
