import { Component } from '@angular/core';
import { ChatAiComponent } from '../chat-ai/chat-ai.component';
import { MainCategoriesComponent } from "../main-categories/main-categories.component";
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-home',
  imports: [ChatAiComponent, MainCategoriesComponent, StyleClassModule, MenuModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}