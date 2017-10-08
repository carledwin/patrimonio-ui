import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

import { ItemService } from './../item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  /*
  itens=[
    {etiqueta:'AA1234', descricao:'Notebook', dataAquisicao:new Date()}
    ,{etiqueta:'BB9876', descricao:'Mouse', dataAquisicao:new Date()}
  ]
  */
  itens = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    /*
      subscribe = para não esperar/travar a aplicação aguardando a resposta da requisição 
      dados => - para capturar os dados da resposta da requisição
    */
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  submitToAdicionar(frm: FormControl){
    console.log(frm.value);

    /*subscribe - para ser uma chamada assincrona
      () => - para nao esperar/receber nada da resposta da requisicao 
    */
    
    this.itemService.adicionar(frm.value).subscribe(() => {
      frm.reset();
      this.consultar();
    });
  }

}
