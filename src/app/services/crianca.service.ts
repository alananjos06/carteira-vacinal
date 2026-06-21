import { Injectable } from '@angular/core';
import { Crianca } from '../models/crianca.model';

@Injectable({ providedIn: 'root' })
export class CriancaService {
  private criancas: Crianca[] = [
    new Crianca('1', 'Ana Clara', new Date(2025, 9, 15)),
    new Crianca('2', 'Pedro Henrique', new Date(2023, 2, 3)),
    new Crianca('3', 'Guilherme Silva', new Date(2021, 0, 10), 'Silva'),
    new Crianca('4', 'João Silva', new Date(2024, 11, 5), 'Silva')
  ];

  listarTodas(): Crianca[] {
    return this.criancas;
  }

  buscarPorId(id: string): Crianca | undefined {
    return this.criancas.find(c => c.id === id);
  }

  listarPorFamilia(nomeFamilia: string): Crianca[] {
    return this.criancas.filter(c => c.familia === nomeFamilia);
  }

  listarFamilias(): string[] {
    const nomes = this.criancas
      .map(c => c.familia)
      .filter((f): f is string => !!f);
    return [...new Set(nomes)];
  }
}