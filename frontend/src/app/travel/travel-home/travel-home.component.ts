import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { LeftNavComponent } from "../../left-nav/left-nav.component";

@Component({
  selector: 'app-travel-home',
  imports: [SearchBarComponent, LeftNavComponent],
  templateUrl: './travel-home.component.html',
  styleUrl: './travel-home.component.css'
})
export class TravelHomeComponent {

}
