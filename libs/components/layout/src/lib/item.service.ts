import {Injectable} from '@angular/core';
import {Item} from './main-item.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

private items: Item[] = [
  {
    id: 1,
    name: 'Item 1',
    description: 'This is item 1',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'This is item 2',
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'This is item 3',
  }
]


  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  addItem(item: Item) {
    this.items.push(item);
  }

}
