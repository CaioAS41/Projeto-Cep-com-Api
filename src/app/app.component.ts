import { Component, VERSION } from '@angular/core';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
[x: string]: any;
  title = 'CepAngular';


  constructor(private cepsService: CepServiceService){}

  consultaCep(valor, form){
    this.cepsService.buscar(valor).subscribe((dados) => this.popularForm(dados, form));
  }
    popularForm(dados, form){
      form.setValue({
        cep: dados.cep,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      })
    }
  }


