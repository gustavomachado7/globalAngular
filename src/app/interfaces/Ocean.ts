export interface Ocean {
  //id: string;
  regiao: string;
  temperaturaAgua: number;
  ph: number;
  nivelPoluicao: number;
  especies: [{ nome: string; status: string }];
}
