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
  }
  constructor() { }

  ngOnInit(): void {
  }

}
