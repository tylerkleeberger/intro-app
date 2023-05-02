import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterLink } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ItemListComponent } from './item-list/item-list.component';
import { PushPipe } from '@rx-angular/template/push';
import { ItemFormComponent } from './item-form/item-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterLink, PushPipe, FormsModule],
  declarations: [
    ToolbarComponent,
    MainComponent,
    ItemListComponent,
    ItemFormComponent,
  ],
  exports: [
    ToolbarComponent,
    MainComponent,
    ItemListComponent,
    ItemFormComponent,
  ],
})
export class ComponentsLayoutModule {}
