import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { LeftNavComponent } from "../../left-nav/left-nav.component";

@Component({
  selector: 'app-learn-home',
  imports: [SearchBarComponent, LeftNavComponent],
  templateUrl: './learn-home.component.html',
  styleUrl: './learn-home.component.css'
})
export class LearnHomeComponent {

}
