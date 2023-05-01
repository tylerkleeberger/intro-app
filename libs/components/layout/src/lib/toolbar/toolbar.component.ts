import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'intro-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {}
