import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingQueComponent } from './adding-que.component';

describe('AddingQueComponent', () => {
  let component: AddingQueComponent;
  let fixture: ComponentFixture<AddingQueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingQueComponent]
    });
    fixture = TestBed.createComponent(AddingQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
