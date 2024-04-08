import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.css'
})
export class CriarContaComponent {

  //atributo
  apiUrl: string = "http://localhost:3000/"

  // construtor para injecao de dependencia
  constructor(
    private HttpClient: HttpClient //inicializacao automatica
    ){
  }

  // objeto para capturar o formulário
  formCriarConta = new FormGroup({
    nome: new FormControl('', 
      [Validators.required, Validators.minLength(8), Validators.maxLength(150)]),
    email: new FormControl('',
      [Validators.required, Validators.email]),
    telefone: new FormControl('', 
      [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
    mensagem: new FormControl('', 
      [Validators.required, Validators.minLength(1), Validators.maxLength(150)]),
    /*
    email: new FormControl('',
      [Validators.required, Validators.email]),
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
      */
  })

  // onjeto para executar as validações

  get form(): any{
    return this.formCriarConta.controls;
  }

  // funcao para capturar um SUBMIT do formulario

  onSubmit(){
    
    //fazendo uma requisicao POST para o endpoint /api/selecoes
    this.HttpClient.post(this.apiUrl + "usuarios", this.formCriarConta.value)
    .subscribe(/*capturar retorno da api*/ {
      next: (data) => { //resposta de sucesso da API
        console.log(data)
      },
      error: (e)=> { //resposta de erro da API
        console.log(e.error)
      }
    })

  }
}
