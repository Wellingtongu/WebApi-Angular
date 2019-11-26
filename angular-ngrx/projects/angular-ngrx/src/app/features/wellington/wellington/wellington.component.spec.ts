import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellingtonComponent } from './wellington.component';

describe('WellingtonComponent', () => {
  let component: WellingtonComponent;
  let fixture: ComponentFixture<WellingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
