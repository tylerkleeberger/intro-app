import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pagesLayoutRoutes } from './lib.routes';
import { LayoutPage } from './toolbar/layout.page';
import {ComponentsLayoutModule} from '~introduction/components/layout';
import {PushPipe} from '@rx-angular/template/push';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesLayoutRoutes),
    ComponentsLayoutModule,
    PushPipe,
  ],
  declarations: [LayoutPage],
  exports: [LayoutPage],
})
export class PagesLayoutModule {}
