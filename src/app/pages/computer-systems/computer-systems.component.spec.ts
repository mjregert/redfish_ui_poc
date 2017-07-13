import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSystemsComponent } from './computer-systems.component';

describe('ComputerSystemsComponent', () => {
  let component: ComputerSystemsComponent;
  let fixture: ComponentFixture<ComputerSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
