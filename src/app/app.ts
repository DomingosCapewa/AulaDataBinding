import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';


//mudanças feitas serão refletidas automáticamente

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdutoDetalhe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nomeProduto = signal("Carro esportivo");
  precoDoProduto = signal(20);
  urlDoProduto = signal('https://assets.bridgestonetire.com/content/dam/consumer/bst/la/co/tips/2022/tecnologia-de-llantas/deportivo.jpg');

  mostrarAlerta(){
    alert('Produto comprado!');

  }
}
