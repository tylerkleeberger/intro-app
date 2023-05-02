import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemService} from '../item.service';
import {NgForm} from '@angular/forms';
import {Item} from '../main-item.model';

@Component({
  selector: 'intro-main-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent {

@Input() public item: Item = { id: 0, name: '', description: '' };
@Output() public newItem = new EventEmitter<Item>();
  constructor(
    private itemService: ItemService,
  ) {}

  addNewItem(value: Item) {
    this.newItem.emit(value);
  }


}
