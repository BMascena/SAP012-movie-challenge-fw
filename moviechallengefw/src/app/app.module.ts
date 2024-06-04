import { NgModule } from '@angular/core';  // Importa o decorator @NgModule do Angular, que define um módulo.
import { BrowserModule } from '@angular/platform-browser';  // Importa o BrowserModule, necessário para aplicações web.

import { AppComponent } from './app.component';  // Importa o componente raiz da aplicação.
import { AppRoutingModule } from './app-routing.module';  // Importa o módulo de roteamento da aplicação.
import { MovieCardComponent } from './layout/movie-card/movie-card.component';  // Importa o componente MovieCard.
import { MovieListComponent } from './layout/movie-list/movie-list.component';  // Importa o componente MovieList.
import { HomeComponent } from './layout/home/home.component';  // Importa o componente Home.
import { TheMovieDbService } from './shared/services/the-movie-db/the-movie-db.service';  // Importa o serviço TheMovieDbService.
import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule, necessário para fazer requisições HTTP.
import { PaginationComponent } from './layout/pagination/pagination.component';  // Importa o componente Pagination.

@NgModule({   // Decorator
  declarations: [  // Declaração dos componentes utilizados neste módulo. (Meta dados)
    AppComponent,  // Componente raiz da aplicação.
    MovieCardComponent,  // Componente que representa um cartão de filme.
    MovieListComponent,  // Componente que lista os filmes.
    HomeComponent,  // Componente da página inicial.
    PaginationComponent  // Componente de paginação.
  ],
  imports: [  // Importação dos módulos necessários para este módulo funcionar.
    BrowserModule,  // Módulo necessário para rodar a aplicação no navegador.
    AppRoutingModule,  // Módulo que gerencia o roteamento da aplicação.
    HttpClientModule  // Módulo necessário para fazer requisições HTTP.
  ],
  providers: [TheMovieDbService],  // Provedores de serviços, tornando o serviço TheMovieDbService disponível para injeção em toda a aplicação.
  bootstrap: [AppComponent]  // Componente raiz que será inicializado na aplicação.
})
export class AppModule { }

