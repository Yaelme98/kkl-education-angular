import { Component, Input } from '@angular/core';
import { IconCardModel } from 'src/app/utilities/models/IconCardModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public activeRoute: string = '';

  public topCards: IconCardModel[] = [
    {
      svgUrl: 'calendar',
      title: 'בדיקת זמינות',
      path: 'search',
    },
    {
      svgUrl: 'button',
      title: 'טיול חדש',
      path: 'search',
    },
  ];
  public bottomCards: IconCardModel[] = [
    {
      svgUrl: 'destination',
      title: 'הטיולים שלי',
      path: 'search',
    },
    {
      svgUrl: 'report',
      title: 'דוחות',
      path: 'search',
    },
  ];

  public prefix: string = 'education';
  @Input() public width: string = '150';
  @Input() public height: string = '150';

  constructor() {}
}
