import { EstadoBr } from './../../models/estado-cidade-br';
import { CidadeBr} from '../../models/estado-cidade-br';
import { WebServiceIbgeService } from '../../services/web-service-ibge';
import { Component, OnInit   } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss']
})
export class CidadeEstadoComponent implements OnInit {

  estados!: EstadoBr[];

  cidades!: CidadeBr[];

  estadoValor!: EstadoBr;

  @Input()
  estadoInicial: String = "";
    
  constructor(private cidadeEstado:WebServiceIbgeService) { }

  ngOnInit(): void {
    console.log(1);
    this.cidadeEstado.getEstadosBr().subscribe(dados => {
      this.estados = dados; 
      console.log(2);

      if(this.estadoInicial!=""){
//        this.estadoValor = dados.filter(i => i.sigla==this.estadoInicial);
      }

    });    
    console.log(3);

  }


  onSelectEstado(event: any){
    debugger;
    this.cidadeEstado.getCidadesBr(event.value.id).subscribe(dados => {
      this.cidades = dados; 
      console.log(dados);
    });
  }

}









