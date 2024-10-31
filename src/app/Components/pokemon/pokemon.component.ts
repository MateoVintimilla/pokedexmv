import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemonId: number = 25;
  @Input({required:true}) solicitarImagen:string=""
  
  constructor() {
    this.actualizarPokemon(); // Carga la imagen inicial
  }

  anteriorPokemon(){
    if (this.pokemonId >1) { 
      this.pokemonId--;
      this.actualizarPokemon();
    }
  }

  siguientePokemon(){
    this.pokemonId++;
    this.actualizarPokemon(); 
  }

  actualizarPokemon() {
    this.solicitarImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`; 
  }
}