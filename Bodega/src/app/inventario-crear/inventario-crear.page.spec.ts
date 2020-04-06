import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioCrearPage } from './inventario-crear.page';

describe('InventarioCrearPage', () => {
  let component: InventarioCrearPage;
  let fixture: ComponentFixture<InventarioCrearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioCrearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioCrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
