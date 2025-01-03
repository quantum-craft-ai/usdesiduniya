import { Component } from '@angular/core';
import { ChatAiComponent } from '../chat-ai/chat-ai.component';
import { MainCategoriesComponent } from "../main-categories/main-categories.component";

@Component({
  selector: 'app-home',
  imports: [ChatAiComponent, MainCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
