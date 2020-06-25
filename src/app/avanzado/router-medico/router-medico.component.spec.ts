import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  class FakeRouter {
  navigate( params ) {
  }
}

  class FAkeActivatedRoute {
  // params = EMPTY;
  private subject = new Subject();

  push( valor ) {
    this.subject.next( valor );
  }

  get params() {
    return this.subject.asObservable();

  }
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [ { provide: Router, useClass: FakeRouter }, { provide: ActivatedRoute, useClass: FAkeActivatedRoute } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' Debe redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate');
    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( [ 'medico', '123'] );
  });

  it( 'Debe colocar el id = nuevo', () => {

    component = fixture.componentInstance;
    const activateRouter: FAkeActivatedRoute = TestBed.get( ActivatedRoute );

    activateRouter.push( { id: 'nuevo' } );

    expect( component.id  ).toBe( 'nuevo' );
  })


});
