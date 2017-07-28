import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navBarTabClickEvent: EventEmitter<string>;

  constructor() {
    this.navBarTabClickEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  onSelect(tab: string) {
    this.navBarTabClickEvent.emit(tab);
  }

}
