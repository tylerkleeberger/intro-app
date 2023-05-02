import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: 'app',
    loadChildren: () => import('~introduction/pages/layout').then(m => m.PagesLayoutModule),
  },
  {
    path: '', redirectTo: 'app', pathMatch: 'full'
  }
];
