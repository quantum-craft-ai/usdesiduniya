import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccHomePageComponent } from './acc-home-page.component';

describe('AccHomePageComponent', () => {
  let component: AccHomePageComponent;
  let fixture: ComponentFixture<AccHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
