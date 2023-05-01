import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterLink} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ],
})
export class ComponentsLayoutModule {}
