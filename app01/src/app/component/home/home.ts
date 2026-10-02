import { Component, Output } from '@angular/core';
import { inject } from '@angular/core';
import { EnviaFormulario } from '../../service/Envia-formulario';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  idButton = 'btn1';
  private EnviaFormularioService = inject(EnviaFormulario);
  @Input() minhaProp!: string;
  @Output() emitindoNamo = new EventEmitter<string>();

  submit() {
    this.EnviaFormularioService.enviaIformacao('informação enviada');
    this.emitindoNamo.emit(this.idButton);
  }

  deveMostrarTitulo = false;
  listItens = ['item 01', 'item 02', 'item 03', 'item 04', 'item 05'];
  
  

 // meuBolean = false;
 // atualizaBolean(valor:boolean){
   // this.meuBolean = valor;
  //}
}
