import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAdminComponent } from './private-admin.component';

describe('PrivateAdminComponent', () => {
  let component: PrivateAdminComponent;
  let fixture: ComponentFixture<PrivateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
