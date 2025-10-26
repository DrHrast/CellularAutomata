import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDForm } from './one-d-form';

describe('OneDForm', () => {
  let component: OneDForm;
  let fixture: ComponentFixture<OneDForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
