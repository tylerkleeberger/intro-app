import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {introMainItem} from '../main-item.model';

@Component({
  selector: 'intro-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {



}
