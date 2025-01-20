import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFormsComponent } from './acc-forms.component';

describe('AccFormsComponent', () => {
  let component: AccFormsComponent;
  let fixture: ComponentFixture<AccFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
