import { StatusVacina } from './status-vacina.enum';

export class DoseVacina {
  constructor(
    public id: string,
    public criancaId: string,
    public vacinaId: string,
    public numeroDose: number,
    public dataPrevista: Date,
    public dataAplicacao: Date | null = null
  ) {}

  getStatus(): StatusVacina {
    if (this.dataAplicacao) {
      return StatusVacina.EM_DIA;
    }
    const hoje = new Date();
    return this.dataPrevista < hoje ? StatusVacina.ATRASADA : StatusVacina.PENDENTE;
  }
}