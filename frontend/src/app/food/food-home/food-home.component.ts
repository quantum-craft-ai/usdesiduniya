import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { LeftNavComponent } from "../../left-nav/left-nav.component";

@Component({
  selector: 'app-food-home',
  imports: [SearchBarComponent, LeftNavComponent],
  templateUrl: './food-home.component.html',
  styleUrl: './food-home.component.css'
})
export class FoodHomeComponent {

}
