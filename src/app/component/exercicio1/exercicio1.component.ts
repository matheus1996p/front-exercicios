import { ApiService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  totalEleitores: number = 1000;
  votosValidos: number = 800;
  votosBrancos: number = 150;
  votosNulos: number = 80;

  resultado?: string;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {

  }

  calcularVotosValidos(){
    this.apiService.getVotosValidos(this.totalEleitores, this.votosValidos).subscribe((resultado: any) => {
        this.resultado = resultado + '% de votos válidos';
    })
  }

  calcularVotosBrancos(){
    this.apiService.getVotosBrancos(this.totalEleitores, this.votosBrancos).subscribe((resultado: any) => {
        this.resultado = resultado + '% de votos brancos';
    })
  }

  calcularVotosNulos(){
    this.apiService.getVotosNulos(this.totalEleitores, this.votosNulos).subscribe((resultado: any) => {
        this.resultado = resultado + '% de votos nulos';
    })
  }
}
