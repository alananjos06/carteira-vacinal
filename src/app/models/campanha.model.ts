export class Campanha {
  constructor(
    public id: string,
    public nome: string,
    public descricao: string,
    public publicoAlvo: string,
    public dataInicio: Date,
    public dataFim: Date
  ) {}

  estaAtiva(): boolean {
    const hoje = new Date();
    return hoje >= this.dataInicio && hoje <= this.dataFim;
  }
}