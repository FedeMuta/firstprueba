import { Component } from '@angular/core';
import { PortfolioDataService } from 'src/app/portfolio-data.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Icono } from 'src/app/interfaces';

@Component({
  selector: 'app-icono',
  templateUrl: "./Icono.component.html",
  styleUrls: ['./Icono.component.css'] 
})

export class IconoComponent {
  iconos = this.getIconos(); /* obtengo los iconos */
    
  constructor(private dataService: PortfolioDataService) {}

  isLogged() {
    return this.dataService.isLoggedIn();
  }

  getIconos() {
    return this.dataService.getIconosByUserId(); /* obtengo los iconos del servicio de datos */
  }

  addIcono(icono: Icono) { 
    this.dataService.addIcono(icono);
  }

  deleteIcono(index: number, event: Event) { 
    event.preventDefault();
    this.dataService.deleteIcono(index);
    this.iconos = this.getIconos();
  }

  updateIcono(index: number, icono: Icono) {
    this.dataService.updateIcono(index, icono);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.iconos, event.previousIndex, event.currentIndex);
  }
}
