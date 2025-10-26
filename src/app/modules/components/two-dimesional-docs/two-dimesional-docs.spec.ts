import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimesionalDocs } from './two-dimesional-docs';

describe('TwoDimesionalDocs', () => {
  let component: TwoDimesionalDocs;
  let fixture: ComponentFixture<TwoDimesionalDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDimesionalDocs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDimesionalDocs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
