import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

    heroes: string[] = ['SpiderMan','Superman','Batman','Pepe'];
    heroeBorrado: string = '';

    borrarHeroe(){
        console.log('borrando...');
        this.heroeBorrado = this.heroes.shift() || '';

        //this.heroes = this.heroes.slice(1);
    }

}
