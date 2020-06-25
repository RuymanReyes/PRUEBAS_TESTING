import { IncrementadorComponent } from './incrementador.component';



describe( 'incrementar Component Unit', () => {

  let component: IncrementadorComponent;
  beforeEach( () =>  component = new IncrementadorComponent() );

  it( 'No debe de pasara de 100', () => {
      component.progreso = 50;

      component.cambiarValor( 5 );

      expect( component.progreso ).toBe(55);

  });
});
