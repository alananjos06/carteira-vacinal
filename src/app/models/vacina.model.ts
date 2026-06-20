export class Vacina {
  constructor(
    public id: string,
    public nome: string,
    public descricao: string,
    public protegeContra: string,
    public dosesNecessarias: number,
    public idadeRecomendadaMeses: number
  ) {}
}