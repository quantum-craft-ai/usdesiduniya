import { Component } from '@angular/core';
import { ChatAiComponent } from '../chat-ai/chat-ai.component';
import { MainCategoriesComponent } from "../main-categories/main-categories.component";
import { StyleClassModule } from 'primeng/styleclass';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card'
import { LeftNavComponent } from "../left-nav/left-nav.component";
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  imports: [ChatAiComponent, 
            MainCategoriesComponent, 
            StyleClassModule, 
            MenuModule, 
            CardModule, 
            LeftNavComponent,
            FormsModule,
            InputGroup,
            InputGroupAddonModule,
            InputTextModule,
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible4: boolean = false;
}