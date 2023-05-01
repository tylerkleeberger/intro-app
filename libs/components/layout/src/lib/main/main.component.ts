import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'intro-main-container',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
