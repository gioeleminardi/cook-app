import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTab: string = 'recipes';

  onSelectedTab(tab: string) {
    this.selectedTab = tab;
    console.log(`SelectedTab: ${this.selectedTab}`);
  }

}
