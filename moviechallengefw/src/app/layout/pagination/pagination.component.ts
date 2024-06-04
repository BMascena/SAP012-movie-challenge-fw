import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number[] = [1,2,3,4,5]; // totalPages como array de números
  @Output() onSelectPage: EventEmitter<number> = new EventEmitter<number>();

  onPageSelect(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) { // Verifica se a página está dentro do intervalo válido
      this.onSelectPage.emit(page);
    }
  }

  get pages(): number[] {
    return this.totalPages; // Retorna o array de páginas diretamente
  }
}

// onPageSelect(page: number): void: Este é o cabeçalho da função onPageSelect. Ela recebe um parâmetro page do tipo number, que representa o número da página selecionada. O : void indica que a função não retorna nenhum valor (o tipo de retorno é void).

// if (page >= 1 && page <= this.totalPages) {: Este é um bloco condicional if que verifica se o número da página está dentro do intervalo válido. Ele verifica se a página é maior ou igual a 1 e menor ou igual ao número total de páginas (this.totalPages). Se a condição for verdadeira, significa que a página é válida e o bloco de código dentro do if será executado.

// this.onSelectPage.emit(page);: Dentro do bloco if, esta linha emite um evento utilizando o EventEmitter chamado onSelectPage. O método emit() é usado para enviar um valor (neste caso, o número da página) para qualquer componente que esteja ouvindo esse evento. Isso permite que outros componentes reajam à seleção de página e realizem ações com base nesse evento. 

// Inputs e Outputs:

// @Input() currentPage: number = 1;: Isso é como dizer "A página atual é a número 1". Você pode mudar isso para qualquer número de página.
// @Input() totalPages: number = 1;: Isso é como dizer "O livro tem um total de 1 página". Você pode mudar isso para o número total de páginas que o livro tem.
// @Output() onSelectPage: EventEmitter<number> = new EventEmitter<number>();: Isso é como um alto-falante que diz "Ei, alguém clicou na página 3!". Ele avisa qual página foi clicada.
// Selecionando uma Página:

// onPageSelect(page: number): void: Isso é como uma regra que diz "Se a página que você escolheu está entre a primeira e a última página, então avise a todos sobre isso!".
// Gerando os Números das Páginas:

// get pages(): number[]: Isso é como mágica que cria uma lista de números de página, como [1, 2, 3, 4, 5] se o livro tiver 5 páginas. Esta lista é usada para criar botões para cada página.
// Resumindo
// Imagine que você tem uma régua mágica com botões de números. Essa régua ajuda você a pular para qualquer página do livro facilmente. Cada vez que você clica em um botão de página, a régua grita "Página 3!", e o livro vira para essa página.