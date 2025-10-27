import { Routes } from '@angular/router';
import { OneDPage } from './modules/pages/one-dpage/one-dpage';
import { DocsPage } from './modules/pages/docs-page/docs-page';
import { TwoDPage } from './modules/pages/two-dpage/two-dpage';
import { OneDimesionalDocs } from './modules/components/one-dimesional-docs/one-dimesional-docs';
import { TwoDimesionalDocs } from './modules/components/two-dimesional-docs/two-dimesional-docs';
import { ImportFileDocs } from './modules/components/import-file-docs/import-file-docs';
import { SortingAlgorithms } from './modules/pages/sorting-algorithms/sorting-algorithms';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'one-d' },
  { path: 'one-d', component: OneDPage },
  { path: 'two-d', component: TwoDPage },
  { path: 'sorting-algforithms', component: SortingAlgorithms },
  { path: 'docs', component: DocsPage,
    children: [
      { path: '1d-docs', component: OneDimesionalDocs },
      { path: '2d-docs', component: TwoDimesionalDocs },
      { path: 'import-docs', component: ImportFileDocs },
    ]
  },
];
