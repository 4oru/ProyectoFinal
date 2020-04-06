import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioEditarPage } from './inventario-editar.page';

describe('InventarioEditarPage', () => {
  let component: InventarioEditarPage;
  let fixture: ComponentFixture<InventarioEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
