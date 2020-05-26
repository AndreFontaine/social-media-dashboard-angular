import { Component } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  cardList: Card[] = [
    {
      id: 1,
      userName: '@AndreFontaine',
      social: 'facebook',
      socialIcon: './assets/images/icon-facebook.svg',
      number: '1483',
      today: '12',
      todayIcon: './assets/images/icon-up.svg',
    },
    {
      id: 2,
      userName: '@AndreFontaine',
      social: 'twitter',
      socialIcon: './assets/images/icon-twitter.svg',
      number: '28k',
      today: '1229',
      todayIcon: './assets/images/icon-up.svg',
    },
    {
      id: 3,
      userName: '@__SrGonzalez',
      social: 'instagram',
      socialIcon: './assets/images/icon-instagram.svg',
      number: '6k',
      today: '121',
      todayIcon: './assets/images/icon-up.svg',
    },
    {
      id: 4,
      userName: '@Andrés González',
      social: 'youtube',
      socialIcon: './assets/images/icon-youtube.svg',
      number: '12K',
      today: '877',
      todayIcon: './assets/images/icon-up.svg',
    },
  ];
}
