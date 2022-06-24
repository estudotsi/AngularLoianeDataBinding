import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input('valor') valor: number = 0;
  
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef  = {} as ElementRef;;

  incrementa(){
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor})
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
