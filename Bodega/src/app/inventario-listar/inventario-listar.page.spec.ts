import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioListarPage } from './inventario-listar.page';

describe('InventarioListarPage', () => {
  let component: InventarioListarPage;
  let fixture: ComponentFixture<InventarioListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioListarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
