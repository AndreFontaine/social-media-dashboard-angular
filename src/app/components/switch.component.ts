import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-switch-mode',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  @Input() darkModeActive: boolean;
  @Output() schemeChanged: EventEmitter<boolean> = new EventEmitter(true);

  public changeDarkMode(selected: boolean) {
    this.schemeChanged.emit(selected);
  }
}
