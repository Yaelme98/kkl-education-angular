import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IconCardModel } from 'src/app/utilities/models/IconCardModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() menuToggle = new EventEmitter();

  @Input() public prefix: string = '';
  @Input() public showStatus: boolean = true;
  @Input() public status: IconCardModel[] = [];

  public isOpen: boolean = true;

  public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
