import { Obtenerrobots } from './arreglos';



describe('pruebas de arreglos', () => {
  it('Debe de retornar al menos tres robot', () => {

    const res = Obtenerrobots();

    expect( res.length ).toBeGreaterThanOrEqual(3);
  });
  it('Debe de retornar Megaman y Ultron ', () => {

    const res = Obtenerrobots();

    expect( res ).toContain('MegaMan');
    expect( res ).toContain('Ultron');
  });
});
