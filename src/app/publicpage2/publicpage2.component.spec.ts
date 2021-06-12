import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicpage2Component } from './publicpage2.component';

describe('Publicpage2Component', () => {
  let component: Publicpage2Component;
  let fixture: ComponentFixture<Publicpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Publicpage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Publicpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
