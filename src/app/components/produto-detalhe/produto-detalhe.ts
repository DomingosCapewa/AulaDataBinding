import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
    @Input() nome = signal('');
    @Input() preco = signal(0);
    @Input() url = signal('');

    comprar() {
        alert(`${this.nome()} comprado por R$ ${this.preco()}`);
    }
}
