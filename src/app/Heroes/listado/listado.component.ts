import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Hulk','Thor','Black Widow','Iroman'];
  heroeBorrado: string= '';
  // heroeBorrado: string= '' || false || null || undefined;

  borrarHeroe(){
    console.log('Borrando...');
    // this.heroes = [];
    // this.heroes.shift();
    this.heroeBorrado = this.heroes.shift()||'';
  }
}
