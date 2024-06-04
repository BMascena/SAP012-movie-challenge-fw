import { Movie } from "src/models/Movie";
import { MetaData } from "src/models/MetaData";

export function formatMovie (apiMovieData: any): Movie{
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

      return {
    id: apiMovieData.id,
    title: apiMovieData.title,
    poster_path: apiMovieData.poster_path ? `${baseUrl}${apiMovieData.poster_path}` : 'https://image.tmdb.org/t/p/w500/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg',
    release_date: apiMovieData.release_date ? (apiMovieData.release_date).slice(0,4): 'Desconhecido',
    overview: apiMovieData.overview,
    vote_average: apiMovieData.vote_average,
  };
}


export function formatMetaData(apiMovieResp: any): MetaData{
  let transformedMovies = apiMovieResp.results.map((movie: any) => {
      return formatMovie(movie);
    })
  
    const formatedData: MetaData ={
      metaData: {
          pagination: {
            currentPage: apiMovieResp.page,
            totalPages: apiMovieResp.total_pages
          }
        },
      movies: transformedMovies
    }
    return formatedData;
}