import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecComponent } from './edit-rec.component';

describe('EditRecComponent', () => {
  let component: EditRecComponent;
  let fixture: ComponentFixture<EditRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecComponent]
    });
    fixture = TestBed.createComponent(EditRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
