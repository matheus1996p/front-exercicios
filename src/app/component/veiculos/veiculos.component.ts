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

  }

  criar(){
    this.isLoading = true;
    if (this.formulario.valid) {
      console.log('form submitted');
      console.log(this.formulario);
      this.formulario.reset();
      this.formulario.controls['vendido'].setValue(false);
    } else {
      this.validateAllFormFields(this.formulario);
    }

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

}
