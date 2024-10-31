import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-graf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './graf.component.html',
  styleUrls: ['./graf.component.css']
})
export class GrafComponent {
  pokemonId: number = 25;
  ataque: number = 50;
  defensa: number = 40;
  maxStat: number = 100; 
  imagenPokemon: string = '';

  constructor() {
    this.actualizarPokemon();
  }

  anteriorPokemon() {
    if (this.pokemonId > 1) {
      this.pokemonId--;
      this.actualizarPokemon();
    }
  }

  siguientePokemon() {
    this.pokemonId++;
    this.actualizarPokemon();
  }

  actualizarPokemon() {
    this.ataque = Math.min(50 + (this.pokemonId % 30), this.maxStat);
    this.defensa = Math.min(40 + (this.pokemonId % 20), this.maxStat);

    
  }
}