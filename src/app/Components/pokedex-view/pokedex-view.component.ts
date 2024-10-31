import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GrafComponent } from '../graf/graf.component';


@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent,GrafComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'; // Empieza con el Pokémon 1
  private pokemonNumber: number = 0;
  private maxPokemon: number = 151; 
  pokemonId:number=0;
  
 
  handlePokemon(event:any){
    this.pokemonId+= event;
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }
  
  cambiarPokemon() {
  this.pokemonNumber++;
  
  if (this.pokemonNumber > this.maxPokemon) {
  this.pokemonNumber = 26;
  }
  
  
  this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonNumber}.png`;
  }
  
  }