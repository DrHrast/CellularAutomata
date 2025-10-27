import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingAlgorithms } from './sorting-algorithms';

describe('SortingAlgorithms', () => {
  let component: SortingAlgorithms;
  let fixture: ComponentFixture<SortingAlgorithms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingAlgorithms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingAlgorithms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
