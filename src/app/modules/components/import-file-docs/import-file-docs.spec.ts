import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFileDocs } from './import-file-docs';

describe('ImportFileDocs', () => {
  let component: ImportFileDocs;
  let fixture: ComponentFixture<ImportFileDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportFileDocs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportFileDocs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
