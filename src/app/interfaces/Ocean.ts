export interface Ocean {
  regiao: string;
  temperaturaAgua: number;
  pH: number;
  nivelPoluicao: string;
  especies: [{ nome: string; status: string }];
}
