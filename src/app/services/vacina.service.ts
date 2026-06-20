import { Injectable } from '@angular/core';
import { Vacina } from '../models/vacina.model';

@Injectable({ providedIn: 'root' })
export class VacinaService {
  private vacinas: Vacina[] = [
    new Vacina('v1', 'BCG', 'Dose única ao nascer', 'Tuberculose', 1, 0),
    new Vacina('v2', 'Hepatite B', 'Primeira dose ao nascer', 'Hepatite B', 1, 0),
    new Vacina('v3', 'Pentavalente', '1ª dose aos 2 meses', 'Difteria, Tétano, Coqueluche, Hepatite B, Hib', 3, 2),
    new Vacina('v4', 'Tríplice viral', 'Dose única', 'Sarampo, Caxumba, rubéola', 1, 12)
  ];

  listarTodas(): Vacina[] {
    return this.vacinas;
  }

  buscarPorId(id: string): Vacina | undefined {
    return this.vacinas.find(v => v.id === id);
  }
}