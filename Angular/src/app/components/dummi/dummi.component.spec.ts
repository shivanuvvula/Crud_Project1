import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummiComponent } from './dummi.component';

describe('DummiComponent', () => {
  let component: DummiComponent;
  let fixture: ComponentFixture<DummiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummiComponent]
    });
    fixture = TestBed.createComponent(DummiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
