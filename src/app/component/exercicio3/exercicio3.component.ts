import { ApiService } from './../../service/api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component {

  numero: number = 5;
  resultado?: string;

  constructor(private apiService: ApiService) {

  }

  calcularFatorial(){
     this.apiService.getFatorial(this.numero).subscribe((resultado: any) => {
       this.resultado = resultado;
     })
  }
}
