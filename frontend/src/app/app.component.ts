import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { StyleClassModule } from 'primeng/styleclass';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, StyleClassModule, SpeedDialModule, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class AppComponent {
  title = 'frontend';
  items!: MenuItem[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.items = [
        {
            icon: 'pi pi-pencil',
            command: () => {
                this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            icon: 'pi pi-refresh',
            command: () => {
                this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            icon: 'pi pi-trash',
            command: () => {
                this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            icon: 'pi pi-upload',
            routerLink: ['/fileupload']
        },
        {
            icon: 'pi pi-external-link',
            target: '_blank',
            url: 'http://angular.io'
        }
    ];
  }

}
