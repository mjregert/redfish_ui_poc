import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSystemsComponent } from './power-systems.component';

describe('PowerSystemsComponent', () => {
  let component: PowerSystemsComponent;
  let fixture: ComponentFixture<PowerSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
