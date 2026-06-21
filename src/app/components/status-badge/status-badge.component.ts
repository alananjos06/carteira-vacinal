import { Component, Input } from '@angular/core';
import { IonBadge } from '@ionic/angular/standalone';
import { StatusVacina } from '../../models/status-vacina.enum';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [IonBadge],
  template: `<ion-badge [color]="cor()">{{ texto() }}</ion-badge>`
})
export class StatusBadgeComponent {
  @Input({ required: true }) status!: StatusVacina;

  cor(): string {
    switch (this.status) {
      case StatusVacina.EM_DIA: return 'primary';
      case StatusVacina.PENDENTE: return 'secondary';
      case StatusVacina.ATRASADA: return 'tertiary';
      default: return 'medium';
    }
  }

  texto(): string {
    switch (this.status) {
      case StatusVacina.EM_DIA: return 'Em dia';
      case StatusVacina.PENDENTE: return 'Pendente';
      case StatusVacina.ATRASADA: return 'Atrasada';
      default: return '';
    }
  }
}