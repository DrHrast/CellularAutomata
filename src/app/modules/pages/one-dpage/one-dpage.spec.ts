import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDPage } from './one-dpage';

describe('OneDPage', () => {
  let component: OneDPage;
  let fixture: ComponentFixture<OneDPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneDPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
