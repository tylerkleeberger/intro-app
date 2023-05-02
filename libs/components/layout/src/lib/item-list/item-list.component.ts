import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {introMainItem} from '../main-item.model';
import {ItemService} from '../item.service';

@Component({
  selector: 'intro-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemListComponent implements OnInit{

  items: introMainItem[] = [];

  constructor(
    private itemService: ItemService,
  ) {}

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
