import { ApiService } from './../../service/api-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component {

   vetor: string = '5,3,2,4,7,1,0,6';
   resultado?: string;

  constructor(private apiService: ApiService) {

  }

  ordenarVetor(){
    this.apiService.getVetorOrdenado(this.vetor).subscribe((resultado: any) => {
        this.resultado = resultado;
    })
  }

}
