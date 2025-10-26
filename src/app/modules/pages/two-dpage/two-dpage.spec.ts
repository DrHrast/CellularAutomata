import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDPage } from './two-dpage';

describe('TwoDPage', () => {
  let component: TwoDPage;
  let fixture: ComponentFixture<TwoDPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
