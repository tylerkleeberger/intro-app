import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterLink } from '@angular/router';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, RouterLink],
  declarations: [ToolbarComponent, MainComponent],
  exports: [ToolbarComponent, MainComponent],
})
export class ComponentsLayoutModule {}
