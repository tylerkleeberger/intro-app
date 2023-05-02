import {Injectable} from '@angular/core';
import {introMainItem} from './main-item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  private items: introMainItem[] = [
    new introMainItem(
      'Item 1',
      'This is the first item',
    ),
    new introMainItem(
      'Item 2',
      'This is the second item',
    ),
  ]



  getItems() {
    return this.items.slice();
  }

  addItem(item: introMainItem) {
    this.items.push(item);
  }

}
