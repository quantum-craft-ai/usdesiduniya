import { Component, ViewEncapsulation, NgModule, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { StyleClassModule } from 'primeng/styleclass';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { LeftNavComponent } from "./left-nav/left-nav.component";
import { DrawerModule } from 'primeng/drawer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
        FooterComponent, 
        StyleClassModule, 
        SpeedDialModule, 
        ToastModule, 
        LeftNavComponent,
        DrawerModule,
        RouterModule,
        
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  items!: MenuItem[];
  fixedNavVisible: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    // this.items = [
    //     {
    //         label: 'add',
    //         icon: 'pi pi-pencil',
    //         command: () => {
    //             this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
    //         }
    //     },
    //     {
    //         icon: 'pi pi-refresh',
    //         command: () => {
    //             this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
    //         }
    //     },
    //     {
    //         icon: 'pi pi-trash',
    //         command: () => {
    //             this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
    //         }
    //     },
    //     {
    //         icon: 'pi pi-upload',
    //         routerLink: ['/fileupload']
    //     },
    //     {
    //         icon: 'pi pi-external-link',
    //         target: '_blank',
    //         url: 'http://angular.io'
    //     }
    // ];
  }
}
