import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCComponent } from './input-c.component';

describe('InputCComponent', () => {
  let component: InputCComponent;
  let fixture: ComponentFixture<InputCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
