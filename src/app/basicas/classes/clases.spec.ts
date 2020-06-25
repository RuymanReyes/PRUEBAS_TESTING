import { Jugador } from './clases';



describe( 'Pruebas de clases', () => {

  beforeAll( () => {
    // console.log('beforeAll')
  });
  beforeEach( () => {
    // console.log('beforeEach')
    jugador.hp = 100;
  });
  afterAll( () => {
    // console.log('afterAll')
  });
  afterEach( () => {
    // console.log('AfterEach')
    // jugador.hp = 100;

  });



  let jugador = new Jugador();
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


  it(' debe retornar 0  de hp si recibe 100 de daño o más ', () => {
    // const jugador = new Jugador();

    const res = jugador.recibeDanio(125);

    expect( res ).toBe(0);
  });
});
