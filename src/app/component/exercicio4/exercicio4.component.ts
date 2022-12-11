import { ApiService } from './../../service/api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component {

    numero: number = 10;
    resultado?: string;

    constructor(private apiService: ApiService) {

    }

    calcularMultiplos(){
      this.apiService.getMultiplos(this.numero).subscribe((resultado: any) => {
        this.resultado = resultado;
      })
    }
}
