import { Component } from '@angular/core';
import { CardSmall } from '../models/card-small.model';

@Component({
  selector: 'app-card-small-list',
  templateUrl: './card-small-list.component.html',
  styleUrls: ['./card-small-list.component.css'],
})
export class CardSmallListComponent {
  cardSmallList: CardSmall[] = [
    {
      id: 1,
      title: 'Likes',
      socialIcon: './images/icon-facebook.svg',
      number: '52',
      percentage: 2,
      percentageIcon: './images/icon-down.svg',
      class: '',
    },
    {
      id: 2,
      title: 'Likes',
      socialIcon: './images/icon-instagram.svg',
      number: '5462',
      percentageIcon: './images/icon-up.svg',
      percentage: 2256,
      class: '',
    },
    {
      id: 3,
      title: 'Profile views',
      socialIcon: './images/icon-instagram.svg',
      number: '52k',
      percentageIcon: './images/icon-up.svg',
      percentage: 1375,
      class: '',
    },
    {
      id: 4,
      title: 'Retweets',
      socialIcon: './images/icon-twitter.svg',
      number: '117',
      percentageIcon: './images/icon-up.svg',
      percentage: 303,
      class: '',
    },
    {
      id: 5,
      title: 'Likes',
      socialIcon: './images/icon-twitter.svg',
      number: '507',
      percentageIcon: './images/icon-up.svg',
      percentage: 553,
      class: '',
    },
    {
      id: 6,
      title: 'Likes',
      socialIcon: './images/icon-youtube.svg',
      number: '107',
      percentageIcon: './images/icon-down.svg',
      percentage: 19,
      class: 'danger',
    },
    {
      id: 7,
      title: 'Total views',
      socialIcon: './images/icon-youtube.svg',
      number: '1407',
      percentageIcon: './images/icon-down.svg',
      percentage: 12,
      class: 'danger',
    },
  ];
}
