import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Item} from '../main-item.model';
import {ItemService} from '../item.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'intro-main-container',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {

  public items: Item[] = [];

  constructor(
    private itemService: ItemService,
  ) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems()
      .subscribe((items: Item[]) => {
      this.items = items;
    });
  }


  addItem(item: Item) {
    this.itemService.addItem(item)
  }
}
