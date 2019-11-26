import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiagoComponent } from './hiago.component';

describe('HiagoComponent', () => {
  let component: HiagoComponent;
  let fixture: ComponentFixture<HiagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
