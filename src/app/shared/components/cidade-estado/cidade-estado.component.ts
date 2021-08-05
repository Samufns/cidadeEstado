import { EstadoBr } from './../../models/estado-cidade-br';
import { CidadeBr} from '../../models/estado-cidade-br';
import { WebServiceIbgeService } from '../../services/web-service-ibge';
import { Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss']
})
export class CidadeEstadoComponent implements OnInit {

  estados!: EstadoBr[];
  cidades!: CidadeBr[];
  estadoValor!: EstadoBr[];
  estadoSelecionado!: any;


  @Input() estadoInicial: string = "";
  constructor(private cidadeEstado:WebServiceIbgeService) { }

  ngOnInit(): void {

    this.cidadeEstado.getEstadosBr().subscribe(dados => {
    this.estados = dados; 
    
    if(this.estadoInicial!= ""){
    this.estadoValor = dados.filter(i => i.sigla == this.estadoInicial);
    this.estadoSelecionado = this.estadoValor[0];
    }});}


  onSelectEstado(event: any){
    this.cidadeEstado.getCidadesBr(event.value.id).subscribe(dados => {
      this.cidades = dados; 
      console.log(dados);
    });
  }

}









