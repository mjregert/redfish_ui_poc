import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolingSystemsComponent } from './cooling-systems.component';

describe('CoolingSystemsComponent', () => {
  let component: CoolingSystemsComponent;
  let fixture: ComponentFixture<CoolingSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolingSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
