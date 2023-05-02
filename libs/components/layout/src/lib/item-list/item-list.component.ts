import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../main-item.model';

@Component({
  selector: 'intro-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent {

  @Input() public items: Item[] = [];
  @Output() public addItem: EventEmitter<Item> = new EventEmitter<Item>();


}
