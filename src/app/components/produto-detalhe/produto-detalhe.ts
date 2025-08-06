import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
    @Input() nomeDoProduto = signal('');
    @Input() precoDoProduto = signal(0);
    @Input() urlDoProduto = signal('');
}
