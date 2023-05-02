import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemService} from '../item.service';
import {introMainItem} from '../main-item.model';

@Component({
  selector: 'intro-main-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent {

  @Output() itemAdded = new EventEmitter();

  @Input() items!: introMainItem[];
  @Input() item!: introMainItem;

  constructor(
    private itemService: ItemService,
  ) {}

  onSubmit() {
    this.itemService.addItem(this.item);
    this.itemAdded.emit();

  }


}
