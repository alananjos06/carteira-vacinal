import { Injectable } from '@angular/core';
import { Crianca } from '../models/crianca.model';

@Injectable({ providedIn: 'root' })
export class CriancaService {
  private criancas: Crianca[] = [
    new Crianca('1', 'Ana Clara', new Date(2025, 9, 15)),
    new Crianca('2', 'Pedro Henrique', new Date(2023, 2, 3))
  ];

  listarTodas(): Crianca[] {
    return this.criancas;
  }

  buscarPorId(id: string): Crianca | undefined {
    return this.criancas.find(c => c.id === id);
  }
}