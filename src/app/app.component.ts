import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  itemType: string = '';

  selectedItemType(itType: string) {
    console.log('Se ha seleccionado la lista de ' + itType);
    switch (itType) {
      case 'foods':
        this.itemType = 'food';
        break;
      case 'drinks':
        this.itemType = 'drink';
        break;
      default:
        this.itemType = 'animal';
        break;
    }
  }

}
