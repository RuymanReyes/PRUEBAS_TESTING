import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';



describe( 'Formulario', () => {

  let componente: FormularioRegister;

  beforeEach( () => {
    componente = new FormularioRegister( new FormBuilder() );
  });

  it( 'debe de crear un formulario con dos campos ', () => {
    expect( componente.form.contains('email') ).toBeTruthy();
    expect( componente.form.contains('password') ).toBeTruthy();
  });

  it( 'EL email debe de ser obligatios', () => {
    const control = componente.form.get('email'); // Tiene en esta parte todas las propiedades y objetos

    control.setValue(''); // Darle un valor a ese campo

    expect( control.valid ).toBeFalsy();
  });

  it( 'EL email debe de ser email valido', () => {
    const control = componente.form.get('email');
    control.setValue('fernando@prueba.es');

    expect( control.valid ).toBeTruthy();
  });
});
