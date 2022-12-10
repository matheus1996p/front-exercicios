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

  resultado?: number;

  ngOnInit(): void {

  }
}
