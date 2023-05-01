import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {introMainItem} from '../main-item.model';

@Component({
  selector: 'intro-main-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent {

  currentItem: introMainItem = {name: '', description: ''};
  originalItem = '';

  @Input() set item(value: introMainItem) {
    if(value) this.originalItem = value.name;
    this.currentItem = {...value}
  }

  @Output() addItem = new EventEmitter();
  @Output() cancelItem = new EventEmitter();



}
