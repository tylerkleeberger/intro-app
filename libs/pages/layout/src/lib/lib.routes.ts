import { Route } from '@angular/router';
import {LayoutPage} from './toolbar/layout.page';

export const pagesLayoutRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: LayoutPage},
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];
