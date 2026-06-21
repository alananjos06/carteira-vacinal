export class Crianca {
  constructor(
    public id: string,
    public nome: string,
    public dataNascimento: Date,
    public familia?: string
  ) {}

  calcularIdadeEmMeses(): number {
    const hoje = new Date();
    let meses = (hoje.getFullYear() - this.dataNascimento.getFullYear()) * 12;
    meses += hoje.getMonth() - this.dataNascimento.getMonth();
    return meses;
  }

  calcularIdadeFormatada(): string {
    const meses = this.calcularIdadeEmMeses();
    if (meses < 12) {
      return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    }
    const anos = Math.floor(meses / 12);
    return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
  }
}