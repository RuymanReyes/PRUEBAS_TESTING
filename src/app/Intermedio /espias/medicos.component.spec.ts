import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, EMPTY, throwError } from 'rxjs';



describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicios = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicios);
    });


    it('Init: Debe cargar los medicos', () => {

      const medicos = ['medico1', 'medicos2', 'medicos3'];

      spyOn( servicios, 'getMedicos' ).and.callFake( () => {
        return from( [ medicos ] );
      });

      componente.ngOnInit();

      expect( componente.medicos.length ).toBeGreaterThan(0);
    });

    it( 'Debe de llamar al server para agregar un médico', () =>{

      const espia = spyOn( servicios, 'agregarMedico' ).and.callFake( medico => {
        return EMPTY;
      });

      componente.agregarMedico();

      expect ( espia ).toHaveBeenCalled();
    });

    it( 'Debe de arreglar un nuevo médico al arreglo de médicos', () => {
      const medicos = { id: 1, nombre: 'Juan' };

      spyOn( servicios, 'agregarMedico')
        .and.returnValue( from( [ medicos ] ));

      componente.agregarMedico();


      expect( componente.medicos.length ).toBe(1);
      expect( componente.medicos.indexOf(medicos) ).toBeGreaterThanOrEqual(0);


    });

    it( 'Si falta la adicción, la propiedad de mensajeError, debe de ser igual al error del componente', () => {
      const miError = ' no se pudo agregar médico';

      spyOn( servicios, 'agregarMedico' ).and. returnValue(throwError( miError ));

      componente.agregarMedico();

      expect( componente.mensajeError ).toBe(miError);
    });

    it( 'Debe llamar al server para borrar al médico', () => {
      spyOn(window, 'confirm' ).and.returnValue(true);

      const espia = spyOn( servicios, 'borrarMedico' ).and.returnValue( EMPTY );

      componente.borrarMedico('1');

      expect(espia ).toHaveBeenCalledWith('1');
    });

    it( 'NO Debe llamar al server para borrar al médico', () => {
      spyOn(window, 'confirm' ).and.returnValue(false);

      const espia = spyOn( servicios, 'borrarMedico' ).and.returnValue( EMPTY );

      componente.borrarMedico('1');

      expect(espia ).not.toHaveBeenCalledWith('1');
    });


});
