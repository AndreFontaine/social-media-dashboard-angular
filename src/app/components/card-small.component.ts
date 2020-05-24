import { Component, Input } from '@angular/core';
import { CardSmall } from '../models/card-small.model';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css'],
})
export class CardSmallComponent {
  @Input() cardSmall: CardSmall;
}
