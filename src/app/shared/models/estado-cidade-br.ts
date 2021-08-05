export interface EstadoBr{
      id: Number;
      sigla: String;
      nome: String;
      regiao:[
            id: Number,
            sigla: String,
            nome: String
      ]
      
           
}

export interface CidadeBr{
      id: Number;
      sigla: String;
      nome: String;
}