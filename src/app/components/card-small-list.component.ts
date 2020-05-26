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
      id: 0,
      title: 'Page views',
      socialIcon: '/assets/images/icon-facebook.svg',
      number: '87',
      percentage: 2,
      percentageIcon: '/assets/images/icon-down.svg',
      class: '',
    },
    {
      id: 1,
      title: 'Likes',
      socialIcon: '/assets/images/icon-facebook.svg',
      number: '52',
      percentage: 2,
      percentageIcon: '/assets/images/icon-down.svg',
      class: 'danger',
    },
    {
      id: 2,
      title: 'Likes',
      socialIcon: '/assets/images/icon-instagram.svg',
      number: '5462',
      percentageIcon: '/assets/images/icon-up.svg',
      percentage: 2256,
      class: '',
    },
    {
      id: 3,
      title: 'Profile views',
      socialIcon: '/assets/images/icon-instagram.svg',
      number: '52k',
      percentageIcon: '/assets/images/icon-up.svg',
      percentage: 1375,
      class: '',
    },
    {
      id: 4,
      title: 'Retweets',
      socialIcon: '/assets/images/icon-twitter.svg',
      number: '117',
      percentageIcon: '/assets/images/icon-up.svg',
      percentage: 303,
      class: '',
    },
    {
      id: 5,
      title: 'Likes',
      socialIcon: '/assets/images/icon-twitter.svg',
      number: '507',
      percentageIcon: '/assets/images/icon-up.svg',
      percentage: 553,
      class: '',
    },
    {
      id: 6,
      title: 'Likes',
      socialIcon: '/assets/images/icon-youtube.svg',
      number: '107',
      percentageIcon: '/assets/images/icon-down.svg',
      percentage: 19,
      class: 'danger',
    },
    {
      id: 7,
      title: 'Total views',
      socialIcon: '/assets/images/icon-youtube.svg',
      number: '1407',
      percentageIcon: '/assets/images/icon-down.svg',
      percentage: 12,
      class: 'danger',
    },
  ];
}
