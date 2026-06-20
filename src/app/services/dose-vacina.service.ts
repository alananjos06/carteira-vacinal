import { Injectable } from '@angular/core';
import { DoseVacina } from '../models/dose-vacina.model';

@Injectable({ providedIn: 'root' })
export class DoseVacinaService {
  private doses: DoseVacina[] = [
    // Ana Clara (id: '1')
    new DoseVacina('d1', '1', 'v1', 1, new Date(2025, 9, 15), new Date(2025, 9, 15)), // aplicada → EM_DIA
    new DoseVacina('d2', '1', 'v3', 1, new Date(2025, 11, 15), null),                  // data já passou → ATRASADA
    new DoseVacina('d3', '1', 'v4', 1, new Date(2026, 9, 15), null),                   // data futura → PENDENTE

    // Pedro Henrique (id: '2')
    new DoseVacina('d4', '2', 'v1', 1, new Date(2023, 2, 3), new Date(2023, 2, 3)),    // aplicada → EM_DIA
    new DoseVacina('d5', '2', 'v4', 1, new Date(2024, 2, 3), new Date(2024, 2, 3))     // aplicada → EM_DIA
  ];

  listarPorCrianca(criancaId: string): DoseVacina[] {
    return this.doses.filter(d => d.criancaId === criancaId);
  }
}