import { CidadeBr, EstadoBr } from './../models/estado-cidade-br';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebServiceIbgeService {

  constructor(private http: HttpClient) { }

  getEstadosBr(){

    return this.http.get<EstadoBr[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");

  }

  getCidadesBr(idEstado: number){
    return this.http.get<CidadeBr[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+ idEstado +"/municipios")
  }

 
}
