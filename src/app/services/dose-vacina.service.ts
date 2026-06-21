import { Injectable } from '@angular/core';
import { DoseVacina } from '../models/dose-vacina.model';
import { StatusVacina } from '../models/status-vacina.enum';

@Injectable({ providedIn: 'root' })
export class DoseVacinaService {
  private doses: DoseVacina[] = [
    new DoseVacina('d1', '1', 'v1', 1, new Date(2025, 9, 15), new Date(2025, 9, 15)),
    new DoseVacina('d2', '1', 'v3', 1, new Date(2025, 11, 15), null),
    new DoseVacina('d3', '1', 'v4', 1, new Date(2026, 9, 15), null),

    new DoseVacina('d4', '2', 'v1', 1, new Date(2023, 2, 3), new Date(2023, 2, 3)),
    new DoseVacina('d5', '2', 'v4', 1, new Date(2024, 2, 3), new Date(2024, 2, 3)),

    new DoseVacina('d6', '3', 'v1', 1, new Date(2021, 0, 10), new Date(2021, 0, 10)),
    new DoseVacina('d7', '3', 'v4', 1, new Date(2022, 0, 10), new Date(2022, 0, 10)),

    new DoseVacina('d8', '4', 'v1', 1, new Date(2024, 11, 5), new Date(2024, 11, 5)),
    new DoseVacina('d9', '4', 'v3', 1, new Date(2025, 1, 5), null)
  ];

  listarPorCrianca(criancaId: string): DoseVacina[] {
    return this.doses.filter(d => d.criancaId === criancaId);
  }

  obterStatusGeral(criancaId: string): StatusVacina {
    const doses = this.listarPorCrianca(criancaId);
    if (doses.some(d => d.getStatus() === StatusVacina.ATRASADA)) {
      return StatusVacina.ATRASADA;
    }
    if (doses.some(d => d.getStatus() === StatusVacina.PENDENTE)) {
      return StatusVacina.PENDENTE;
    }
    return StatusVacina.EM_DIA;
  }
}