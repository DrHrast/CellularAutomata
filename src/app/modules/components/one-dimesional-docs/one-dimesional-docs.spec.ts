import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDimesionalDocs } from './one-dimesional-docs';

describe('OneDimesionalDocs', () => {
  let component: OneDimesionalDocs;
  let fixture: ComponentFixture<OneDimesionalDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDimesionalDocs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDimesionalDocs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
