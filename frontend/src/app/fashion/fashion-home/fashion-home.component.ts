import { Component } from '@angular/core';
import { LeftNavComponent } from "../../left-nav/left-nav.component";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-fashion-home',
  imports: [LeftNavComponent, SearchBarComponent, RatingModule],
  templateUrl: './fashion-home.component.html',
  styleUrl: './fashion-home.component.css'
})
export class FashionHomeComponent {

}
