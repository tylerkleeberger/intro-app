import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'intro-main-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent {

  @Output() itemAdded = new EventEmitter();

  name: string | undefined;
  description: string | undefined;

  onSubmit() {
    const newItem = {
      name: this.name,
      description: this.description
    };
    this.itemAdded.emit(newItem);
    this.name = '';
    this.description = '';
  }


}
