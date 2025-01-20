import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesInsertComponent } from './mobiles-insert.component';

describe('MobilesInsertComponent', () => {
  let component: MobilesInsertComponent;
  let fixture: ComponentFixture<MobilesInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilesInsertComponent]
    });
    fixture = TestBed.createComponent(MobilesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
