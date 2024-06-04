import { Component, Input } from '@angular/core';  // Importa os módulos necessários do Angular.
import { Movie } from 'src/models/Movie';  // Importa a interface ou classe Movie do modelo de filmes.

@Component({
  selector: 'app-movie-list',  // Nome da tag HTML para instanciar este componente.
  templateUrl: './movie-list.component.html',  // Caminho do arquivo do template HTML.
  styleUrls: ['./movie-list.component.css']  // Caminho do arquivo de estilos CSS.
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];  // Define uma propriedade de entrada (input) que é uma lista de filmes.
}