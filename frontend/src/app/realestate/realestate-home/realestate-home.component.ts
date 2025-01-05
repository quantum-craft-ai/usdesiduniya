import { Component } from '@angular/core';
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { LeftNavComponent } from "../../left-nav/left-nav.component";

@Component({
  selector: 'app-realestate-home',
  imports: [SearchBarComponent, LeftNavComponent],
  templateUrl: './realestate-home.component.html',
  styleUrl: './realestate-home.component.css'
})
export class RealestateHomeComponent {

}
