import { ApiService } from './../../service/api-service.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


interface Marca {
  marca: string,
  imagePath: string
}

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  formulario: FormGroup;
  submitted = false;
  formValido: boolean = false;
  isLoading: boolean = false;

  veiculo = new FormControl('', [Validators.required]);
  marca = new FormControl('', [Validators.required]);
  descricao = new FormControl('', [Validators.required]);
  ano = new FormControl('', [Validators.required]);
  vendido = new FormControl(false, [Validators.required]);

  marcas: Marca[];
  selectedMarca?: Marca;

  veiculos: any[] = [];
  clonedVeiculos: { [s: string]: any; } = {};
  veiculos1: any[] = [];
  veiculos2: any[] = [];

  naoVendidos: number = 0;
  vendasFiat: number = 0;
  vendasFord: number = 0;
  vendasChevrolet: number = 0;
  vendasTesla: number = 0;
  vendasToyota: number = 0;
  vendasVolkswagen: number = 0;

  criadoUltimaSemana: number = 0;

  filtrarVendidos: boolean = false;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder) {
      this.formulario = this.formBuilder.group({
        veiculo: this.veiculo,
        marca: this.marca,
        descricao: this.descricao,
        ano: this.ano,
        vendido: this.vendido
      });

      this.marcas = [
        {marca: 'Fiat', imagePath: 'assets/logos/fiat-logo'},
        {marca: 'Ford', imagePath: 'assets/logos/ford-logo'}
      ];
  }

  ngOnInit(){
    this.carregarVeiculos();
  }

  criar(){
    this.isLoading = true;
    if (this.formulario.valid) {
      this.apiService.setVeiculo(this.formulario.value).subscribe((resposta: any) =>{
        this.carregarVeiculos();
      });
      this.formulario.reset();
      this.formulario.controls['vendido'].setValue(false);
    } else {
      this.validateAllFormFields(this.formulario);
    }

  }

  carregarVeiculos(){
    this.apiService.getVeiculos().subscribe((resultado: any) => {
        this.veiculos = resultado;
        this.formatarData();
        this.detalhes();
        console.log(this.veiculos);
    });
  }

  detalhes(){
    this.naoVendidos = 0;
    this.vendasFiat = 0;
    this.vendasFord = 0;
    this.vendasChevrolet = 0;
    this.vendasTesla = 0;
    this.vendasToyota = 0;
    this.vendasVolkswagen = 0;
    this.criadoUltimaSemana = 0;

    let dataAtual = new Date();
    let ultimaSemana = new Date(dataAtual.setDate(dataAtual.getDate() -7));

    this.veiculos.forEach(item => {
      let dataCriacao = new Date(item.created);

      if(!item.vendido){
        this.naoVendidos++;
      }
      if(item.marca == 'Fiat'){
        this.vendasFiat++;
      }
      if(item.marca == 'Ford'){
        this.vendasFord++;
      }
      if(item.marca == 'Chevrolet'){
        this.vendasChevrolet++;
      }
      if(item.marca == 'Tesla'){
        this.vendasTesla++;
      }
      if(item.marca == 'Volkswagen'){
        this.vendasVolkswagen++;
      }
      if(item.marca == 'Toyota'){
        this.vendasToyota++;
      }
      if(dataCriacao > ultimaSemana){
        this.criadoUltimaSemana++;
      }
    });
  }

  formatarData(){
    this.veiculos.forEach((item: any) =>{
        item.created = new Date(item.created).toLocaleDateString();
        item.updated = new Date(item.updated).toLocaleDateString();
    })
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  getErrorMessageVeiculo() {
    return this.veiculo.hasError('required') ? 'O campo Veiculo é obrigatório.' : '';
  }

  getErrorMessageDescricao(){
    return this.descricao.hasError('required') ? 'O campo Descrição é obrigatório.' : '';
  }

  getErrorMessageAno(){
    return this.ano.hasError('required') ? 'O campo Ano é obrigatório.' : '';
  }

  getErrorMessageVendido(){
    return this.vendido.hasError('required') ? 'O campo Vendido é obrigatório.' : '';
  }

  getErrorMessageMarca() {
    return this.marca.hasError('required') ? 'O campo Marca é obrigatório.' : '';
  }

  onRowEditInit(veiculo: any) {
    this.clonedVeiculos[veiculo.id] = {...veiculo};
  }

  onRowEditSave(item: any) {
    let veiculo: any = {};

    veiculo.veiculo = item.veiculo;
    veiculo.marca = item.marca;
    veiculo.ano = item.ano;
    veiculo.descricao = item.descricao;
    veiculo.vendido = item.vendido;

    this.apiService.atualizaVeiculo(veiculo, item.id).subscribe((respostas) =>{
      console.log(respostas);
      this.carregarVeiculos();
    })

  }

  onRowEditCancel(veiculo: any, index: number) {
    this.veiculos2[index] = this.clonedVeiculos[veiculo.id];
    delete this.clonedVeiculos[veiculo.id];
  }

  deletaVeiculo(veiculo: any){
    this.apiService.deletaVeiculo(veiculo.id).subscribe((retorno: any) => {
      this.carregarVeiculos();
    })
  }

}
