// Importa a interface `Movie` do arquivo "Movie.ts" no mesmo diretório
import { Movie } from "./Movie"

// Define e exporta a interface `MetaData` para tipagem de objetos que contêm metadados e uma lista de filmes
export interface MetaData {
  // Define a propriedade `metaData` que contém informações adicionais sobre a resposta, como a paginação
  metaData: {
    // Define a propriedade `pagination` que contém detalhes sobre a paginação dos resultados
    pagination: {
      // `currentPage` indica a página atual dos resultados
      currentPage: number,
      // `totalPages` indica o número total de páginas disponíveis
      totalPages: number[]
    }
  },
  // Define a propriedade `movies`, que é uma array de objetos do tipo `Movie`
  movies: Movie[]
}

//Em Angular, um interface é uma ferramenta poderosa fornecida pelo TypeScript que ajuda a definir a estrutura de um objeto. Interfaces permitem que você defina contratos para objetos, garantindo que eles tenham certas propriedades e métodos, facilitando a manutenção do código e reduzindo erros.