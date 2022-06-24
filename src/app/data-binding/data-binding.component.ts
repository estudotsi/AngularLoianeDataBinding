import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "teste.com";
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/200';
  maxCaracteres: number = 30;
  contadorCaracteres: number = 0;
  valorAtual: string = "";
  valorSalvo: any;
  isMouseOver: Boolean = false;
  nome: string = "abc";
  pessoa: any = {
    nome: "def",
    idade: 30,
    peso: 70.8,
    end:{
      rua: "Carapocaia"
    } 
  }
  nomeDoCurso: string = "angular";
  valorInicial = 15;
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão clicado !');
  }
  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.contadorCaracteres = (<HTMLInputElement>evento.target).value.length;
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }
  salvarValor(valor: any){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
