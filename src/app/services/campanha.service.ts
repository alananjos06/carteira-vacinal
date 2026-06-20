import { Injectable } from '@angular/core';
import { Campanha } from '../models/campanha.model';

@Injectable({ providedIn: 'root' })
export class CampanhaService {
  private campanhas: Campanha[] = [
    new Campanha(
      'c1',
      'Campanha Nacional de Multivacinação',
      'Atualize a caderneta de crianças até 5 anos',
      'Crianças de 0 a 5 anos',
      new Date(2026, 5, 1),
      new Date(2026, 6, 30)
    )
  ];

  listarAtivas(): Campanha[] {
    return this.campanhas.filter(c => c.estaAtiva());
  }
}