import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  public produto: Produto;

  listaProdutos = [];

  constructor(
    private produtosService: ProdutosService
  ) {
    this.produto = new Produto();
    this.listaProdutos.push(this.produto);
    console.log("TCL: ProdutosComponent -> listaProdutos", this.listaProdutos)
  }

  ngOnInit() {
    let productsSubscribe = this.produtosService.testeApi().subscribe(res => {
      this.listaProdutos = res.json().items;
      console.log("TCL: ProdutosComponent -> ngOnInit -> listaProdutos", this.listaProdutos)
    });

  }
}

export class Produto {
  id: number = null;
  name: string = null;
  pictureUrl: string = null;
  description: string = null;
  price: string = null;
}